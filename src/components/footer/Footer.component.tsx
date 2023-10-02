import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'stores';
import styles from './Footer.module.scss';

const {
  footer
} = styles;


const tarotCardExplanations = [
  'Strength represents inner strength, courage, and patience. It suggests that you have the ability to overcome challenges through gentleness and inner control.',
  'The Tower symbolizes sudden, disruptive change and upheaval. It signifies a release of old ways and a need to rebuild on a stronger foundation.',
  'The Chariot represents determination, willpower, and triumph over obstacles. It suggests that you are on a path to victory through focus and perseverance.',
  'The Lovers card signifies love, harmony, and choices. It suggests a significant decision related to love or partnership that will impact your life.',
  'The High Priestess embodies intuition, mystery, and the subconscious. It encourages you to trust your inner wisdom.',
  'The Magician symbolizes power, skill, and transformation. It suggests that you have the tools to manifest your desires.'
];

export default function Footer(): JSX.Element {
  const index = useSelector((state: RootState) => state.cards.index);

  const handleReadText = (): void => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = tarotCardExplanations[index];

    window.speechSynthesis.speak(msg);
  };

  return (
    <footer className={ footer }>
      { tarotCardExplanations[index] }
      <div style={ { marginTop: 10 } }>
        <a style={ { color: 'lightblue', textDecoration: 'underline' } } onClick={ handleReadText }>READ</a>
      </div>
    </footer >
  );
}
