import { iconConfig, IconConfigItem } from '@/code/Skills/util/iconConfig';

interface IconProps {
  source: string;
  imgClassName?: string;
  className?: string;
  tooltip?: string;
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
}

export default function Icon({
  source,
  imgClassName,
  className,
  tooltip,
  tooltipPosition = 'bottom',
}: IconProps) {
  const config: IconConfigItem | undefined = iconConfig[source];
  if (!config) {
    return null;
  }

  const finalClassName: string = className ?? config.className;
  const finalTooltip: string = tooltip ?? config.tooltip;
  const { alt } = config;

  const getTooltipClasses = (position: string) => {
    const baseClasses =
      'pointer-events-none absolute z-10 whitespace-nowrap rounded bg-slate-950 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100';

    switch (position) {
      case 'top':
        return `${baseClasses} bottom-full left-1/2 mb-2 -translate-x-1/2 transform`;
      case 'bottom':
        return `${baseClasses} top-full left-1/2 mt-2 -translate-x-1/2 transform`;
      case 'left':
        return `${baseClasses} right-full top-1/2 mr-2 -translate-y-1/2 transform`;
      case 'right':
        return `${baseClasses} left-full top-1/2 ml-2 -translate-y-1/2 transform`;
      default:
        return `${baseClasses} top-full left-1/2 mt-2 -translate-x-1/2 transform`;
    }
  };

  const getTriangleClasses = (position: string) => {
    const baseClasses = 'absolute h-2 w-2 rotate-45 bg-slate-950';

    switch (position) {
      case 'top':
        return `${baseClasses} -bottom-1 left-1/2 -translate-x-1/2 transform`;
      case 'bottom':
        return `${baseClasses} -top-1 left-1/2 -translate-x-1/2 transform`;
      case 'left':
        return `${baseClasses} -right-1 top-1/2 -translate-y-1/2 transform`;
      case 'right':
        return `${baseClasses} -left-1 top-1/2 -translate-y-1/2 transform`;
      default:
        return `${baseClasses} -top-1 left-1/2 -translate-x-1/2 transform`;
    }
  };

  return (
    <div className={`group relative rounded-xl p-2 shadow-md df ${finalClassName}`}>
      <img
        src={source}
        alt={alt}
        className={`h-10 w-10 object-contain ${imgClassName ?? ''}`}
      />
      {finalTooltip && (
        <div className={getTooltipClasses(tooltipPosition)}>
          {finalTooltip}
          <div className={getTriangleClasses(tooltipPosition)}></div>
        </div>
      )}
    </div>
  );
}
