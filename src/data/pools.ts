import type { Raw } from '../types';
import { P1 } from './pools1';
import { P2 } from './pools2';
import { P3 } from './pools3';
import { P4 } from './pools4';
export const POOLS: Record<string, Raw[]> = { ...P1, ...P2, ...P3, ...P4 };
