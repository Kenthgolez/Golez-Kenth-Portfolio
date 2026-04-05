import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className="page-body">
      <Link to="/" className="back-link">← Back</Link>

      <div className="page-title">Projects</div>

      <div className="field">
        <label className="field-label">School Projects</label>
        <p>- Todo App</p>
        <p>- Library Management System</p>
        <p>- Student Grade Calculator</p>
        <p>- School Website</p>
        <p>- Inventory System</p>
        <p>- Portfolio Website</p>
      </div>

      <div className="field">
        <label className="field-label">Personal Projects</label>
        <p>- Portfolio Website</p>
        <p>- Calculator</p>
        <p>- Login / Register System</p>
        <p>- Video Editing</p>
      </div>
    </div>
  )
}

export default Projects
