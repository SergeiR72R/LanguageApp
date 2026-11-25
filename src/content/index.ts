import type { Level, PlacementItem, Unit } from './types';

const unitModules = import.meta.glob<{ unit: Unit }>('./{b1,b2,c1}/u*.ts', { eager: true });
const placementModules = import.meta.glob<{ placementItems: PlacementItem[] }>('./placement.ts', { eager: true });

const LEVEL_ORDER: Level[] = ['B1', 'B2', 'C1'];

export const allUnits: Unit[] = Object.values(unitModules)
  .map((m) => m.unit)
  .filter(Boolean)
  .sort((a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level) || a.order - b.order);

export const placementItems: PlacementItem[] = Object.values(placementModules)[0]?.placementItems ?? [];

export const levels = LEVEL_ORDER;

const byId = new Map(allUnits.map((u) => [u.id, u]));

export function getUnit(id: string): Unit | undefined {
  return byId.get(id);
}

export function unitIndex(id: string): number {
  return allUnits.findIndex((u) => u.id === id);
}

export function unitsOfLevel(level: Level): Unit[] {
  return allUnits.filter((u) => u.level === level);
}

export function firstUnitOfLevel(level: Level): Unit | undefined {
  return allUnits.find((u) => u.level === level);
}
