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
          {/*I need to use images from web, because I don't know how to use webp images in JavaScript file format. */}
          {/*I read something that on JavaScript you cannot use simple <img src=""> like in the HTML. */}
          {/*This looks too complicated for me and I think this isn't necesarry to learn JavaScript only for this. */}
          <img
            src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Alternative text"
          />
          <div className="info-card__text-content">
            <div className="info-card__h3">Web-based</div>
            <p className="info-card__description">
              GrantNavigator is an affordable, web-based, grant-focused project
              management solution structured to support the full grant life
              cycle, with configuration options to map the system to the unique
              policies, procedures, documentation needs and process flows of
              each grant recipient.
            </p>
          </div>
        </article>
        <article className="info-card">
          {/*I need to use images from web, because I don't know how to use webp images in JavaScript file format. */}
          {/*I read something that on JavaScript you cannot use simple <img src=""> like in the HTML. */}
          {/*This looks too complicated for me and I think this isn't necesarry to learn JavaScript only for this. */}
          <img
            src="https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Alternative text"
          />
          <div className="info-card__text-content">
            <div className="info-card__h3">Affordable</div>
            <p className="info-card__description">
              We have positioned GrantNavigator to be the most cost-effective
              solution on the market. Many of our clients are taking advantage
              of our pricing strategy and paying for the system using grant
              dollars and avoiding any impact to their general fund.
            </p>
          </div>
        </article>
        <article className="info-card">
          {/*I need to use images from web, because I don't know how to use webp images in JavaScript file format. */}
          {/*I read something that on JavaScript you cannot use simple <img src=""> like in the HTML. */}
          {/*This looks too complicated for me and I think this isn't necesarry to learn JavaScript only for this. */}
          <img
            src="https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg"
            alt="Alternative text"
          />
          <div className="info-card__text-content">
            <div className="info-card__h3">Grant-focused</div>
            <p className="info-card__description">
              Grant funds can typically represent up to 20% of an organization's
              annual budget - and significantly more for many recipients. In an
              increasingly competitive market with severe penalties for any lack
              of compliance, lacking institutional controls can be a extremely
              costly gamble.
            </p>
          </div>
        </article>
        <article className="info-card">
          {/*I need to use images from web, because I don't know how to use webp images in JavaScript file format. */}
          {/*I read something that on JavaScript you cannot use simple <img src=""> like in the HTML. */}
          {/*This looks too complicated for me and I think this isn't necesarry to learn JavaScript only for this. */}
          <img
            src="https://images.pexels.com/photos/2873547/pexels-photo-2873547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Alternative text"
          />
          <div className="info-card__text-content">
            <div className="info-card__h3">Right for you</div>
            <p className="info-card__description">
              GrantNavigator was built for grant recipients — state & local
              governments, non-profits, school districts, community colleges &
              universities — seeking a cost-effective solution to operational
              and compliance challenges.
            </p>
          </div>
        </article>
      </section>
    </section>
  );
};
