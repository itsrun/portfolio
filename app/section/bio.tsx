import Contact from "./contact";

export default function Bio() {
  return (
    <section id="bio" aria-labelledby="profile-name">
      <header className="">
        <h1
          id="profile-name"
          className="-mt-3 text-[40px] font-semibold tracking-tighter"
        >
          <span className="underline decoration-dotted decoration-2 underline-offset-4">
            Run
          </span>{" "}
          Huang
        </h1>
        <p className="-mt-2.25 text-lg font-light">&quot;ruen&quot; (/ru:n/)</p>
      </header>
      <img
        src="/profile8.jpeg"
        alt="Run Huang"
        className="mt-5 saturate-0 contrast-90 brightness-136 hover:saturate-100 hover:contrast-100 hover:brightness-100 transition-all duration-500 w-[90%]"
      />
      <div className="mt-5 text-[13px] text-neutral-800 text-pretty tracking-[-0.01rem]">
        I am a Ph.D. candidate in Computer Science at the University of Southern
        California, supported by an Annenberg Fellowship. I am fortunate to be
        advised by{" "}
        <a
          className="underline"
          href="https://aceatusc.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prof. Souti Chattopadhyay
        </a>
        . Previously, I earned my B.S. in Computer Science from Fudan
        University.
      </div>
      <Contact />
      <footer className="text-[10px] mt-7 text-neutral-600">
        © {new Date().getFullYear()} Run Huang
        <br />
        Last updated: {new Date().getMonth() + 1}/{new Date().getDate()}/
        {new Date().getFullYear()}
      </footer>
    </section>
  );
}
