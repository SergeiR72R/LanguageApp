import { it } from 'vitest';
import { wordBank } from './index';
it('x', () => { console.log('KEPT', ['04','05','06'].map(n => wordBank(`a1-${n}`).length).join(',')); });
