import { assignments, grading, meetings } from "./course-data";
import NavLinks from "./nav-links";

const resources = (items?: { label: string; url: string }[]) =>
  items?.length ? (
    <div className="resource-links">
      {items.map((item) => (
        <a key={item.url} href={item.url}>
          {item.label}
        </a>
      ))}
    </div>
  ) : (
    <span className="placeholder">—</span>
  );

export default function Home() {
  return (
    <main>
      <header className="site-header" id="top">
        <div className="header-inner">
          <a className="course-mark" href="#top" aria-label="BME 603/606 home">
            <img src="/course-logo.png" alt="" />
            <span>BME 603/606</span>
          </a>
          <NavLinks />
        </div>
      </header>
      <div className="page-shell">
        <section className="intro" aria-labelledby="course-title">
          <div>
            <p className="eyebrow">
              University of Wisconsin–Madison · Fall 2026
            </p>
            <h1 id="course-title">
              Computational Methods for
              <br />
              Biological Modeling &amp; Simulation
            </h1>
            <p className="lede">
              A hands-on course in building, simulating, and interpreting
              computational models of biological systems.
            </p>
          </div>
          <img
            className="hero-logo"
            src="/course-logo.png"
            alt="Biological modeling and simulation course logo"
          />
        </section>

        <section className="course-facts" aria-label="Course information">
          <div>
            <span>When</span>
            <strong>Monday &amp; Wednesday</strong>
            <small>2:30–3:45 PM</small>
          </div>
          <div>
            <span>Where</span>
            <strong>MECH ENGR 1152</strong>
            <small>Sep 2–Dec 9, 2026</small>
          </div>
          <div>
            <span>Instructor</span>
            <strong>Prof. Dhananjay Bhaskar</strong>
            <a href="mailto:dhananjay.bhaskar@wisc.edu">
              dhananjay.bhaskar@wisc.edu
            </a>
          </div>
          <div>
            <span>Teaching assistant</span>
            <strong>Colin Mikulski</strong>
            <a href="mailto:cmikulski@wisc.edu">cmikulski@wisc.edu</a>
          </div>
        </section>

        <section id="about" className="content-section about-section">
          <div className="about-body">
            <h2>About the course</h2>
            <div className="prose">
              <p>
                This course introduces computational approaches for modeling
                biological systems across molecular, cellular, and population
                scales. We will use scientific programming, numerical analysis,
                stochastic simulation, and spatial modeling to connect biological
                mechanisms with system-level behavior.
              </p>
              <p>
                The emphasis is practical: constructing biophysically grounded
                models, testing assumptions, analyzing simulation output, and
                communicating results through readable code and effective
                visualizations.
              </p>
            </div>
          </div>
          <aside className="about-links">
            <p className="about-links-label">Important links</p>
            <a
              className="about-link"
              href="https://github.com/bio-modeling-uw-madison-f26/"
              target="_blank"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              className="about-link"
              href="https://canvas.wisc.edu/"
              target="_blank"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
              </svg>
              Canvas
            </a>
          </aside>
        </section>

        <section id="schedule" className="content-section">
          <div className="section-heading">
            <div>
              <h2>Lecture schedule</h2>
              <p>
                Topics and materials will be added as the semester progresses.
              </p>
            </div>
            <a
              className="calendar-link"
              href="https://secfac.wisc.edu/academic-calendar/#2026-2027"
              target="_blank"
              rel="noreferrer"
            >
              Academic calendar ↗
            </a>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Topic</th>
                  <th>Notes &amp; resources</th>
                  <th>Exercises &amp; activities</th>
                </tr>
              </thead>
              <tbody>
                {meetings.map((m) => (
                  <tr key={m.date} className={m.noClass ? "no-class" : ""}>
                    <th scope="row">{m.date}</th>
                    <td>
                      {m.topic || (
                        <span className="placeholder">To be announced</span>
                      )}
                    </td>
                    <td>{m.noClass ? "—" : resources(m.notes)}</td>
                    <td>{m.noClass ? "—" : resources(m.activities)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="schedule-note">Thanksgiving recess is Nov 26–29.</p>
        </section>

        <section id="assignments" className="content-section">
          <div className="section-heading">
            <div>
              <h2>Assignments</h2>
              <p>
                Assignment materials and links will appear here as they are
                released.
              </p>
            </div>
          </div>
          <div className="assignment-list">
            {assignments.map((assignment) => (
              <article key={assignment.title}>
                <div>
                  <p className="release-date">
                    Release date · {assignment.releaseDate}
                  </p>
                  <h3>
                    {assignment.url ? (
                      <a href={assignment.url}>{assignment.title}</a>
                    ) : (
                      assignment.title
                    )}
                  </h3>
                  <p>{assignment.description}</p>
                </div>
                <span className="status">Coming soon</span>
              </article>
            ))}
          </div>
        </section>

        <section id="grading" className="content-section two-column">
          <div>
            <h2>Grading</h2>
            <p className="muted">
              The planned course grade is composed of the following items.
              Details are subject to refinement.
            </p>
          </div>
          <dl className="grade-list">
            {grading.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
            <div className="total">
              <dt>Total</dt>
              <dd>100%</dd>
            </div>
          </dl>
        </section>

        <section id="policies" className="content-section">
          <h2>Course policies</h2>
          <div className="policy-list">
            <article>
              <h3>Submitting work</h3>
              <p>
                Submit assignments through Gradescope as PDF files by the posted
                deadlines.
              </p>
            </article>
            <article>
              <h3>Collaboration</h3>
              <p>
                Discussion and collaboration on ideas are encouraged. Submitted
                code and reports must be your own work.
              </p>
            </article>
            <article>
              <h3>Generative AI</h3>
              <p>
                Generative AI tools may be used for debugging or clarification
                only and must be cited.
              </p>
            </article>
            <article>
              <h3>Academic integrity</h3>
              <p>
                Students are expected to uphold UW–Madison standards of academic
                integrity.
              </p>
            </article>
            <article>
              <h3>Late work</h3>
              <p>
                Life happens. Contact the instructional team as early as
                possible when circumstances affect your work.
              </p>
            </article>
            <article>
              <h3>Accessibility &amp; well-being</h3>
              <p>
                Contact the McBurney Disability Resource Center early for
                accommodations. UHS provides confidential mental health support.
              </p>
            </article>
          </div>
        </section>
      </div>
      <footer>
        <div className="footer-inner">
          <span>BME 603/606 · Fall 2026</span>
          <span>© 2026 Dhananjay Bhaskar</span>
          <span>
            Last modified August 31, 2026 · <a href="/changelog">Changelog</a>
          </span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
