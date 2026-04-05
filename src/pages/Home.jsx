import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="hero">
        <img src="/my.png" alt="Kenth Golez" className="avatar" />
        <h1>Kenth Golez</h1>
        <p>Bachelor of Science in Information Technology</p>
      </div>

      <div className="toc">

        <div className="section-label">— Introduction</div>

        <Link to="/cover" className="toc-item d-violet">
          <span className="num">01</span>
          <div className="item-text">
            <div className="item-title">Cover Page</div>
            <div className="item-sub">Name · Photo · Course · School · Year</div>
          </div>
          <span className="badge b-violet">Intro</span>
        </Link>

        <Link to="/personal" className="toc-item d-violet">
          <span className="num">02</span>
          <div className="item-text">
            <div className="item-title">Personal Profile</div>
            <div className="item-sub">About me · Career goals · Contact info</div>
          </div>
          <span className="badge b-violet">Intro</span>
        </Link>

        <div className="divider"></div>
        <div className="section-label">— Background</div>

        <Link to="/education" className="toc-item d-indigo">
          <span className="num">03</span>
          <div className="item-text">
            <div className="item-title">Educational Background</div>
            <div className="item-sub">School history · Program · Coursework</div>
          </div>
          <span className="badge b-indigo">Academic</span>
        </Link>

        <Link to="/skills" className="toc-item d-indigo">
          <span className="num">04</span>
          <div className="item-text">
            <div className="item-title">Skills</div>
            <div className="item-sub">Technical · Soft skills · Tools & technologies</div>
          </div>
          <span className="badge b-indigo">Academic</span>
        </Link>

        <div className="divider"></div>
        <div className="section-label">— Experience</div>

        <Link to="/projects" className="toc-item d-blue">
          <span className="num">05</span>
          <div className="item-text">
            <div className="item-title">Projects</div>
            <div className="item-sub">Descriptions · Screenshots · GitHub links</div>
          </div>
          <span className="badge b-blue">Work</span>
        </Link>

        <div className="divider"></div>
        <div className="section-label">— Others</div>

        <Link to="/extra" className="toc-item d-pink">
          <span className="num">08</span>
          <div className="item-text">
            <div className="item-title">Extracurricular Activities</div>
            <div className="item-sub">Organizations · Volunteer work · Leadership</div>
          </div>
          <span className="badge b-pink">Extra</span>
        </Link>

        <div className="footer">portfolio · 2026</div>

      </div>
    </div>
  )
}

export default Home
