import { useState } from 'react';
import useGetScreenSize from '@/code/hooks/useGetScreenSize';
import Icon from '@/code/Skills/Icon';

export default function Contact() {
  const { isTablet } = useGetScreenSize();
  const [tooltipText, setTooltipText] = useState('📋 Copy to clipboard');
  const [showTooltip, setShowTooltip] = useState(false);
  const hoverClass = 'transition-transform hover:scale-110 active:scale-[98%]';

  const email = 'vincentlucht04@gmail.com';

  const handleEmailClick = () => {
    void navigator.clipboard.writeText(email);
    setTooltipText('✅ Copied!');
    setTimeout(() => {
      setTooltipText('📋 Copy to clipboard');
    }, 2000);
  };

  const getTooltipClasses = (position: string) => {
    const baseClasses =
      'pointer-events-none absolute z-10 whitespace-nowrap rounded bg-slate-950 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100';
    switch (position) {
      case 'bottom':
        return `${baseClasses} top-full left-1/2 mt-2 -translate-x-1/2 transform`;
      case 'right':
        return `${baseClasses} left-full top-1/2 ml-2 -translate-y-1/2 transform`;
      default:
        return `${baseClasses} top-full left-1/2 mt-2 -translate-x-1/2 transform`;
    }
  };

  const getTriangleClasses = (position: string) => {
    const baseClasses = 'absolute h-2 w-2 rotate-45 bg-slate-950';
    switch (position) {
      case 'bottom':
        return `${baseClasses} -top-1 left-1/2 -translate-x-1/2 transform`;
      case 'right':
        return `${baseClasses} -left-1 top-1/2 -translate-y-1/2 transform`;
      default:
        return `${baseClasses} -top-1 left-1/2 -translate-x-1/2 transform`;
    }
  };

  return (
    <div className="mt-40" id="contact">
      <h2 className="header">Contact Me</h2>
      <div className="text-center">
        <div className="flex-col df">
          <div className="mb-3">Write me an e-mail at:</div>

          <div className="group relative w-fit">
            <h3
              className="relative cursor-pointer text-3xl font-medium transition-colors hover:text-blue-500
                active:text-blue-600"
              onClick={handleEmailClick}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              vincentlucht04@gmail.com
            </h3>

            {showTooltip && (
              <div className={getTooltipClasses(isTablet ? 'right' : 'bottom')}>
                {tooltipText}
                <div
                  className={getTriangleClasses(isTablet ? 'right' : 'bottom')}
                ></div>
              </div>
            )}
          </div>
        </div>

        <div className="my-10 ml-[8px] text-center tracking-[8px]">OR</div>

        <div className="mb-2">See what I&apos;m up to:</div>
      </div>
      <div className="-ml-2 mb-4 df">
        <a target="_blank" href="https://github.com/VincentLucht" rel="noreferrer">
          <Icon
            source="github.svg"
            className={`!shadow-transparent ${hoverClass}`}
            tooltipPosition="left"
          />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/vincent-lucht-b53a892aa/"
          rel="noreferrer"
        >
          <Icon
            source="linked-in.svg"
            className={`!shadow-transparent ${hoverClass}`}
          />
        </a>

        <a target="_blank" href="https://leetcode.com/u/vincentlucht/" rel="noreferrer">
          <Icon
            source="leetcode.png"
            className={`ml-2 h-10 w-10 !rounded-full bg-white/20 !shadow-transparent ${hoverClass}`}
            imgClassName="!h-12 !w-12"
            tooltipPosition="right"
          />
        </a>
      </div>

      <div className="text-gray-secondary mb-4 mt-12 text-center">
        Built with ❤️ by Vincent Lucht © 2025
      </div>
    </div>
  );
}
