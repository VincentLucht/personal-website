import '@/code/Projects/projects.css';
import { useState } from 'react';
import useGetScreenSize from '@/code/hooks/useGetScreenSize';
import Icon from '@/code/Skills/Icon';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const { isDesktop } = useGetScreenSize();

  const handleMouseEnter = (projectId: string) => setHoveredProject(projectId);
  const handleMouseLeave = () => setHoveredProject(null);

  return (
    <div id="projects">
      <h2 className="header mt-48">Projects</h2>
      <p className="text-gray-secondary -mt-4 mb-10 text-center">Hover for details</p>

      <div className="project-wrapper">
        {/* REDDNIR */}
        <div>
          <div className="project-container">
            <div className={`text-left ${isDesktop ? '!text-right' : ''}`}>
              <h3 className="project-header">Reddnir</h3>

              <div className="project-text">
                Reddnir is a Reddit-like community based social media platform I built
                as my final project for
                <a
                  target="_blank"
                  href="https://www.theodinproject.com"
                  rel="noreferrer"
                >
                  {' '}
                  The Odin Project
                </a>
                . This comprehensive full stack application features communities,
                moderation tools, posts, comments, chats, and much more. A React
                frontend and Node REST API power this project, fully built with
                TypeScript. Advanced features like pagination, virtualization, and a
                fully responsive design ensure scalability and smooth user interactions.
                With over 40k+ lines of code, this demonstrates my skills to architect
                and build complex web applications.
                <div className="link-btn-container">
                  <a
                    target="_blank"
                    href="https://project-odin-book-mocha.vercel.app"
                    rel="noreferrer"
                  >
                    Visit deployed project
                  </a>

                  <a
                    target="_blank"
                    href="https://github.com/VincentLucht/project-odin-book"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            <a target="_blank" href="https://www.theodinproject.com" rel="noreferrer">
              <div
                className="video-container"
                onMouseEnter={() => handleMouseEnter('reddnir')}
                onMouseLeave={handleMouseLeave}
              >
                <video className="showcase-video" autoPlay loop muted playsInline>
                  <source src="reddnir-placeholder.png" type="video/mp4" />
                </video>

                <div
                  className={`project-hover-content ${hoveredProject === 'reddnir' ? 'visible' : ''}`}
                >
                  <h4 className="tech-used">Built with:</h4>

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
              target="_blank"
              href="https://project-messaging-app-fawn.vercel.app/login"
              rel="noreferrer"
            >
              <div
                className="video-container"
                onMouseEnter={() => handleMouseEnter('messaging')}
                onMouseLeave={handleMouseLeave}
              >
                <video className="showcase-video" autoPlay loop muted playsInline>
                  <source src="ma-demo.mp4" type="video/mp4" />
                </video>

                <div
                  className={`project-hover-content reverse ${hoveredProject === 'messaging' ? 'visible' : ''}`}
                >
                  <h4 className="tech-used">Built with:</h4>

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
              <h3 className="project-header">Real time messaging app</h3>

              <div className="project-text">
                A comprehensive real-time messaging application built with Socket.IO
                that delivers instant communication and updates. Features both
                one-on-one and group conversations with seamless real-time updates, chat
                management capabilities, and customizable user profiles. This full stack
                application combines a React frontend with a Node.js REST API and a HTTP
                server to enable real-time interactions across all messaging features!
                <div
                  className={`link-btn-container ${isDesktop ? '!justify-start' : ''}`}
                >
                  <a
                    target="_blank"
                    href="https://project-messaging-app-fawn.vercel.app/login"
                    rel="noreferrer"
                  >
                    View live project
                  </a>

                  <a
                    target="_blank"
                    href="https://github.com/VincentLucht/project-messaging-app"
                    rel="noreferrer"
                  >
                    View Code
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
                One of my first projects! Built with pure JavaScript and manual DOM
                manipulation, featuring local multiplayer and a smart AI opponent. The
                game translates nested array logic into an interactive GUI,
                demonstrating core programming fundamentals without any frameworks like
                React.
                <div className="link-btn-container">
                  <a
                    target="_blank"
                    href="https://project-battleship-vite.vercel.app"
                    rel="noreferrer"
                  >
                    Try it out
                  </a>

                  <a
                    target="_blank"
                    href="https://github.com/VincentLucht/Project-Battleship/tree/main"
                    rel="noreferrer"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            <a
              target="_blank"
              href="https://project-battleship-vite.vercel.app"
              rel="noreferrer"
            >
              <div
                className="video-container"
                onMouseEnter={() => handleMouseEnter('battleship')}
                onMouseLeave={handleMouseLeave}
              >
                <video className="showcase-video" autoPlay loop muted playsInline>
                  <source src="battleship-demo.mp4" type="video/mp4" />
                </video>

                <div
                  className={`project-hover-content ${hoveredProject === 'battleship' ? 'visible' : ''}`}
                >
                  <h4 className="tech-used">Built with:</h4>

                  <div className="flex flex-wrap items-center gap-3">
                    <Icon source="javascript.png" />
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
