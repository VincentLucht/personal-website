import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '@/css/App.css';

export default function Intro() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['front-end', 'back-end', 'full-stack'],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      backDelay: 1500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="mb-[120px] mt-[100px] df">
      <h1 className="flex flex-col text-6xl">
        <div>
          Hi! <span className="wave">👋</span> I&apos;m Vincent,
        </div>

        <div className="flex">
          a <div ref={typedRef} className="ml-3 text-blue-500" id="typed"></div>
        </div>

        <div>web developer.</div>
      </h1>
    </div>
  );
}
