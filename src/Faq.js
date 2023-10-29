import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`accordion ${isActive ? "active" : ""}`}>
      <div className="accordion__header" onClick={toggleAccordion}>
        <p className="accordion__question">{question}</p>
        <div className="accordion__toggle">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http:www.w3.org/2000/svg"
          >
            <path d="M12 8V12M12 12V16M12 12H16M12 12H8" />
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          </svg>
        </div>
      </div>
      {isActive && <p className="accordion__body-small">{answer}</p>}
    </div>
  );
};

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
              xmlns="http:www.w3.org/2000/svg"
            >
              <path
                d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z"
                fill="white"
              />
              <path
                d="M10.875 7.875C10.875 8.17337 10.9935 8.45952 11.2045 8.6705C11.4155 8.88147 11.7016 9 12 9C12.2984 9 12.5845 8.88147 12.7955 8.6705C13.0065 8.45952 13.125 8.17337 13.125 7.875C13.125 7.57663 13.0065 7.29048 12.7955 7.0795C12.5845 6.86853 12.2984 6.75 12 6.75C11.7016 6.75 11.4155 6.86853 11.2045 7.0795C10.9935 7.29048 10.875 7.57663 10.875 7.875ZM12.5625 10.5H11.4375C11.3344 10.5 11.25 10.5844 11.25 10.6875V17.0625C11.25 17.1656 11.3344 17.25 11.4375 17.25H12.5625C12.6656 17.25 12.75 17.1656 12.75 17.0625V10.6875C12.75 10.5844 12.6656 10.5 12.5625 10.5Z"
                fill="white"
              />
            </svg>
            Information
          </button>
        </div>
      </header>
      <section className="faq-section__accordions-wrapper">
        <Accordion
          question="Do we really need a grant management system?"
          answer="In this section, we explore the fundamental reasons for implementing a grant management system. Discover how it can streamline your grant-related processes, improve efficiency, and help your organization maximize its funding opportunities."
        />
        <Accordion
          question="Can we afford a grant management system??"
          answer="Many of our competitors charge based on arbitrary factors such as the dollar value of your grant portfolio, the population of your city, county, or college, or other criteria not tied to actual development or hosting costs. Your price depends upon the version of the software you need, the number of licenses you need, and the number of grants managed in the system. Clients are not locked into one model and may move up and down the pricing scale as their needs change over time."
        />
        <Accordion
          question="What does a typical GrantNavigator client look like?
          "
          answer="Learn about the diverse organizations that benefit from GrantNavigator. From non-profits to research institutions, GrantNavigator serves a wide range of clients. Find out how our system can be tailored to suit the specific needs of your organization."
        />
        <Accordion
          question="What is involved in implementation?"
          answer="This section provides insights into the implementation process of GrantNavigator. We guide you through the steps required for a successful integration, ensuring a smooth transition to our system, so you can quickly leverage its benefits for effective grant management.
          "
        />
        <Accordion
          question="Does GrantNavigator track the data we need?"
          answer="Explore how GrantNavigator's robust features enable you to track and manage the precise data that is vital to your organization. Our system is customizable to meet your unique data tracking requirements, empowering you to make informed decisions with ease."
        />
        {/* Add more accordions as needed */}
      </section>
    </section>
  );
};
