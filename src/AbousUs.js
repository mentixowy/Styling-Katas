export const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="about-section__text-content">
        <div className="about-section__header">
          <div className="about-section__kicker">About us</div>
          <h2 className="about-section__h2">
            Who are we and how <br />
            can we help you?
          </h2>
        </div>
        <p className="about-section__body-base">
          American Funding Innovators was founded in April, 2009, but our
          experience with grant software dates back over 15 years to when our
          founders worked on the first online grant search database, and 2006
          when we designed & launched the first online grant management system
          on the market. Since those early days, we’ve moved on to form AFI and
          have worked hand in hand with our clients to continuously improve the
          user experience and functionality of GrantNavigator, ensuring it is
          YOUR SYSTEM designed to meet YOUR NEEDS.
        </p>
      </div>
      <iframe
        className="about-section__iframe"
        src="https://www.youtube.com/embed/xb3fPWDix3E?si=E8zz10Nyh_TFdUwg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
