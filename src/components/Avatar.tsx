import { useId, type ReactNode } from 'react';
import { getItem, shade, type Build, type Gender, type Item, type Look, type Slot } from '../lib/avatar/catalog';

/* Front-facing character on a 200 × 320 canvas. Layers (back → front):
   background, hair (back), arms, legs, torso, bottoms, shoes, top, outerwear, hands, neck item, head, face, hair, glasses, hat. */

interface Geo {
  sh: number;
  wa: number;
  hi: number;
  leg: number;
  arm: number;
}
const GEO: Record<Gender, Record<Build, Geo>> = {
  f: {
    slim: { sh: 24, wa: 17, hi: 22, leg: 11, arm: 7 },
    average: { sh: 26, wa: 19, hi: 25, leg: 12, arm: 8 },
    athletic: { sh: 28, wa: 21, hi: 25, leg: 13, arm: 9 },
    full: { sh: 30, wa: 26, hi: 31, leg: 15, arm: 10 },
  },
  m: {
    slim: { sh: 27, wa: 20, hi: 21, leg: 12, arm: 8 },
    average: { sh: 30, wa: 23, hi: 23, leg: 13, arm: 9 },
    athletic: { sh: 35, wa: 24, hi: 24, leg: 14, arm: 11 },
    full: { sh: 33, wa: 31, hi: 29, leg: 16, arm: 11 },
  },
};

const ANKLE = 286;
const CROTCH = 212;
const lerp = (a: number, b: number, t: number) => a + (b - a) * Math.max(0, Math.min(1, t));

function torso(g: Geo, e: number, bottom = 206): string {
  const L = (x: number) => 100 - x - e;
  const R = (x: number) => 100 + x + e;
  return `M ${100 - 11} ${121 - e} Q ${L(g.sh)} ${121 - e} ${L(g.sh)} 134 C ${L(g.sh)} 150 ${L(g.wa)} 154 ${L(g.wa)} 168 C ${L(g.wa)} 182 ${L(g.hi)} 186 ${L(g.hi)} 198 L ${L(g.hi)} ${bottom} L ${R(g.hi)} ${bottom} L ${R(g.hi)} 198 C ${R(g.hi)} 186 ${R(g.wa)} 182 ${R(g.wa)} 168 C ${R(g.wa)} 154 ${R(g.sh)} 150 ${R(g.sh)} 134 Q ${R(g.sh)} ${121 - e} ${100 + 11} ${121 - e} Z`;
}

/** width of the body at height y (for clothes that end between shoulders and hips) */
function halfAt(g: Geo, y: number): number {
  if (y <= 168) return lerp(g.sh, g.wa, (y - 134) / 34);
  return lerp(g.wa, g.hi, (y - 168) / 30);
}

function legX(g: Geo, s: number, e: number) {
  const ax = 100 + s * g.hi * 0.55;
  const lw = g.leg / 2 + e;
  return {
    outer: (y: number) => lerp(100 + s * (g.hi + e), ax + s * lw, (y - 198) / (ANKLE - 198)),
    inner: (y: number) => (y < CROTCH ? 100 + s * 1 : lerp(100 + s * 1, ax - s * lw, (y - CROTCH) / (ANKLE - CROTCH))),
    ax,
  };
}

function legPath(g: Geo, s: number, e: number, top: number, bottom: number): string {
  const { outer, inner } = legX(g, s, e);
  const crotch = Math.max(top, CROTCH);
  return `M ${outer(top)} ${top} L ${outer(bottom)} ${bottom} L ${inner(bottom)} ${bottom} L ${inner(crotch)} ${crotch} L ${100 + s} ${top} Z`;
}

function armGeo(g: Geo, s: number) {
  const sx = 100 + s * (g.sh - g.arm * 0.45);
  const wx = 100 + s * (g.sh + 4);
  return { x: (y: number) => lerp(sx, wx, (y - 128) / 76), hw: (y: number, e: number) => lerp(g.arm / 2 + e, g.arm / 2 - 1 + e, (y - 128) / 76), wx };
}

function armPath(g: Geo, s: number, e: number, from: number, to: number): string {
  const a = armGeo(g, s);
  const f = from;
  const t = to;
  return `M ${a.x(f) - a.hw(f, e)} ${f + 5} Q ${a.x(f) - a.hw(f, e)} ${f - 4} ${a.x(f)} ${f - 4} Q ${a.x(f) + a.hw(f, e)} ${f - 4} ${a.x(f) + a.hw(f, e)} ${f + 5} L ${a.x(t) + a.hw(t, e)} ${t} L ${a.x(t) - a.hw(t, e)} ${t} Z`;
}

// ---------------------------------------------------------------- fills & patterns

function PatternDefs({ id, item }: { id: string; item: Item }) {
  const c = item.color;
  if (c === 'rainbow')
    return (
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        {['#ef4444', '#f97316', '#facc15', '#22c55e', '#3b82f6', '#8b5cf6'].map((col, i) => (
          <stop key={i} offset={i / 5} stopColor={col} />
        ))}
      </linearGradient>
    );
  if (c === 'galaxy')
    return (
      <pattern id={id} width="24" height="24" patternUnits="userSpaceOnUse">
        <rect width="24" height="24" fill="#1e1b4b" />
        <circle cx="6" cy="5" r="1" fill="#fff" />
        <circle cx="17" cy="12" r="0.8" fill="#c4b5fd" />
        <circle cx="10" cy="19" r="1.2" fill="#f0abfc" />
        <circle cx="21" cy="3" r="0.6" fill="#fff" />
        <circle cx="3" cy="14" r="0.7" fill="#93c5fd" />
      </pattern>
    );
  const a = item.accent;
  const base = <rect width="40" height="40" fill={c} />;
  switch (item.pattern) {
    case 'stripes':
      return (
        <pattern id={id} width="10" height="10" patternUnits="userSpaceOnUse">
          {base}
          <rect y="0" width="10" height="4" fill={a} opacity="0.85" />
        </pattern>
      );
    case 'diagonal':
      return (
        <pattern id={id} width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          {base}
          <rect width="4" height="10" fill={a} opacity="0.8" />
        </pattern>
      );
    case 'dots':
      return (
        <pattern id={id} width="9" height="9" patternUnits="userSpaceOnUse">
          {base}
          <circle cx="4.5" cy="4.5" r="1.8" fill={a} />
        </pattern>
      );
    case 'checks':
      return (
        <pattern id={id} width="12" height="12" patternUnits="userSpaceOnUse">
          {base}
          <rect width="12" height="4" fill={a} opacity="0.45" />
          <rect width="4" height="12" fill={a} opacity="0.45" />
        </pattern>
      );
    case 'zigzag':
      return (
        <pattern id={id} width="12" height="10" patternUnits="userSpaceOnUse">
          {base}
          <path d="M0 6 L3 2 L6 6 L9 2 L12 6" stroke={a} strokeWidth="1.6" fill="none" />
        </pattern>
      );
    case 'stars':
      return (
        <pattern id={id} width="14" height="14" patternUnits="userSpaceOnUse">
          {base}
          <path d="M7 3 L8.2 6 L11.3 6.1 L8.9 8 L9.8 11 L7 9.2 L4.2 11 L5.1 8 L2.7 6.1 L5.8 6 Z" fill={a} />
        </pattern>
      );
    case 'hearts':
      return (
        <pattern id={id} width="14" height="14" patternUnits="userSpaceOnUse">
          {base}
          <path d="M7 11 C2 7 3 3 5.5 3.5 C6.5 3.7 7 4.6 7 5 C7 4.6 7.5 3.7 8.5 3.5 C11 3 12 7 7 11 Z" fill={a} />
        </pattern>
      );
    case 'floral':
      return (
        <pattern id={id} width="16" height="16" patternUnits="userSpaceOnUse">
          {base}
          {[0, 72, 144, 216, 288].map((r) => (
            <ellipse key={r} cx="8" cy="5.5" rx="1.6" ry="2.6" fill={a} transform={`rotate(${r} 8 8)`} />
          ))}
          <circle cx="8" cy="8" r="1.4" fill="#facc15" />
        </pattern>
      );
    case 'camo':
      return (
        <pattern id={id} width="30" height="30" patternUnits="userSpaceOnUse">
          {base}
          <path d="M2 4 Q8 0 12 5 Q10 10 4 9 Z" fill={shade(c, -0.35)} />
          <path d="M16 14 Q24 10 28 16 Q24 22 17 20 Z" fill={shade(c, 0.3)} />
          <path d="M5 20 Q10 17 13 22 Q9 28 3 25 Z" fill={shade(c, -0.2)} />
        </pattern>
      );
    default:
      return null;
  }
}

const isSpecial = (c: string) => c === 'rainbow' || c === 'galaxy';
function fillOf(item: Item, id: string): string {
  return isSpecial(item.color) || item.pattern !== 'solid' ? `url(#${id})` : item.color;
}
function lineOf(item: Item): string {
  return isSpecial(item.color) ? '#4c1d95' : shade(item.color, -0.35);
}
function solidOf(item: Item): string {
  return item.color === 'rainbow' ? '#8b5cf6' : item.color === 'galaxy' ? '#312e81' : item.color;
}

// ---------------------------------------------------------------- body

function Body({ g, skin }: { g: Geo; skin: string }) {
  const line = shade(skin, -0.25);
  return (
    <g stroke={line} strokeWidth="1" strokeLinejoin="round">
      <path d={armPath(g, -1, 0, 128, 204)} fill={skin} />
      <path d={armPath(g, 1, 0, 128, 204)} fill={skin} />
      <path d={legPath(g, -1, 0, 196, ANKLE)} fill={skin} />
      <path d={legPath(g, 1, 0, 196, ANKLE)} fill={skin} />
      <path d={torso(g, 0)} fill={skin} />
      <rect x="93" y="98" width="14" height="28" rx="5" fill={skin} stroke="none" />
    </g>
  );
}

function Hands({ g, skin }: { g: Geo; skin: string }) {
  return (
    <g fill={skin} stroke={shade(skin, -0.25)} strokeWidth="1">
      {[-1, 1].map((s) => (
        <circle key={s} cx={armGeo(g, s).wx} cy={209} r={g.arm / 2 + 1.8} />
      ))}
    </g>
  );
}

// ---------------------------------------------------------------- clothes

function Top({ g, it, f, skin }: { g: Geo; it: Item; f: string; skin: string }) {
  const line = lineOf(it);
  const t = it.template;
  const sleeveTo = t === 'tee' || t === 'vneck' || t === 'polo' || t === 'blouse' || t === 'dress' ? 152 : t === 'tank' ? 0 : 201;
  const bottom = t === 'tee' || t === 'tank' || t === 'vneck' ? 206 : t === 'sweater' ? 208 : 207;
  const body =
    t === 'dress'
      ? `M ${100 - 11} 119.5 Q ${100 - g.sh - 1.5} 119.5 ${100 - g.sh - 1.5} 134 C ${100 - g.sh - 1.5} 150 ${100 - g.wa - 1.5} 154 ${100 - g.wa - 1.5} 168 L ${100 - g.hi - 16} 252 Q 100 258 ${100 + g.hi + 16} 252 L ${100 + g.wa + 1.5} 168 C ${100 + g.wa + 1.5} 154 ${100 + g.sh + 1.5} 150 ${100 + g.sh + 1.5} 134 Q ${100 + g.sh + 1.5} 119.5 ${100 + 11} 119.5 Z`
      : t === 'tank'
        ? `M 88 120 L ${100 - g.sh + 7} 122 C ${100 - g.sh} 140 ${100 - g.wa - 1.5} 150 ${100 - g.wa - 1.5} 168 C ${100 - g.wa - 1.5} 182 ${100 - g.hi - 1.5} 186 ${100 - g.hi - 1.5} 198 L ${100 - g.hi - 1.5} ${bottom} L ${100 + g.hi + 1.5} ${bottom} L ${100 + g.hi + 1.5} 198 C ${100 + g.hi + 1.5} 186 ${100 + g.wa + 1.5} 182 ${100 + g.wa + 1.5} 168 C ${100 + g.wa + 1.5} 150 ${100 + g.sh} 140 ${100 + g.sh - 7} 122 L 112 120 Z`
        : torso(g, 1.5, bottom);
  return (
    <g stroke={line} strokeWidth="1.2" strokeLinejoin="round">
      {sleeveTo > 0 && (
        <>
          <path d={armPath(g, -1, 1.6, 128, sleeveTo)} fill={f} />
          <path d={armPath(g, 1, 1.6, 128, sleeveTo)} fill={f} />
        </>
      )}
      <path d={body} fill={f} />
      {/* necklines */}
      {(t === 'tee' || t === 'longsleeve' || t === 'sweater' || t === 'henley') && <path d="M 90 120 Q 100 129 110 120" fill={skin} stroke={line} />}
      {(t === 'vneck' || t === 'blouse' || t === 'dress') && <path d="M 89 119.5 L 100 136 L 111 119.5 Z" fill={skin} stroke={line} />}
      {t === 'tank' && <path d="M 88 120 Q 100 136 112 120 Z" fill={skin} stroke={line} />}
      {t === 'turtleneck' && <rect x="91" y="104" width="18" height="20" rx="4" fill={f} />}
      {t === 'shirt' && (
        <>
          <path d="M 100 122 L 89 118 L 92 130 Z M 100 122 L 111 118 L 108 130 Z" fill={solidOf(it) === '#f5f5f4' ? '#fff' : shade(solidOf(it), 0.15)} />
          <line x1="100" y1="124" x2="100" y2={bottom} />
          {[136, 150, 164, 178, 192].map((y) => (
            <circle key={y} cx="102.5" cy={y} r="1.1" fill="#fff" stroke="none" />
          ))}
          <rect x={100 + g.sh * 0.35} y="140" width="9" height="9" rx="1.5" fill="none" />
        </>
      )}
      {t === 'polo' && (
        <>
          <path d="M 100 121 L 88 117 L 91 127 Z M 100 121 L 112 117 L 109 127 Z" fill={shade(solidOf(it), 0.2)} />
          <line x1="100" y1="122" x2="100" y2="140" />
          <circle cx="102" cy="129" r="1" fill="#fff" stroke="none" />
          <circle cx="102" cy="136" r="1" fill="#fff" stroke="none" />
        </>
      )}
      {t === 'henley' && (
        <>
          <line x1="100" y1="126" x2="100" y2="142" />
          <circle cx="102" cy="131" r="1" fill="#fff" stroke="none" />
          <circle cx="102" cy="137" r="1" fill="#fff" stroke="none" />
        </>
      )}
      {(t === 'sweater' || t === 'turtleneck') && (
        <>
          <rect x={100 - g.hi - 1.5} y={bottom - 5} width={2 * g.hi + 3} height="5" fill={shade(solidOf(it), -0.1)} />
          {[-1, 1].map((s) => {
            const a = armGeo(g, s);
            return <rect key={s} x={a.x(197) - a.hw(197, 1.6)} y="196" width={2 * a.hw(197, 1.6)} height="5" fill={shade(solidOf(it), -0.1)} />;
          })}
        </>
      )}
      {t === 'blouse' && <path d="M 92 124 Q 100 140 108 124" fill="none" stroke={shade(solidOf(it), 0.4)} strokeWidth="3" />}
      {t === 'dress' && <rect x={100 - g.wa - 1.5} y="166" width={2 * g.wa + 3} height="5" fill={shade(solidOf(it), -0.25)} />}
    </g>
  );
}

function Bottom({ g, it, f }: { g: Geo; it: Item; f: string }) {
  const line = lineOf(it);
  const t = it.template;
  const wb = halfAt(g, 190) + 1.5;
  const e = t === 'leggings' ? 0.6 : t === 'joggers' || t === 'cargo' ? 2.4 : 1.6;
  const legEnd = t === 'shorts' ? 238 : t === 'chinos' ? 280 : t === 'leggings' ? 282 : 285;
  const hips = `M ${100 - wb} 190 L ${100 + wb} 190 L ${100 + g.hi + e} 198 L ${100 + g.hi + e} 214 L ${100 - g.hi - e} 214 L ${100 - g.hi - e} 198 Z`;
  if (t === 'skirt' || t === 'longskirt') {
    const end = t === 'skirt' ? 240 : 278;
    const flare = t === 'skirt' ? 12 : 20;
    return (
      <g stroke={line} strokeWidth="1.2" strokeLinejoin="round">
        <path d={`M ${100 - wb} 190 L ${100 + wb} 190 L ${100 + g.hi + flare} ${end} Q 100 ${end + 6} ${100 - g.hi - flare} ${end} Z`} fill={f} />
        <rect x={100 - wb} y="189" width={2 * wb} height="5" fill={shade(solidOf(it), -0.2)} />
        {t === 'skirt' && [-8, 0, 8].map((x) => <line key={x} x1={100 + x} y1="196" x2={100 + x * 1.6} y2={end + 2} opacity="0.5" />)}
      </g>
    );
  }
  return (
    <g stroke={line} strokeWidth="1.2" strokeLinejoin="round">
      <path d={legPath(g, -1, e, 196, legEnd)} fill={f} />
      <path d={legPath(g, 1, e, 196, legEnd)} fill={f} />
      <path d={hips} fill={f} />
      <rect x={100 - wb} y="189" width={2 * wb} height="5" fill={t === 'jeans' ? shade(solidOf(it), -0.15) : shade(solidOf(it), -0.25)} />
      {t !== 'leggings' && t !== 'joggers' && <line x1="100" y1="194" x2="100" y2="212" />}
      {t === 'jeans' &&
        [-1, 1].map((s) => {
          const l = legX(g, s, e);
          return (
            <g key={s}>
              <path d={`M ${100 + s * (wb - 2)} 194 Q ${100 + s * (wb - 9)} 200 ${100 + s * 6} 196`} fill="none" stroke="#f59e0b" strokeWidth="0.8" />
              <rect x={Math.min(l.outer(legEnd - 5), l.inner(legEnd - 5))} y={legEnd - 5} width={Math.abs(l.outer(legEnd - 5) - l.inner(legEnd - 5))} height="5" fill={shade(solidOf(it), 0.15)} />
            </g>
          );
        })}
      {t === 'joggers' &&
        [-1, 1].map((s) => {
          const l = legX(g, s, e);
          return <rect key={s} x={Math.min(l.outer(legEnd - 6), l.inner(legEnd - 6))} y={legEnd - 6} width={Math.abs(l.outer(legEnd - 6) - l.inner(legEnd - 6))} height="6" fill={shade(solidOf(it), -0.2)} />;
        })}
      {t === 'joggers' && [-1, 1].map((s) => <line key={s} x1={100 + s * (g.hi + e)} y1="200" x2={legX(g, s, e).outer(legEnd)} y2={legEnd} stroke="#fff" strokeWidth="1.4" opacity="0.8" />)}
      {t === 'cargo' &&
        [-1, 1].map((s) => {
          const l = legX(g, s, e);
          const x = l.outer(236) - s * 1;
          return <rect key={s} x={s > 0 ? x - 10 : x} y="230" width="10" height="12" rx="1.5" fill={shade(solidOf(it), -0.1)} />;
        })}
      {t === 'chinos' &&
        [-1, 1].map((s) => {
          const l = legX(g, s, e);
          return <rect key={s} x={Math.min(l.outer(legEnd - 4), l.inner(legEnd - 4))} y={legEnd - 4} width={Math.abs(l.outer(legEnd - 4) - l.inner(legEnd - 4))} height="4" fill={shade(solidOf(it), 0.2)} />;
        })}
    </g>
  );
}

function Shoe({ it, f, skin }: { it: Item; f: string; skin: string }) {
  const line = lineOf(it);
  const sole = it.template === 'boots' || it.template === 'oxfords' || it.template === 'loafers' ? shade(solidOf(it), -0.45) : '#f3f4f6';
  switch (it.template) {
    case 'hightops':
      return (
        <g stroke={line} strokeWidth="1.1" strokeLinejoin="round">
          <path d="M-7,-18 L6,-18 L6,-5 Q13,-3 14,2 Q15,7 12,8 L-6,8 Q-9,6 -8,-5 Z" fill={f} />
          <rect x="-8.5" y="4.5" width="23" height="4" rx="2" fill={sole} />
          <path d="M-1,-14 L4,-14 M-1,-10 L4,-10 M-1,-6 L5,-6" stroke="#fff" />
          <circle cx="-4" cy="-8" r="2.2" fill="#fff" stroke="none" opacity="0.8" />
        </g>
      );
    case 'boots':
      return (
        <g stroke={line} strokeWidth="1.1" strokeLinejoin="round">
          <path d="M-7,-24 L7,-24 L7,-6 Q14,-4 15,2 Q16,8 12,9 L-7,9 Q-9,6 -8,-6 Z" fill={f} />
          <rect x="-8.5" y="5" width="24" height="4.5" rx="1.5" fill={sole} />
          <path d="M-7,-24 L7,-24" strokeWidth="2.5" stroke={shade(solidOf(it), -0.3)} />
        </g>
      );
    case 'rainboots':
      return (
        <g stroke={line} strokeWidth="1.1" strokeLinejoin="round">
          <path d="M-8,-26 L8,-26 L8,-5 Q14,-3 15,2 Q16,8 12,9 L-7,9 Q-10,6 -8,-6 Z" fill={f} />
          <rect x="-8.5" y="5.5" width="24" height="4" rx="1.5" fill={shade(solidOf(it), -0.3)} />
          <path d="M-5,-22 L-5,-8" stroke="#fff" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
        </g>
      );
    case 'loafers':
      return (
        <g stroke={line} strokeWidth="1.1" strokeLinejoin="round">
          <path d="M-8,-2 Q-9,7 -6,8 L12,8 Q15,7 13,2 Q10,-3 2,-3 Z" fill={f} />
          <rect x="-8" y="6" width="22" height="2.5" rx="1" fill={sole} />
          <path d="M3,-1 Q6,1 9,0" fill="none" stroke={shade(solidOf(it), 0.4)} />
        </g>
      );
    case 'oxfords':
      return (
        <g stroke={line} strokeWidth="1.1" strokeLinejoin="round">
          <path d="M-8,-4 Q-9,7 -6,8 L12,8 Q15,7 14,2 Q11,-3 2,-4 Z" fill={f} />
          <rect x="-8" y="6" width="23" height="2.5" rx="1" fill={sole} />
          <path d="M1,-3 L6,0 M1,0 L6,-3" stroke={shade(solidOf(it), 0.4)} />
        </g>
      );
    case 'sandals':
      return (
        <g strokeLinejoin="round">
          <path d="M-7,-3 Q-8,7 -5,7 L11,7 Q14,6 12,1 Q9,-3 1,-4 Z" fill={skin} stroke={shade(skin, -0.25)} />
          <rect x="-8" y="6" width="22" height="3" rx="1.5" fill={f} stroke={line} />
          <path d="M-6,-1 L10,3 M-3,-3 L-3,7" stroke={solidOf(it)} strokeWidth="2.4" />
        </g>
      );
    case 'heels':
      return (
        <g stroke={line} strokeWidth="1.1" strokeLinejoin="round">
          <path d="M-6,-3 Q-6,0 -2,0 Q6,1 12,6 L13,8 L-4,8 Z" fill={skin} stroke={shade(skin, -0.25)} />
          <path d="M-6,-1 L-6,8 L-3.5,8 L-3,3 Q6,4 13,9 L15,7 Q9,1 1,-1 Z" fill={f} />
        </g>
      );
    case 'flats':
      return (
        <g stroke={line} strokeWidth="1.1" strokeLinejoin="round">
          <path d="M-7,-2 Q-6,0 -2,0 Q6,0 11,3 L12,7 L-6,7 Z" fill={skin} stroke={shade(skin, -0.25)} />
          <path d="M-7,1 Q-8,8 -5,8 L11,8 Q14,7 12,3 Q10,2 4,2 Q-2,3 -7,1 Z" fill={f} />
          <circle cx="8" cy="3.5" r="1.6" fill={it.accent} stroke="none" />
        </g>
      );
    default:
      return (
        <g stroke={line} strokeWidth="1.1" strokeLinejoin="round">
          <path d="M-8,-5 Q-9,6 -6,8 L12,8 Q15,7 14,2 Q12,-3 4,-5 Z" fill={f} />
          <rect x="-8.5" y="4.5" width="23" height="4" rx="2" fill={sole} />
          <path d="M1,-3 L6,-1 M0,0 L6,1" stroke="#fff" />
          <path d="M-6,1 Q2,3 10,2" fill="none" stroke={it.accent} strokeWidth="1.4" />
        </g>
      );
  }
}

function Shoes({ g, it, f, skin }: { g: Geo; it: Item; f: string; skin: string }) {
  return (
    <>
      {[-1, 1].map((s) => (
        <g key={s} transform={`translate(${100 + s * g.hi * 0.55} ${ANKLE}) scale(${s} 1)`}>
          <Shoe it={it} f={f} skin={skin} />
        </g>
      ))}
    </>
  );
}

function Outer({ g, it, f, id }: { g: Geo; it: Item; f: string; id: string }) {
  const line = lineOf(it);
  const t = it.template;
  const open = t === 'jacket' || t === 'blazer' || t === 'coat' || t === 'cardigan' || t === 'leather';
  const bottom = t === 'coat' || t === 'raincoat' ? 252 : t === 'vest' ? 206 : 212;
  const e = t === 'puffer' ? 5 : 3;
  const body = t === 'coat' || t === 'raincoat' ? `${torso(g, e, 212)} M ${100 - g.hi - e} 210 L ${100 - g.hi - e - 6} ${bottom} L ${100 + g.hi + e + 6} ${bottom} L ${100 + g.hi + e} 210 Z` : torso(g, e, bottom);
  const gap = t === 'cardigan' ? 7 : t === 'blazer' ? 5 : 6;
  const sleeves = t !== 'vest';
  const darker = shade(solidOf(it), -0.2);
  return (
    <g stroke={line} strokeWidth="1.2" strokeLinejoin="round">
      {t === 'hoodie' || t === 'raincoat' ? <path d="M 80 124 Q 78 106 100 104 Q 122 106 120 124 Q 100 132 80 124 Z" fill={f} /> : null}
      {sleeves && (
        <>
          <path d={armPath(g, -1, e - 0.5, 128, 200)} fill={f} />
          <path d={armPath(g, 1, e - 0.5, 128, 200)} fill={f} />
        </>
      )}
      {open ? (
        <>
          <defs>
            <clipPath id={`${id}-l`}>
              <rect x="0" y="0" width={100 - gap} height="320" />
            </clipPath>
            <clipPath id={`${id}-r`}>
              <rect x={100 + gap} y="0" width="100" height="320" />
            </clipPath>
          </defs>
          <path d={body} fill={f} clipPath={`url(#${id}-l)`} />
          <path d={body} fill={f} clipPath={`url(#${id}-r)`} />
          {(t === 'blazer' || t === 'coat') && <path d={`M ${100 - gap} 150 L 88 122 L 93 120 Z M ${100 + gap} 150 L 112 122 L 107 120 Z`} fill={darker} />}
          {t === 'leather' && <path d="M 89 120 L 80 132 L 94 138 Z M 111 120 L 120 132 L 106 138 Z" fill={darker} />}
          {(t === 'blazer' || t === 'cardigan' || t === 'coat') &&
            [160, 180, 200].map((y) => <circle key={y} cx={100 - gap - 3} cy={y} r="1.4" fill={darker} />)}
        </>
      ) : (
        <path d={body} fill={f} />
      )}
      {t === 'hoodie' && (
        <>
          <path d={`M ${100 - 14} 176 L ${100 + 14} 176 L ${100 + 18} 196 L ${100 - 18} 196 Z`} fill={darker} />
          <path d="M 95 124 L 94 146 M 105 124 L 106 146" stroke="#fff" />
        </>
      )}
      {t === 'puffer' && [146, 162, 178, 194].map((y) => <line key={y} x1={100 - halfAt(g, y) - e} y1={y} x2={100 + halfAt(g, y) + e} y2={y} />)}
      {(t === 'puffer' || t === 'raincoat' || t === 'vest') && <line x1="100" y1="122" x2="100" y2={bottom} />}
      {t === 'raincoat' && [150, 172, 194, 216].map((y) => <circle key={y} cx="104" cy={y} r="1.5" fill={darker} />)}
      {t === 'vest' && <path d="M 89 120 L 100 150 L 111 120" fill="none" />}
    </g>
  );
}

function Neck({ it, f }: { it: Item; f: string }) {
  const line = lineOf(it);
  const c = solidOf(it);
  switch (it.template) {
    case 'scarf':
      return (
        <g stroke={line} strokeWidth="1.1" strokeLinejoin="round">
          <path d="M 84 116 Q 100 128 116 116 L 118 126 Q 100 138 82 126 Z" fill={f} />
          <path d="M 104 128 L 112 128 L 114 166 L 104 164 Z" fill={f} />
          <path d="M 105 166 L 105 170 M 108 166 L 108 170 M 111 166 L 112 170" />
        </g>
      );
    case 'tie':
      return (
        <g stroke={line} strokeWidth="1" strokeLinejoin="round">
          <path d="M 96 120 L 104 120 L 102 127 L 98 127 Z" fill={f} />
          <path d="M 98 127 L 102 127 L 106 170 L 100 177 L 94 170 Z" fill={f} />
        </g>
      );
    case 'bowtie':
      return (
        <g stroke={line} strokeWidth="1">
          <path d="M 100 123 L 88 116 L 88 130 Z M 100 123 L 112 116 L 112 130 Z" fill={f} />
          <circle cx="100" cy="123" r="2.6" fill={shade(c, -0.2)} />
        </g>
      );
    case 'bandana':
      return <path d="M 86 118 Q 100 126 114 118 L 100 140 Z" fill={f} stroke={line} strokeWidth="1" />;
    case 'chain':
      return <path d="M 88 121 Q 100 150 112 121" fill="none" stroke={c} strokeWidth="2.6" strokeDasharray="3 1.5" />;
    case 'medal':
      return (
        <g>
          <path d="M 90 120 L 98 150 L 102 150 L 110 120" fill="none" stroke={c === '#d4a017' ? '#dc2626' : c} strokeWidth="3" />
          <circle cx="100" cy={154} r="7" fill="#d4a017" stroke="#92400e" strokeWidth="1" />
          <path d="M100 150 L101.2 153 L104 153.2 L101.8 155 L102.6 158 L100 156.3 L97.4 158 L98.2 155 L96 153.2 L98.8 153 Z" fill="#fde68a" />
        </g>
      );
    case 'necklace':
      return (
        <g>
          <path d="M 89 121 Q 100 142 111 121" fill="none" stroke="#d4a017" strokeWidth="1" />
          <path d="M 100 137 L 104 141 L 100 147 L 96 141 Z" fill={c} stroke={line} strokeWidth="0.8" />
        </g>
      );
    case 'pearls':
      return (
        <g fill="#fdfcf5" stroke="#d6d3c4" strokeWidth="0.6">
          {Array.from({ length: 11 }, (_, i) => {
            const a = Math.PI * (0.1 + (0.8 * i) / 10);
            return <circle key={i} cx={100 - Math.cos(a) * 12} cy={121 + Math.sin(a) * 14} r="1.8" />;
          })}
        </g>
      );
    default:
      return null;
  }
}

function Background({ it, f }: { it: Item; f: string }) {
  const c = solidOf(it);
  const special = isSpecial(it.color) || it.color === '#d4a017' || it.color === '#c0c7d0';
  const sky = special ? f : shade(c, 0.55);
  const ground = shade(c, -0.1);
  const t = it.template;
  return (
    <g>
      <rect width="200" height="320" fill={t === 'night' || t === 'space' ? '#0f172a' : sky} />
      {t === 'sky' && (
        <>
          <circle cx="160" cy="40" r="16" fill="#fde047" />
          <ellipse cx="45" cy="60" rx="22" ry="9" fill="#fff" opacity="0.9" />
          <ellipse cx="150" cy="110" rx="18" ry="7" fill="#fff" opacity="0.8" />
        </>
      )}
      {t === 'sunset' && (
        <>
          <rect y="160" width="200" height="160" fill={shade(c, 0.2)} opacity="0.7" />
          <circle cx="100" cy="230" r="40" fill="#fb923c" opacity="0.9" />
        </>
      )}
      {t === 'city' && (
        <g fill={shade(c, -0.35)}>
          <rect x="20" y="40" width="4" height="200" />
          <circle cx="22" cy="80" r="9" />
          <rect x="21" y="20" width="2" height="22" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect key={i} x={i * 30 + 2} y={180 - ((i * 37) % 60)} width="26" height="200" />
          ))}
        </g>
      )}
      {t === 'gate' && (
        <g fill={shade(c, -0.3)}>
          <rect x="20" y="150" width="160" height="16" />
          <rect x="30" y="130" width="140" height="22" />
          {[26, 56, 86, 110, 140, 168].map((x) => (
            <rect key={x} x={x} y="166" width="8" height="120" />
          ))}
          <rect x="88" y="112" width="24" height="18" />
        </g>
      )}
      {t === 'mountains' && (
        <>
          <path d="M -10 240 L 50 120 L 110 240 Z" fill={shade(c, -0.25)} />
          <path d="M 60 240 L 140 90 L 220 240 Z" fill={shade(c, -0.15)} />
          <path d="M 128 112 L 140 90 L 152 112 L 146 108 L 140 114 L 134 108 Z" fill="#fff" />
          <path d="M 42 136 L 50 120 L 58 136 Z" fill="#fff" />
        </>
      )}
      {t === 'sea' && (
        <>
          <rect y="200" width="200" height="120" fill={shade(c, -0.15)} />
          <path d="M 0 210 Q 20 204 40 210 T 80 210 T 120 210 T 160 210 T 200 210" stroke="#fff" fill="none" opacity="0.7" />
          <circle cx="40" cy="60" r="14" fill="#fde047" />
        </>
      )}
      {t === 'forest' &&
        [10, 45, 80, 120, 155, 185].map((x, i) => (
          <path key={x} d={`M ${x} ${150 + (i % 2) * 20} L ${x - 18} ${240} L ${x + 18} 240 Z`} fill={shade(c, -0.3 + (i % 3) * 0.1)} />
        ))}
      {(t === 'night' || t === 'space') && (
        <>
          {Array.from({ length: 30 }, (_, i) => (
            <circle key={i} cx={(i * 53) % 200} cy={(i * 97) % 300} r={i % 4 === 0 ? 1.4 : 0.8} fill="#fff" opacity="0.85" />
          ))}
          {t === 'night' ? <circle cx="150" cy="50" r="15" fill="#fef9c3" /> : <circle cx="40" cy="70" r="22" fill={c} />}
          {t === 'space' && <ellipse cx="40" cy="70" rx="34" ry="6" fill="none" stroke="#fde68a" strokeWidth="2" />}
        </>
      )}
      {t === 'castle' && (
        <g fill={shade(c, -0.3)}>
          <rect x="40" y="130" width="120" height="120" />
          <rect x="30" y="90" width="22" height="160" />
          <rect x="148" y="90" width="22" height="160" />
          <path d="M 28 90 L 41 62 L 54 90 Z M 146 90 L 159 62 L 172 90 Z M 84 130 L 100 96 L 116 130 Z" />
        </g>
      )}
      {t === 'library' &&
        [30, 90, 150, 210].map((y) => (
          <g key={y}>
            <rect y={y + 40} width="200" height="5" fill={shade(c, -0.4)} />
            {Array.from({ length: 16 }, (_, i) => (
              <rect key={i} x={i * 12.5 + 1} y={y + 12 + ((i * 7) % 8)} width="10" height={28 - ((i * 7) % 8)} fill={['#dc2626', '#2563eb', '#16a34a', '#d97706', '#7c3aed'][i % 5]} opacity="0.85" />
            ))}
          </g>
        ))}
      {t === 'stage' && (
        <>
          <path d="M 100 0 L 40 320 L 160 320 Z" fill="#fff" opacity="0.18" />
          <rect x="0" y="0" width="30" height="320" fill={shade(c, -0.3)} />
          <rect x="170" y="0" width="30" height="320" fill={shade(c, -0.3)} />
        </>
      )}
      {t !== 'night' && t !== 'space' && t !== 'library' && t !== 'stage' && <rect y="240" width="200" height="80" fill={t === 'sea' ? '#fde68a' : ground} />}
      {(t === 'night' || t === 'space') && <rect y="240" width="200" height="80" fill="#1e293b" />}
    </g>
  );
}

// ---------------------------------------------------------------- head

function HairBack({ style, color }: { style: string; color: string }) {
  const line = shade(color, -0.3);
  const p = { fill: color, stroke: line, strokeWidth: 1.2, strokeLinejoin: 'round' as const };
  switch (style) {
    case 'long':
    case 'bangs':
      return <path {...p} d="M 64 70 C 60 38 86 30 100 30 C 114 30 140 38 136 70 L 142 154 C 128 160 112 156 100 152 C 88 156 72 160 58 154 Z" />;
    case 'wavy':
      return <path {...p} d="M 64 70 C 58 38 86 30 100 30 C 114 30 142 38 136 70 C 146 90 134 104 144 120 C 152 136 138 150 142 162 C 128 166 114 158 100 156 C 86 158 72 166 58 162 C 62 150 48 136 56 120 C 66 104 54 90 64 70 Z" />;
    case 'bob':
      return <path {...p} d="M 64 72 C 60 38 86 30 100 30 C 114 30 140 38 136 72 L 139 108 Q 131 114 121 109 L 79 109 Q 69 114 61 108 Z" />;
    case 'afro':
      return <circle {...p} cx="100" cy="64" r="47" />;
    case 'ponytail':
      return <path {...p} d="M 126 52 C 152 50 158 96 146 132 C 140 114 136 92 124 74 Z" />;
    case 'bun':
      return <circle {...p} cx="100" cy="34" r="13" />;
    case 'pigtails':
      return (
        <>
          <path {...p} d="M 70 66 C 46 72 46 116 56 132 C 60 112 66 96 76 84 Z" />
          <path {...p} d="M 130 66 C 154 72 154 116 144 132 C 140 112 134 96 124 84 Z" />
        </>
      );
    case 'braid':
      return (
        <>
          <path {...p} d="M 64 70 C 60 38 86 30 100 30 C 114 30 140 38 136 70 L 136 100 L 64 100 Z" />
          {[106, 118, 130, 142, 154].map((y) => (
            <ellipse key={y} {...p} cx="134" cy={y} rx="7" ry="7" />
          ))}
        </>
      );
    default:
      return null;
  }
}

function HairFront({ style, color }: { style: string; color: string }) {
  const line = shade(color, -0.3);
  const p = { fill: color, stroke: line, strokeWidth: 1.2, strokeLinejoin: 'round' as const };
  const cap = 'M 67 78 C 63 44 84 32 100 32 C 116 32 137 44 133 78 C 129 64 122 56 112 54 C 100 58 84 56 74 62 C 70 66 68 72 67 78 Z';
  switch (style) {
    case 'short':
      return <path {...p} d={cap} />;
    case 'buzz':
      return <path {...p} opacity="0.9" d="M 68 72 C 66 44 86 35 100 35 C 114 35 134 44 132 72 C 126 58 114 52 100 52 C 86 52 74 58 68 72 Z" />;
    case 'side':
      return <path {...p} d="M 66 80 C 62 44 86 30 104 32 C 124 32 138 48 134 76 C 128 60 116 56 108 50 C 96 62 78 62 66 80 Z" />;
    case 'quiff':
      return (
        <>
          <path {...p} d={cap} />
          <path {...p} d="M 82 46 C 84 24 112 18 124 32 C 116 30 110 36 108 46 C 100 42 90 42 82 46 Z" />
        </>
      );
    case 'curly':
    case 'afro':
      return (
        <g {...p}>
          {Array.from({ length: 11 }, (_, i) => {
            const a = Math.PI * (1.05 + (0.9 * i) / 10);
            const r = style === 'afro' ? 36 : 33;
            return <circle key={i} cx={100 + Math.cos(a) * r} cy={70 + Math.sin(a) * (r + 2)} r={style === 'afro' ? 10 : 8.5} />;
          })}
        </g>
      );
    case 'mohawk':
      return (
        <>
          <path fill={color} opacity="0.35" d="M 68 72 C 66 44 86 35 100 35 C 114 35 134 44 132 72 C 126 58 114 52 100 52 C 86 52 74 58 68 72 Z" />
          <path {...p} d="M 92 56 C 90 30 96 12 100 10 C 104 12 110 30 108 56 Z" />
        </>
      );
    case 'bangs':
      return <path {...p} d="M 67 80 C 62 42 86 31 100 31 C 114 31 138 42 133 80 L 131 64 C 120 59 80 59 69 64 Z" />;
    case 'bald':
      return null;
    case 'bun':
    case 'ponytail':
      return <path {...p} d="M 67 76 C 63 42 86 31 100 31 C 114 31 137 42 133 76 C 128 60 118 52 100 50 C 82 52 72 60 67 76 Z" />;
    default:
      // long, wavy, bob, pigtails, braid: curtain fringe with a middle parting
      return <path {...p} d="M 66 84 C 62 44 84 31 100 33 C 116 31 138 44 134 84 C 132 66 124 52 104 48 L 100 40 L 96 48 C 76 52 68 66 66 84 Z" />;
  }
}

function Eyes({ look }: { look: Look }) {
  const ink = '#2b2220';
  const out: ReactNode[] = [];
  for (const x of [87, 113]) {
    const s = x < 100 ? -1 : 1;
    switch (look.eyes) {
      case 'dot':
        out.push(<ellipse key={x} cx={x} cy="79" rx="3" ry="3.6" fill={ink} />);
        break;
      case 'happy':
        out.push(<path key={x} d={`M ${x - 5} 80 Q ${x} 73 ${x + 5} 80`} fill="none" stroke={ink} strokeWidth="2.2" strokeLinecap="round" />);
        break;
      case 'almond':
        out.push(
          <g key={x}>
            <path d={`M ${x - 6} 79 Q ${x} 72 ${x + 6} 79 Q ${x} 84 ${x - 6} 79 Z`} fill="#fff" stroke={ink} strokeWidth="1" />
            <circle cx={x} cy="78.6" r="2.8" fill={look.eyeColor} />
            <circle cx={x} cy="78.6" r="1.3" fill={ink} />
            <circle cx={x + 0.9} cy="77.6" r="0.7" fill="#fff" />
          </g>,
        );
        break;
      default:
        out.push(
          <g key={x}>
            <ellipse cx={x} cy="79" rx="5" ry="5.6" fill="#fff" stroke={ink} strokeWidth="1" />
            <circle cx={x} cy="79.5" r="3.4" fill={look.eyeColor} />
            <circle cx={x} cy="79.5" r="1.7" fill={ink} />
            <circle cx={x + 1.2} cy="78" r="1" fill="#fff" />
            {look.eyes === 'sleepy' && <path d={`M ${x - 5.6} 78 Q ${x} 72 ${x + 5.6} 78 L ${x + 5.6} 76 Q ${x} 70 ${x - 5.6} 76 Z`} fill={look.skin} stroke={ink} strokeWidth="1" />}
            {look.eyes === 'lashes' && <path d={`M ${x + s * 4} 75 L ${x + s * 7.5} 72.5 M ${x + s * 2} 74 L ${x + s * 4.5} 70.8`} stroke={ink} strokeWidth="1.3" strokeLinecap="round" />}
          </g>,
        );
    }
  }
  return <>{out}</>;
}

function Brows({ look }: { look: Look }) {
  const c = look.hairColor === '#e9e9e9' || look.hairColor === '#efd894' ? shade(look.hairColor, -0.35) : shade(look.hairColor, -0.15);
  const w = look.brows === 'thick' ? 3.2 : look.brows === 'thin' ? 1.2 : 2;
  return (
    <g stroke={c} strokeWidth={w} strokeLinecap="round" fill="none">
      {[87, 113].map((x) => {
        const s = x < 100 ? -1 : 1;
        if (look.brows === 'straight' || look.brows === 'thick') return <path key={x} d={`M ${x - 5} 70 L ${x + 5} ${70 - s * 0.6}`} />;
        if (look.brows === 'angled') return <path key={x} d={`M ${x - s * 5} 70.5 L ${x + s * 1} 67.5 L ${x + s * 5.5} 69`} />;
        return <path key={x} d={`M ${x - 5.5} 70.5 Q ${x} 66 ${x + 5.5} 70.5`} />;
      })}
    </g>
  );
}

function Mouth({ look }: { look: Look }) {
  const lip = look.lips === 'natural' ? shade(look.skin, -0.35) : look.lips;
  const ink = '#7f1d1d';
  switch (look.mouth) {
    case 'grin':
      return <path d="M 89 95 Q 100 106 111 95 Z" fill="#fff" stroke={ink} strokeWidth="1.3" strokeLinejoin="round" />;
    case 'laugh':
      return (
        <g>
          <path d="M 90 94 Q 100 108 110 94 Z" fill="#7f1d1d" stroke={ink} strokeWidth="1.2" />
          <path d="M 95 101 Q 100 98 105 101 Q 100 105 95 101 Z" fill="#f87171" />
        </g>
      );
    case 'small':
      return <path d="M 96 97 Q 100 99.5 104 97" fill="none" stroke={ink} strokeWidth="1.6" strokeLinecap="round" />;
    case 'neutral':
      return <path d="M 94 97.5 L 106 97.5" stroke={ink} strokeWidth="1.6" strokeLinecap="round" />;
    case 'smirk':
      return <path d="M 93 98 Q 100 99 107 94.5" fill="none" stroke={ink} strokeWidth="1.6" strokeLinecap="round" />;
    case 'full':
      return (
        <g stroke={shade(lip, -0.25)} strokeWidth="0.8">
          <path d="M 92 96 Q 96 93 100 95 Q 104 93 108 96 Q 100 97.5 92 96 Z" fill={lip} />
          <path d="M 92 96 Q 100 104 108 96 Q 100 97.5 92 96 Z" fill={shade(lip, 0.1)} />
        </g>
      );
    default:
      return look.lips !== 'natural' ? (
        <path d="M 92 95.5 Q 100 102.5 108 95.5 Q 100 98 92 95.5 Z" fill={lip} stroke={shade(lip, -0.25)} strokeWidth="1" />
      ) : (
        <path d="M 92 95.5 Q 100 102 108 95.5" fill="none" stroke={ink} strokeWidth="1.7" strokeLinecap="round" />
      );
  }
}

function Nose({ look }: { look: Look }) {
  const c = shade(look.skin, -0.3);
  switch (look.nose) {
    case 'line':
      return <path d="M 101 80 L 103 89 L 99 90" fill="none" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />;
    case 'round':
      return <ellipse cx="100" cy="88" rx="3.6" ry="2.8" fill={shade(look.skin, -0.1)} stroke={c} strokeWidth="0.8" />;
    case 'dots':
      return (
        <g fill={c}>
          <circle cx="98" cy="89" r="0.9" />
          <circle cx="102" cy="89" r="0.9" />
        </g>
      );
    default:
      return <path d="M 97 88 Q 100 91 103 88" fill="none" stroke={c} strokeWidth="1.4" strokeLinecap="round" />;
  }
}

function Beard({ look }: { look: Look }) {
  const c = look.hairColor;
  const line = shade(c, -0.3);
  switch (look.beard) {
    case 'stubble':
      return <path d="M 72 88 C 74 106 88 110 100 110 C 112 110 126 106 128 88 C 124 98 114 102 100 102 C 86 102 76 98 72 88 Z" fill={c} opacity="0.28" />;
    case 'mustache':
      return <path d="M 89 93 Q 95 88 100 91 Q 105 88 111 93 Q 105 95 100 93.5 Q 95 95 89 93 Z" fill={c} stroke={line} strokeWidth="0.8" />;
    case 'goatee':
      return (
        <g fill={c} stroke={line} strokeWidth="0.8">
          <path d="M 90 93 Q 95 89 100 91.5 Q 105 89 110 93 Q 105 94.5 100 93.5 Q 95 94.5 90 93 Z" />
          <path d="M 94 102 Q 100 104 106 102 L 104 110 Q 100 113 96 110 Z" />
        </g>
      );
    case 'full':
      return (
        <path
          d="M 68 80 C 68 112 86 122 100 122 C 114 122 132 112 132 80 C 128 94 120 98 112 96 Q 106 92 100 94 Q 94 92 88 96 C 80 98 72 94 68 80 Z M 93 99 Q 100 104 107 99 Q 100 101 93 99 Z"
          fill={c}
          fillRule="evenodd"
          stroke={line}
          strokeWidth="1"
        />
      );
    case 'chin':
      return <path d="M 74 94 C 78 112 90 118 100 118 C 110 118 122 112 126 94 C 120 104 112 108 100 108 C 88 108 80 104 74 94 Z" fill={c} stroke={line} strokeWidth="1" />;
    default:
      return null;
  }
}

function Head({ look }: { look: Look }) {
  const line = shade(look.skin, -0.25);
  return (
    <g>
      <ellipse cx="68" cy="80" rx="5.5" ry="7.5" fill={look.skin} stroke={line} />
      <ellipse cx="132" cy="80" rx="5.5" ry="7.5" fill={look.skin} stroke={line} />
      <ellipse cx="100" cy="74" rx="32" ry="35" fill={look.skin} stroke={line} />
      {look.blush && (
        <g fill="#f87171" opacity="0.28">
          <ellipse cx="81" cy="90" rx="6" ry="3.5" />
          <ellipse cx="119" cy="90" rx="6" ry="3.5" />
        </g>
      )}
      {look.freckles && (
        <g fill={shade(look.skin, -0.4)} opacity="0.7">
          {[
            [82, 86],
            [86, 88],
            [79, 89],
            [118, 86],
            [114, 88],
            [121, 89],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="0.9" />
          ))}
        </g>
      )}
      <Eyes look={look} />
      <Brows look={look} />
      <Nose look={look} />
      <Beard look={look} />
      <Mouth look={look} />
    </g>
  );
}

function Accessory({ it, f }: { it: Item; f: string }) {
  const c = solidOf(it);
  const frame = { fill: 'none', stroke: c, strokeWidth: 2 };
  switch (it.template) {
    case 'square':
      return (
        <g>
          <rect x="78" y="72" width="18" height="14" rx="2" {...frame} fill="#fff" fillOpacity="0.15" />
          <rect x="104" y="72" width="18" height="14" rx="2" {...frame} fill="#fff" fillOpacity="0.15" />
          <path d="M 96 78 L 104 78 M 78 76 L 68 74 M 122 76 L 132 74" stroke={c} strokeWidth="2" />
        </g>
      );
    case 'sunglasses':
    case 'aviators':
      return (
        <g>
          {[87, 113].map((x) => (
            <path key={x} d={it.template === 'aviators' ? `M ${x - 9} 74 L ${x + 9} 74 Q ${x + 9} 88 ${x} 88 Q ${x - 9} 88 ${x - 9} 74 Z` : `M ${x - 10} 73 L ${x + 10} 73 L ${x + 8} 85 Q ${x} 88 ${x - 8} 85 Z`} fill={it.template === 'aviators' ? shade(c, -0.1) : '#111827'} fillOpacity="0.85" stroke={it.template === 'aviators' ? '#9ca3af' : c} strokeWidth="1.6" />
          ))}
          <path d="M 96 76 L 104 76 M 77 75 L 68 73 M 123 75 L 132 73" stroke={it.template === 'aviators' ? '#9ca3af' : c} strokeWidth="2" />
        </g>
      );
    case 'cateye':
      return (
        <g>
          {[87, 113].map((x) => {
            const s = x < 100 ? -1 : 1;
            return <path key={x} d={`M ${x - 9} 76 Q ${x} 70 ${x + 9} 76 L ${x + s * 11} 71 L ${x + 8} 84 Q ${x} 87 ${x - 8} 84 Z`} fill="#fff" fillOpacity="0.15" stroke={c} strokeWidth="2" strokeLinejoin="round" />;
          })}
          <path d="M 96 77 L 104 77" stroke={c} strokeWidth="2" />
        </g>
      );
    case 'hoops':
      return (
        <g {...frame} strokeWidth="1.6">
          <circle cx="67" cy="92" r="5" />
          <circle cx="133" cy="92" r="5" />
        </g>
      );
    case 'studs':
      return (
        <g fill={c} stroke={shade(c, -0.3)} strokeWidth="0.6">
          <circle cx="67" cy="87" r="2" />
          <circle cx="133" cy="87" r="2" />
        </g>
      );
    case 'headphones':
      return (
        <g>
          <path d="M 64 80 C 60 20 140 20 136 80" fill="none" stroke={shade(c, -0.2)} strokeWidth="5" />
          <rect x="58" y="70" width="12" height="20" rx="5" fill={f} stroke={shade(c, -0.3)} />
          <rect x="130" y="70" width="12" height="20" rx="5" fill={f} stroke={shade(c, -0.3)} />
        </g>
      );
    case 'monocle':
      return (
        <g>
          <circle cx="113" cy="79" r="9" fill="#fff" fillOpacity="0.15" stroke="#d4a017" strokeWidth="2" />
          <path d="M 121 84 Q 130 110 124 130" fill="none" stroke="#d4a017" strokeWidth="1" />
        </g>
      );
    default:
      return (
        <g>
          <circle cx="87" cy="79" r="9" {...frame} fill="#fff" fillOpacity="0.15" />
          <circle cx="113" cy="79" r="9" {...frame} fill="#fff" fillOpacity="0.15" />
          <path d="M 96 78 Q 100 75 104 78 M 78 77 L 68 74 M 122 77 L 132 74" stroke={c} strokeWidth="2" fill="none" />
        </g>
      );
  }
}

function Hat({ it, f, look }: { it: Item; f: string; look: Look }) {
  const c = solidOf(it);
  const line = lineOf(it);
  const p = { stroke: line, strokeWidth: 1.2, strokeLinejoin: 'round' as const };
  const big = look.hair === 'afro' ? 10 : 0;
  switch (it.template) {
    case 'beanie':
      return (
        <g {...p}>
          <path d={`M ${64 - big} 64 C ${62 - big} 18 ${138 + big} 18 ${136 + big} 64 Z`} fill={f} />
          <rect x={62 - big} y="56" width={76 + 2 * big} height="12" rx="5" fill={shade(c, -0.15)} />
          <circle cx="100" cy={22 - big} r="7" fill={it.accent} />
        </g>
      );
    case 'bucket':
      return (
        <g {...p}>
          <path d={`M ${70 - big} 58 C ${70 - big} 26 ${130 + big} 26 ${130 + big} 58 Z`} fill={f} />
          <path d={`M ${54 - big} 64 Q 100 50 ${146 + big} 64 L ${138 + big} 72 Q 100 62 ${62 - big} 72 Z`} fill={shade(c, -0.1)} />
        </g>
      );
    case 'fedora':
      return (
        <g {...p}>
          <path d="M 72 54 L 76 24 Q 88 18 100 24 Q 112 18 124 24 L 128 54 Z" fill={f} />
          <rect x="72" y="44" width="56" height="8" fill={shade(c, -0.4)} />
          <ellipse cx="100" cy="56" rx={48 + big} ry="7" fill={shade(c, -0.1)} />
        </g>
      );
    case 'beret':
      return (
        <g {...p}>
          <ellipse cx="94" cy="42" rx={40 + big} ry="14" fill={f} transform="rotate(-8 94 42)" />
          <path d="M 100 28 L 102 22" strokeWidth="3" stroke={c} />
        </g>
      );
    case 'cowboy':
      return (
        <g {...p}>
          <path d="M 74 52 L 78 22 Q 90 30 100 22 Q 110 30 122 22 L 126 52 Z" fill={f} />
          <path d={`M ${46 - big} 46 Q 60 64 100 60 Q 140 64 ${154 + big} 46 Q 150 60 100 66 Q 50 60 ${46 - big} 46 Z`} fill={shade(c, -0.1)} />
        </g>
      );
    case 'tophat':
      return (
        <g {...p}>
          <rect x="78" y="2" width="44" height="50" rx="3" fill={f} />
          <rect x="78" y="38" width="44" height="8" fill={it.accent} />
          <ellipse cx="100" cy="54" rx={34 + big} ry="6" fill={shade(c, -0.1)} />
        </g>
      );
    case 'wizard':
      return (
        <g {...p}>
          <path d="M 70 56 L 104 -6 L 130 56 Z" fill={f} />
          <ellipse cx="100" cy="56" rx={40 + big} ry="7" fill={shade(c, -0.1)} />
          <path d="M104 18 L105.5 22 L109.5 22.2 L106.4 24.6 L107.5 28.5 L104 26.2 L100.5 28.5 L101.6 24.6 L98.5 22.2 L102.5 22 Z" fill="#fde047" stroke="none" />
        </g>
      );
    case 'headband':
      return <path d={`M ${67 - big} 62 C ${68 - big} 34 ${132 + big} 34 ${133 + big} 62`} fill="none" stroke={c} strokeWidth="5" strokeLinecap="round" />;
    case 'flowers':
      return (
        <g>
          {Array.from({ length: 9 }, (_, i) => {
            const a = Math.PI * (1.08 + (0.84 * i) / 8);
            const x = 100 + Math.cos(a) * (35 + big);
            const y = 66 + Math.sin(a) * (30 + big);
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="5" fill={i % 2 ? c : it.accent} stroke={line} strokeWidth="0.8" />
                <circle cx={x} cy={y} r="1.6" fill="#facc15" />
              </g>
            );
          })}
        </g>
      );
    case 'bow':
      return (
        <g {...p} transform="translate(124 42) rotate(20)">
          <path d="M 0 0 L -14 -9 L -14 9 Z M 0 0 L 14 -9 L 14 9 Z" fill={f} />
          <circle r="3.5" fill={shade(c, -0.2)} />
        </g>
      );
    case 'crown':
      return (
        <g {...p}>
          <path d="M 74 52 L 72 24 L 86 38 L 100 18 L 114 38 L 128 24 L 126 52 Z" fill={f} stroke={line} />
          {[86, 100, 114].map((x) => (
            <circle key={x} cx={x} cy="46" r="2.6" fill={['#dc2626', '#2563eb', '#16a34a'][(x / 14) % 3 | 0]} />
          ))}
        </g>
      );
    default:
      return (
        <g {...p}>
          <path d={`M ${66 - big} 64 C ${66 - big} 26 ${134 + big} 26 ${134 + big} 64 Z`} fill={f} />
          <path d={`M ${62 - big} 62 Q 100 82 ${138 + big} 62 Q 100 70 ${62 - big} 62 Z`} fill={shade(c, -0.15)} />
          <circle cx="100" cy={33} r="2.5" fill={shade(c, -0.2)} />
        </g>
      );
  }
}

// ---------------------------------------------------------------- public component

/** Which part of the canvas to show, e.g. for wardrobe thumbnails */
export const SLOT_VIEW: Record<Slot | 'full' | 'face', string> = {
  full: '0 0 200 320',
  face: '50 20 100 100',
  top: '45 100 110 130',
  bottom: '45 180 110 120',
  shoes: '50 250 100 55',
  hat: '35 -8 130 100',
  outer: '35 95 130 170',
  acc: '55 40 90 70',
  neck: '60 100 80 80',
  bg: '0 0 200 320',
};

export function Avatar({
  look,
  equipped,
  view = 'full',
  size,
  className = '',
  title,
}: {
  look: Look;
  equipped: Partial<Record<Slot, string | null>>;
  view?: keyof typeof SLOT_VIEW;
  size?: number;
  className?: string;
  title?: string;
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const g = GEO[look.gender][look.build];
  const it = (s: Slot) => getItem(equipped[s] ?? undefined);
  const items = { top: it('top'), bottom: it('bottom'), shoes: it('shoes'), hat: it('hat'), outer: it('outer'), acc: it('acc'), neck: it('neck'), bg: it('bg') };
  const pid = (s: string) => `${uid}-${s}`;
  const f = (s: Slot) => (items[s] ? fillOf(items[s]!, pid(s)) : '');
  const [vx, vy, vw, vh] = SLOT_VIEW[view].split(' ').map(Number);
  return (
    <svg
      className={`avatar-svg ${className}`}
      viewBox={SLOT_VIEW[view]}
      width={size}
      height={size ? (size * vh) / vw : undefined}
      role="img"
      aria-label={title ?? 'Аватар'}
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: 'hidden' }}
    >
      <defs>
        {Object.entries(items).map(([s, item]) => (item ? <PatternDefs key={s} id={pid(s)} item={item} /> : null))}
        <clipPath id={pid('view')}>
          <rect x={vx} y={vy} width={vw} height={vh} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${pid('view')})`}>
        {items.bg && <Background it={items.bg} f={f('bg')} />}
        <HairBack style={look.hair} color={look.hairColor} />
        <Body g={g} skin={look.skin} />
        {items.bottom && items.top?.template !== 'dress' && <Bottom g={g} it={items.bottom} f={f('bottom')} />}
        {items.shoes && <Shoes g={g} it={items.shoes} f={f('shoes')} skin={look.skin} />}
        {items.top && <Top g={g} it={items.top} f={f('top')} skin={look.skin} />}
        {items.outer && <Outer g={g} it={items.outer} f={f('outer')} id={pid('outer-clip')} />}
        <Hands g={g} skin={look.skin} />
        {items.neck && <Neck it={items.neck} f={f('neck')} />}
        <Head look={look} />
        <HairFront style={look.hair} color={look.hairColor} />
        {items.acc && <Accessory it={items.acc} f={f('acc')} />}
        {items.hat && <Hat it={items.hat} f={f('hat')} look={look} />}
      </g>
    </svg>
  );
}
