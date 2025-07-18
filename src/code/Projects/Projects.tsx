import '@/code/Projects/projects.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useGetScreenSize from '@/code/hooks/useGetScreenSize';
import Icon from '@/code/Skills/Icon';

export default function Projects() {
  const { t } = useTranslation('projects');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const { isDesktop, width } = useGetScreenSize();

  const isMobile = width <= 768;

  const handleMouseEnter = (projectId: string) => {
    if (isMobile) return;
    setHoveredProject(projectId);
  };
  const handleMouseLeave = () => {
    if (isMobile) return;
    setHoveredProject(null);
  };

  const handleMobileClick = (projectId: string) => {
    setHoveredProject((prev) => (prev === projectId ? null : projectId));
  };

  useEffect(() => {
    if (isMobile) {
      setHoveredProject(null);
    }
  }, [isMobile]);

  return (
    <div id="projects">
      <h2 className="mt-48 header">{t('projects')}</h2>
      <p className="-mt-4 mb-10 text-center text-gray-secondary">
        {isMobile ? t('hoverMobile') : t('hover')}
      </p>

      <div className="project-wrapper">
        {/* REDDNIR */}
        <div>
          <div className="project-container">
            <div className={`text-left ${isDesktop ? '!text-right' : ''}`}>
              <h3 className="project-header">Reddnir</h3>

              <div className="project-text">
                {t('reddnirP1')}
                <a
                  target="_blank"
                  href="https://www.theodinproject.com"
                  rel="noreferrer"
                >
                  {' '}
                  The Odin Project
                </a>
                {t('reddnirP2')}

                <div className="link-btn-container">
                  <a
                    target="_blank"
                    href="https://project-odin-book-mocha.vercel.app"
                    rel="noreferrer"
                  >
                    {t('visit1')}
                  </a>

                  <a
                    target="_blank"
                    href="https://github.com/VincentLucht/project-odin-book"
                    rel="noreferrer"
                  >
                    {t('code')}
                  </a>
                </div>
              </div>
            </div>

            <a
              {...(isMobile
                ? {
                    onClick: (e) => {
                      e.preventDefault();
                      handleMobileClick('reddnir');
                    },
                  }
                : {
                    target: '_blank',
                    href: 'https://project-odin-book-mocha.vercel.app',
                  })}
              rel="noreferrer"
              style={isMobile ? { pointerEvents: 'none' } : {}}
            >
              <div
                className={`video-container ${isMobile ? 'cursor-pointer' : ''}`}
                onMouseEnter={() => handleMouseEnter('reddnir')}
                onMouseLeave={handleMouseLeave}
              >
                <video className="showcase-video" autoPlay loop muted playsInline>
                  <source src="reddnir.mp4" type="video/mp4" />
                </video>

                <div
                  className={`project-hover-content ${hoveredProject === 'reddnir' ? 'visible' : ''}`}
                >
                  <h4 className="tech-used">{t('built')}</h4>

                  <div className="flex flex-wrap items-center gap-3">
                    <Icon source="tsx.svg" />
                    <Icon source="typescript.png" />
                    <Icon source="tailwind.svg" />
                    <Icon source="node.svg" />
                    <Icon source="express.svg" />
                    <Icon source="postgres.png" />
                    <Icon source="prisma.png" />
                    <Icon source="sql.svg" />
                    <Icon source="jest.png" />
                    <Icon source="vite.png" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* MESSAGING APP */}
        <div>
          <div className="project-container-reverse">
            <a
              {...(isMobile
                ? {
                    onClick: (e) => {
                      e.preventDefault();
                      handleMobileClick('messaging');
                    },
                  }
                : {
                    target: '_blank',
                    href: 'https://project-messaging-app-fawn.vercel.app/login',
                  })}
              rel="noreferrer"
              style={isMobile ? { pointerEvents: 'none' } : {}}
            >
              <div
                className={`video-container ${isMobile ? 'cursor-pointer' : ''}`}
                onMouseEnter={() => handleMouseEnter('messaging')}
                onMouseLeave={handleMouseLeave}
              >
                <video className="showcase-video" autoPlay loop muted playsInline>
                  <source src="ma-demo.mp4" type="video/mp4" />
                </video>

                <div
                  className={`project-hover-content reverse ${hoveredProject === 'messaging' ? 'visible' : ''}`}
                >
                  <h4 className="tech-used">{t('built')}</h4>

                  <div className="flex flex-wrap items-center gap-3">
                    <Icon source="tsx.svg" />
                    <Icon source="typescript.png" />
                    <Icon source="tailwind.svg" />
                    <Icon source="node.svg" />
                    <Icon source="express.svg" />
                    <Icon source="postgres.png" />
                    <Icon source="prisma.png" />
                    <Icon source="socketIO.png" />
                    <Icon source="jest.png" />
                    <Icon source="vite.png" />
                  </div>
                </div>
              </div>
            </a>

            <div>
              <h3 className="project-header">{t('rtmaHeader')}</h3>

              <div className="project-text">
                {t('rtma')}

                <div
                  className={`link-btn-container ${isDesktop ? '!justify-start' : ''}`}
                >
                  <a
                    target="_blank"
                    href="https://project-messaging-app-fawn.vercel.app/login"
                    rel="noreferrer"
                  >
                    {t('visit2')}
                  </a>

                  <a
                    target="_blank"
                    href="https://github.com/VincentLucht/project-messaging-app"
                    rel="noreferrer"
                  >
                    {t('code')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BATTLESHIP */}
        <div>
          <div className="project-container">
            <div className={`text-center ${isDesktop ? '!text-right' : ''}`}>
              <h3 className="project-header">Battleship</h3>

              <div className="project-text">
                {t('battleship')}

                <div className="link-btn-container">
                  <a
                    target="_blank"
                    href="https://battleship-vl.vercel.app"
                    rel="noreferrer"
                  >
                    {t('visit3')}
                  </a>

                  <a
                    target="_blank"
                    href="https://github.com/VincentLucht/Project-Battleship/tree/main"
                    rel="noreferrer"
                  >
                    {t('code')}
                  </a>
                </div>
              </div>
            </div>

            <a
              {...(isMobile
                ? {
                    onClick: (e) => {
                      e.preventDefault();
                      handleMobileClick('battleship');
                    },
                  }
                : {
                    target: '_blank',
                    href: 'https://battleship-vl.vercel.app',
                  })}
              rel="noreferrer"
              style={isMobile ? { pointerEvents: 'none' } : {}}
            >
              <div
                className={`video-container ${isMobile ? 'cursor-pointer' : ''}`}
                onMouseEnter={() => handleMouseEnter('battleship')}
                onMouseLeave={handleMouseLeave}
              >
                <video className="showcase-video" autoPlay loop muted playsInline>
                  <source src="battleship-demo.mp4" type="video/mp4" />
                </video>

                <div
                  className={`project-hover-content ${hoveredProject === 'battleship' ? 'visible' : ''}`}
                >
                  <h4 className="tech-used">{t('built')}</h4>

                  <div className="flex flex-wrap items-center gap-3">
                    <Icon source="javascript.png" imgClassName="rounded-[4px]" />
                    <Icon source="html.svg" />
                    <Icon source="css.svg" />
                    <Icon source="jest.png" />
                    <Icon source="webpack.png" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
