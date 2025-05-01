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
        end: 'top 10%',
        scrub: true,
      },
    });

    tl.to('#n, #e, #v', { y: 150, duration: 0.5 });
    tl.to('#action', { opacity: 1 }, '<');

    tl.to('#e, #v', { y: 300, duration: 0.5 });
    tl.to('#next', { opacity: 1 }, '<');

    tl.to('#v', { y: 450, duration: 0.5 });
    tl.to('#energy', { opacity: 1 }, '<');

    tl.to('#vision', { opacity: 1, duration: 0.5 });
  }, []);

  return (
    <section className="animation-section min-h-[700px] hidden md:flex  justify-center overflow-hidden">
      <div className="relative  flex gap-5 ">
        <span className="relative " id="a"><span className='text-white fonk text-[150px]'>A</span><span className="absolute left-[200px] text-[100px] text-white opacity-0 transition-all items-center h-full mt-10" id="action">Artisinal</span></span>
        <span className="relative " id="n"><span className='text-white fonk text-[150px]'>N</span><span className="absolute left-[200px] text-[100px] text-white opacity-0 transition-all items-center h-full mt-10" id="next">NextGen</span></span>
        <span className="relative " id="e"><span className='text-white fonk text-[150px]'>E</span><span className="absolute left-[200px] text-[100px] text-white opacity-0 transition-all items-center h-full mt-10" id="energy">Experimental</span></span>
        <span className="relative " id="v"><span className='text-white fonk text-[150px]'>V</span><span className="absolute left-[200px] text-[100px] text-white opacity-0 transition-all items-center h-full mt-10" id="vision">Viral</span></span>
      </div>
    </section>
  );
};

export default ScrollAnimation;
