import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.animation-section',
        start: 'top center',
        end: 'top 20%',
        scrub: true,
      },
    });

    tl.to('#n, #e, #v', { y: 50, duration: 0.5 });
    tl.to('#action', { opacity: 1 }, '<');

    tl.to('#e, #v', { y: 100, duration: 0.5 });
    tl.to('#next', { opacity: 1 }, '<');

    tl.to('#v', { y: 150, duration: 0.5 });
    tl.to('#energy', { opacity: 1 }, '<');

    tl.to('#vision', { opacity: 1, duration: 0.5 });
  }, []);

  return (
    <section className="animation-section min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="relative  flex gap-5 text-4xl">
        <span className="relative text-white" id="a">A<span className="absolute left-10 text-white opacity-0 transition-all" id="action">Action</span></span>
        <span className="relative text-white" id="n">N<span className="absolute left-10 text-white opacity-0 transition-all" id="next">Next</span></span>
        <span className="relative text-white" id="e">E<span className="absolute left-10 text-white opacity-0 transition-all" id="energy">Energy</span></span>
        <span className="relative text-white" id="v">V<span className="absolute left-10 text-white opacity-0 transition-all" id="vision">Vision</span></span>
      </div>
    </section>
  );
};

export default ScrollAnimation;
