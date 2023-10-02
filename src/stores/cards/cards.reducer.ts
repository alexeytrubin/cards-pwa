import { Card, CardActions, NEXT_CARD } from './cards.actions';

type CardState = Card;

const initialState: CardState = {
  index: 5,
  cards: [
    'https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_06_Lovers.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg'
  ]
};

export default (
  state: CardState = initialState,
  action: CardActions
): CardState => {
  switch (action.type) {
  case NEXT_CARD: {
    return {
      ...state,
      index: action.index
    };
  }

  default:
    return state;
  }
};
