import { useRef, useState } from 'react';
import { imageToDataUrl, transcribeHandwriting } from '../lib/ai/ocr';
import { ErrorBox, Spinner } from './ui';

/** "Photo of handwriting" button: recognises the text and hands it to the writing field for review. */
export function HandwritingUpload({ onText, disabled }: { onText: (text: string) => void; disabled?: boolean }) {
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [info, setInfo] = useState('');
  const [preview, setPreview] = useState('');

  const handle = async (file?: File) => {
    if (!file) return;
    setBusy(true);
    setErr('');
    setInfo('');
    try {
      const url = await imageToDataUrl(file);
      setPreview(url);
      const r = await transcribeHandwriting(url);
      onText(r.text);
      const unclear = (r.text.match(/\[\?\]/g) ?? []).length;
      setInfo(
        `Текст распознан (${r.engine}). Сверьте его с фото и исправьте только ошибки РАСПОЗНАВАНИЯ — свои ошибки оставьте, их разберёт проверка.` +
          (unclear ? ` Неуверенно распознанных мест: ${unclear} (помечены [?]).` : ''),
      );
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
      if (input.current) input.current.value = '';
    }
  };

  return (
    <div className="handwriting">
      <input ref={input} type="file" accept="image/*" hidden onChange={(e) => void handle(e.target.files?.[0])} />
      <button type="button" className="btn" disabled={busy || disabled} onClick={() => input.current?.click()}>
        📷 Загрузить фото рукописного текста
      </button>
      {busy && <Spinner text="Распознаю рукопись…" />}
      <ErrorBox error={err} />
      {info && (
        <div className="info-box small">
          {preview && (
            <details>
              <summary>Показать фото</summary>
              <img src={preview} alt="" className="hw-preview" />
            </details>
          )}
          {info}
        </div>
      )}
    </div>
  );
}
