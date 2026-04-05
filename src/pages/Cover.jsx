import { Link } from 'react-router-dom'

const images = ['kenth1.jpg', 'kenth2.jpg', 'kenth3.jpg', 'kenth4.jpg', 'kenth5.jpeg']

function Cover() {
  return (
    <div className="page-body">
      <Link to="/" className="back-link">← Back</Link>

      <div className="page-title">Cover Page</div>

      <div className="field">
        <label className="field-label">Full Name</label>
        <p>Kenth Golez</p>
      </div>

      <div className="field">
        <label className="field-label">Photos</label>
        <div className="scroll-wrapper">
          <div className="scroll-track">
            {images.map((img, i) => (
              <img key={i} src={`/${img}`} alt="Kenth" />
            ))}
            {images.map((img, i) => (
              <img key={`dup-${i}`} src={`/${img}`} alt="Kenth" />
            ))}
          </div>
        </div>
      </div>

      <div className="field">
        <label className="field-label">Course / Program</label>
        <p>Bachelor of Science in Information Technology</p>
      </div>

      <div className="field">
        <label className="field-label">School / University</label>
        <p>Western Institute of Technology</p>
      </div>

      <div className="field">
        <label className="field-label">Year Level</label>
        <p>Second Year</p>
      </div>

      <div className="field">
        <label className="field-label">School Year</label>
        <p>2025 - 2026</p>
      </div>
    </div>
  )
}

export default Cover
