import { atom } from 'jotai';

export const PageTotal = atom(0);

export const CurrentPage = atom<number | null>(null);
