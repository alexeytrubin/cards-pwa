import React from 'react';
import Deck from 'components/deck/Deck.component';
import Footer from 'components/footer/Footer.component';
import styles from './Landing.module.scss';

const {
  wrapper,
  landing,
  landingText,
  landingNavigationWrapper
} = styles;

export default function Landing(): JSX.Element {
  return (
    <div className={ wrapper }>
      <div className={ landing }>
        <div className={ landingText }>
          <h2>Swap cards to learn</h2>
        </div>
        <div className={ landingNavigationWrapper }>
          <Deck />
        </div>
        <Footer />
      </div>
    </div>
  );
}
