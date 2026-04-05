import { Link } from 'react-router-dom'

const toolImages = ['canva.jpg', 'cpct.jpg', 'figma.jpg', 'github.jpg', 'vscode.jpg', 'ws.jpg']

function Skills() {
  return (
    <div className="page-body">
      <Link to="/" className="back-link">← Back</Link>

      <div className="page-title">Skills</div>

      <div className="field">
        <label className="field-label">Soft Skills</label>
        <p>Communication</p>
        <p>Teamwork & Collaboration</p>
        <p>Adaptability</p>
      </div>

      <div className="field">
        <label className="field-label">Tools & Technologies</label>
        <div className="scroll-wrapper">
          <div className="scroll-track">
            {toolImages.map((img, i) => (
              <img key={i} src={`/${img}`} alt={img} />
            ))}
            {toolImages.map((img, i) => (
              <img key={`dup-${i}`} src={`/${img}`} alt={img} />
            ))}
          </div>
        </div>
      </div>

      <div className="field">
        <label className="field-label">Technical Skills</label>
        <p><b>Programming Languages:</b></p>
        <p>HTML, CSS, JavaScript, Python, Java, PHP</p>
        <br />
        <p><b>Databases:</b></p>
        <p>MongoDB, MySQL</p>
      </div>
    </div>
  )
}

export default Skills
