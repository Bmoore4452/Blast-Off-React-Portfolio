export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-head">About Me</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-person-circle"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          fill-rule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </svg>
      <p className="about-text">
        Back-end developer with a background in music production and public
        speaking offering unique perspectives on how end-users interact with
        websites and software platforms. Earned a certificate in Full Stack Web
        Development from the Georgia Institute of Technology Boot Camp.
        Innovative problem-solver who is passionate about developing apps with a
        focus on mobile-first design and development. Strengths in creativity,
        teamwork, and building projects from ideation to execution.
      </p>
    </div>
  );
}
