import { assignments, grading, meetings } from "./course-data";

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
          <nav aria-label="Course sections">
            <a href="#about">About</a>
            <a href="#schedule">Schedule</a>
            <a href="#assignments">Assignments</a>
            <a href="#grading">Grading</a>
            <a href="#policies">Policies</a>
          </nav>
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

        <section id="about" className="content-section">
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
