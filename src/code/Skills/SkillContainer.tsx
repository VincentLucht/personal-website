interface SkillContainerProps {
  name: string;
  children: React.ReactNode;
  className?: string;
  childrenClassName?: string;
}

export default function SkillContainer({
  name,
  children,
  className,
  childrenClassName,
}: SkillContainerProps) {
  return (
    <div
      className={`skill-container flex flex-col gap-6 rounded-3xl bg-neutral-800 p-8 ${className}`}
    >
      {name && <h3 className="text-3xl">{name}</h3>}

      <div className={`flex flex-wrap items-center gap-3 ${childrenClassName}`}>
        {children}
      </div>
    </div>
  );
}
