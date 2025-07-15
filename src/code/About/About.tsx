import '@/code/About/about.css';

export default function About() {
  return (
    <div className="mt-32" id="about">
      <h2 className="header">About Me</h2>

      <div className="about">
        <span>
          I&apos;m a full stack engineer in Berlin, who enjoys programming and creating
          complex web applications that are both feature rich and responsive.
        </span>

        <span className="my-4">
          I didn&apos;t know what to do after school, and I&apos;ve always been curious
          about how coding can create amazing apps out of 0&apos;s and 1&apos;s. After
          searching around for courses, I kept seeing The Odin Project recommended, so I
          gave it a try. What started as curiosity quickly became a passion and since
          then, I&apos;m hooked on programming.
        </span>

        <span>
          When I&apos;m not coding, I&apos;m probably doing one of the big 3&apos;s:
          playing Video Games, playing the Piano, or at the gym. 🎮 🎹 💪
        </span>
      </div>
    </div>
  );
}
