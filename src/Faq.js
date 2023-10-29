export const Faq = () => {
  return (
    <section className="faq-section">
      <header className="faq-section__text-content">
        <div className="faq-section__header">
          <div className="faq-section__kicker">Common Questions</div>
          <h2 className="faq-section__h2">Frequently Asked Questions</h2>
          <p className="faq-section__body-base">
            Before you contact us, check the frequently asked questions - it is
            very possible that you will find the answer to your question here.
          </p>
        </div>
        <div className="faq-section__buttons">
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
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 22C19.7614 22 22 19.7614 22 17C22 14.2386 19.7614 12 17 12C14.2386 12 12 14.2386 12 17C12 19.7614 14.2386 22 17 22Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Information
          </button>
        </div>
      </header>
      <section className="faq-section__accordions-wrapper"></section>
    </section>
  );
};
