export const Hero = () => {
  return (
    <section className="hero-section">
      <header className="hero-section__text-content">
        <div className="hero-section__header">
          <div className="hero-section__kicker">check our offer</div>
          <h1 className="hero-section__h1">
            Feeling lost in a <span>wilderness of grant management</span>{" "}
            challenges?
          </h1>
          <p className="hero-section__body-large">
            Working in GrantNavigator just a few minutes, every few months, will
            provide a lot of benefits.
          </p>
          <ul className=" hero-section__list">
            <li>Intuitive dashboards & alerts offering real-time visibility</li>
            <li>
              Configurable reports targeting the needs of every stakeholder
            </li>
            <li>
              Centralized document libraries, data repositories & deadline
              calendars
            </li>
          </ul>
          <div className="hero-section__CTA">
            <button className="button button--primary" type="button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 20H6C4.93913 20 3.92172 19.5786 3.17157 18.8284C2.42143 18.0783 2 17.0609 2 16V7C2 5.93913 2.42143 4.92172 3.17157 4.17157C3.92172 3.42143 4.93913 3 6 3H17C18.0609 3 19.0783 3.42143 19.8284 4.17157C20.5786 4.92172 21 5.93913 21 7V10M8 2V4M15 2V4M2 8H21M18.5 15.643L17 17.143"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 22C19.7614 22 22 19.7614 22 17C22 14.2386 19.7614 12 17 12C14.2386 12 12 14.2386 12 17C12 19.7614 14.2386 22 17 22Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Schedule Demo
            </button>
            <button className="button button--secondary" type="button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 11V8L15 12L10 16V13H1V11H10ZM2.458 15H4.582C5.28005 16.7191 6.55371 18.1422 8.18512 19.0259C9.81652 19.9097 11.7043 20.1991 13.5255 19.8447C15.3468 19.4904 16.9883 18.5142 18.1693 17.0832C19.3503 15.6523 19.9975 13.8554 20 12C20.001 10.1427 19.3558 8.34283 18.1749 6.90922C16.994 5.47561 15.3511 4.49756 13.528 4.14281C11.7048 3.78807 9.81505 4.07874 8.18278 4.96498C6.55051 5.85121 5.27747 7.27778 4.582 9H2.458C3.732 4.943 7.522 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C7.522 22 3.732 19.057 2.458 15Z"
                  fill="white"
                />
              </svg>
              Client Login
            </button>
          </div>
        </div>
      </header>
    </section>
  );
};
