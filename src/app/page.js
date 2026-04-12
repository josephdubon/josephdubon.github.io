import { profile } from '@/data/profile'

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">{profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-blurb">{profile.intro}</p>

          <div className="hero-actions">
            {profile.links.map((link) => (
              <a
                key={link.label}
                className={link.primary ? 'button button-primary' : 'button'}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <aside className="hero-panel">
          <p className="panel-label">Now</p>
          <ul className="status-list">
            {profile.now.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="content-grid">
        <div className="content-card">
          <SectionHeading
            eyebrow="About"
            title="A practical home for your work and contact details."
            text="Edit one file whenever you want to update what you do, what you are building, or where people should find you."
          />
          <div className="bio-list">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="content-card">
          <SectionHeading
            eyebrow="Focus"
            title="Current priorities"
            text="Use this section for whatever should be visible first: freelance work, a product, job search, or personal projects."
          />
          <ul className="bullet-list">
            {profile.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-card">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          text="These cards are driven by data, so adding a new project only means appending an object in `src/data/profile.js`."
        />
        <div className="project-grid">
          {profile.projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-meta">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              {project.href ? (
                <a
                  className="project-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
