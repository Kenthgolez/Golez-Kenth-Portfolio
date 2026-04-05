import { Link } from 'react-router-dom'

function Personal() {
  return (
    <div className="page-body">
      <Link to="/" className="back-link">← Back</Link>

      <div className="page-title">Personal Profile</div>

      <div className="field">
        <label className="field-label">Full Name</label>
        <p>Kenth Golez</p>
      </div>

      <div className="field">
        <label className="field-label">About Me</label>
        <p>
          "I am Kenth Golez, a 2nd year Bachelor of Science in Information
          Technology student at Western Institute of Technology. I am still
          learning programming and web development. I love adventure trips
          and doing outdoor activities. My goal is to graduate and find experience
          as soon as possible."
        </p>
      </div>

      <div className="field">
        <label className="field-label">Career Goals</label>
        <p>
          My short-term goal is to land an entry-level web developer position where
          I can apply my skills. In the long run, I aspire to become a cloud architect.
          I am continuously improving my technical skills through personal projects
          and online certifications to prepare myself for the industry.
        </p>
      </div>

      <div className="field">
        <label className="field-label">Contact Information</label>
        <p>Gmail: kenthgolez@gmail.com</p>
        <p>Mobile: 09456973481</p>
        <p>GitHub: github.com/Kenthgolez</p>
      </div>
    </div>
  )
}

export default Personal
