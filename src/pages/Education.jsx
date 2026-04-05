import { Link } from 'react-router-dom'

function Education() {
  return (
    <div className="page-body">
      <Link to="/" className="back-link">← Back</Link>

      <div className="page-title">Educational Background</div>

      <div className="field">
        <label className="field-label">Current School / University</label>
        <p>Western Institute of Technology</p>
        <p>BS Information Technology</p>
        <p>2026 - Present</p>
      </div>

      <div className="field">
        <label className="field-label">Senior High School</label>
        <p>School Name: Supang National High School</p>
        <p>Strand: EPAS (Electronic Products Assembly and Servicing)</p>
        <p>Year Graduated: 2024</p>
      </div>

      <div className="field">
        <label className="field-label">Junior High School</label>
        <p>School Name: Supang National High School</p>
        <p>Year Graduated: 2022</p>
      </div>

      <div className="field">
        <label className="field-label">Elementary</label>
        <p>School Name: Avila Elementary School</p>
        <p>Year Graduated: 2017</p>
      </div>
    </div>
  )
}

export default Education
