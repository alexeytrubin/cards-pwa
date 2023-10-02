export const NEXT_CARD = 'NEXT_CARD';

export interface Card {
  index: number,
  cards: Array<string>
}

export interface NextCardAction {
  type: typeof NEXT_CARD,
  index: number
}

export type CardActions = NextCardAction;

export const nextCard = (index: number): NextCardAction => ({
  type: NEXT_CARD,
  index
});
