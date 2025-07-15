import { useState, useEffect, useRef } from 'react';
import Icon from '@/code/Skills/Icon';
import Typed from 'typed.js';

interface TypedInstance {
  destroy(): void;
}

export default function CIconSpecial() {
  const typedRef = useRef<HTMLDivElement>(null);
  const typedInstance = useRef<TypedInstance | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (isHovered && !typedInstance.current) {
      typedInstance.current = new Typed(typedRef.current!, {
        strings: ['(CS50x only, no pointers...)'],
        typeSpeed: 25,
        backSpeed: 25,
        showCursor: false,
      });
    } else if (!isHovered && typedInstance.current) {
      timeoutRef.current = setTimeout(() => {
        typedInstance.current?.destroy();
        typedInstance.current = null;
        if (typedRef.current) typedRef.current.textContent = '';
        timeoutRef.current = null;
      }, 200);
    }
  }, [isHovered]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      typedInstance.current?.destroy();
    };
  }, []);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex rotate-[7deg] items-center">
        <Icon source="c.png" className="bg-[#1e77d552]" tooltipPosition="top" />

        <div
          ref={typedRef}
          className={`font-caveat absolute top-full mt-1 whitespace-nowrap text-xl transition-opacity
            duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  );
}
