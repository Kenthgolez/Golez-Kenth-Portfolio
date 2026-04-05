import { Link } from 'react-router-dom'

function Extra() {
  return (
    <div className="page-body">
      <Link to="/" className="back-link">← Back</Link>

      <div className="page-title">Extracurricular Activities</div>

      <div className="field">
        <p>Organization  :  Youth for Christ</p>
        <br />
        <p>Role          :  Active Member</p>
        <br />
        <p>Description   :  Active participant in weekly youth fellowships, Bible studies,
          prayer meetings, and church community outreach programs.</p>
      </div>

      <div className="field">
        <p>Organization  :  GBS (Guimaras Biker Squad)</p>
        <br />
        <p>Role          :  Active Member</p>
        <br />
        <p>Description   :  Active member of the GBS, participating
          in biking events and community service activities.</p>
      </div>
    </div>
  )
}

export default Extra
