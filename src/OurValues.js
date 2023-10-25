export const OurValues = () => {
  return (
    <section className="values-section">
      <div className="values-section__text-content">
        <div className="values-section__header">
          <div className="values-section__kicker">About GrantNavigator</div>
          <h2 className="values-section__h2">Our design philosophy:</h2>
        </div>
      </div>
      <section className="values-section__cards-wrapper">
        <article className="card">
          <div className="card__counter">01</div>
          <h3 className="card__h3">Simplicity</h3>
          <p className="card__body-small">
            Simplicity is the origin of adoption, and thus success. The more
            intuitive the functionality, and the lower the burden on the end
            user, the more the system will be adopted and the more it will
            contribute to a successful grants operation. Features are built
            based solely on customer feedback, and never to simply check a box.
          </p>
        </article>
        <article className="card">
          <div className="card__counter">02</div>
          <h3 className="card__h3">Centralization</h3>
          <p className="card__body-small">
            One of the core value propositions offered by GrantNavigator is
            centralized access to all grant related data, documents, tasks,
            budget details and performance outcomes tracked in a single, online
            platform shared by all stakeholders.
          </p>
        </article>
        <article className="card">
          <div className="card__counter">03</div>
          <h3 className="card__h3">Flexibility</h3>
          <p className="card__body-small">
            Flexibility is the responsibility of the software designer, not the
            user. You won’t be asked to conform your processes to meet the
            system’s capabilities. GrantNavigator was designed to conform to
            your policies and procedures, not the other way around.
          </p>
        </article>
        <article className="card">
          <div className="card__counter">04</div>
          <h3 className="card__h3">Configurability</h3>
          <p className="card__body-small">
            While many grant management challenges are common, each client
            requires a flexible & configurable approach to addressing those
            challenges that reflects their unique policies, procedures,
            organizational structure and culture.
          </p>
        </article>
      </section>
    </section>
  );
};
