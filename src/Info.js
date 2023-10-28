export const Info = () => {
  return (
    <section className="info-section">
      <div className="info-section__text-content">
        <div className="info-section__header">
          <div className="info-section__kicker">Find out more</div>
          <h2 className="info-section__h2">
            We develop grant management systems <br />
            for grant recipients
          </h2>
        </div>
        <p className="info-section__body-base">
          Simple, innovative and affordable solutions designed to address the
          core causes of the many challenges faced by grant-funded organizations
        </p>
      </div>
      <section className="info-section__article-wrapper">
        <article className="info-card">
          <img scr="/assets/images/web-based.webp" alt="" />
          <div className="info-card__header">Web-based</div>
          <hr />
          <p className="info-card_description">
            GrantNavigator is an affordable, web-based, grant-focused project
            management solution structured to support the full grant life cycle,
            with configuration options to map the system to the unique policies,
            procedures, documentation needs and process flows of each grant
            recipient.
          </p>
        </article>
      </section>
    </section>
  );
};
