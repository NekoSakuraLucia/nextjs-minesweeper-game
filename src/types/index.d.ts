export type Language = 'en' | 'th' | 'jp' | 'vi' | 'zh';
export type FlagStyle = 'default' | 'triangle' | 'circle' | 'sparkles' | 'sigma';
export type BombStyle = 'default' | 'skull' | 'fire' | 'flame' | 'ghost';
export type NumberStyle = 'default' | 'roman' | 'thai';

export interface GameSettings {
    language: Language;
    flagIcon: FlagStyle;
    bombIcon: BombStyle;
    numberStyle: NumberStyle;
};

export interface GameStats {
    time: number;
    difficulty: Difficulty;
    flagsPlaced: number;
    score: number;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Cell {
    isMine: boolean;
    isRevealed: boolean;
    isFlagged: boolean;
    neighborMines: number;
};

export type TranslationValue = string | { [key: string]: TranslationValue };

export type TranslationsType = {
    [K in Language]: {
        [key: string]: TranslationValue;
    };
};