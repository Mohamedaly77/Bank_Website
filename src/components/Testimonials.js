import React from 'react';
import styles, { layout } from '../Style';
import { feedback } from '../constants';
import FeedBack from './Feedback';

function Testimonials() {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div />

      <div className=" flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          What people are <br className=" sm:block hidden" /> saying about us
        </h1>
        <div className=" w-full md:mt-0 mt-6">
          <p>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
