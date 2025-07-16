import { useTranslation } from 'react-i18next';
import useGetScreenSize from '@/code/hooks/useGetScreenSize';
import SkillContainer from '@/code/Skills/SkillContainer';
import Icon from '@/code/Skills/Icon';
import CIconSpecial from '@/code/Skills/CIconSpecial';

export default function Skills() {
  const { t } = useTranslation('skills');
  const { width, isDesktop } = useGetScreenSize();

  return (
    <>
      <h2 className="header" id="skills">
        Skills
      </h2>

      <div className="flex-col gap-10 df">
        {/* LANGUAGES */}
        <div className="flex gap-4">
          <SkillContainer name={t('languages')} className="w-fit">
            <Icon source="javascript.png" imgClassName="rounded-[4px]" />

            <Icon source="typescript.png" />

            <Icon source="python.svg" />

            <Icon source="html.svg" />

            <Icon source="css.svg" />

            <Icon source="sql.svg" />
          </SkillContainer>

          {width >= 820 && (
            <div className="relative ml-4 pt-20">
              <CIconSpecial />

              <img
                src="question-mark.png"
                alt="question marks"
                className="absolute left-[60px] top-[103px] h-6 w-6 rotate-[30deg] invert"
              />
            </div>
          )}
        </div>

        {/* FRONTEND + BACKEND */}
        <div className={`gap-10 df ${!isDesktop ? 'flex-col' : ''}`}>
          <SkillContainer name="Frontend">
            <Icon source="react.svg" />

            <Icon source="tsx.svg" />

            <Icon source="tailwind.svg" />
          </SkillContainer>

          <SkillContainer name="Backend">
            <Icon source="node.svg" />

            <Icon source="express.svg" />

            <Icon source="postgres.png" />

            <Icon source="prisma.png" />

            <Icon source="jwt.png" />
          </SkillContainer>
        </div>

        {/* TOOLS AND TECHNOLOGIES */}
        <SkillContainer
          name={t('tech&tools')}
          className="w-fit"
          childrenClassName={`${width >= 500 ? 'grid grid-cols-[repeat(6,1fr)]' : 'flex flex-wrap'}`}
        >
          <Icon source="vite.png" />

          <Icon source="npm.svg" />

          <Icon source="git.png" />

          <Icon source="jest.png" />

          <Icon source="vscode.svg" />

          <Icon source="neon.png" />

          <Icon source="github.svg" />

          <Icon source="vercel.png" />

          <Icon source="render.png" />

          <Icon source="webpack.png" />

          <Icon source="socketIO.png" />

          <Icon source="rest-api.png" />
        </SkillContainer>

        {/* REAL LANGUAGES */}
        <SkillContainer
          name=""
          // 419 is breakpoint
          className={` ${width <= 419 ? '!px-4 !py-3' : '!px-6 !py-4'}`}
          childrenClassName="gap-5"
        >
          <div className="flex items-center">
            <span>I speak</span>

            <span className="ml-1 mr-2 font-semibold">English</span>

            <img src="uk.svg" alt="United Kingdom flag" className="h-5" />
          </div>

          <div className="flex items-center">
            <span>Ich spreche</span>

            <span className="ml-1 mr-2 font-semibold">Deutsch</span>

            <img
              src="deutschland.svg"
              alt="Germany flag"
              className="-mx-[10px] -my-10 h-10 w-10"
            />
          </div>
        </SkillContainer>
      </div>
    </>
  );
}
