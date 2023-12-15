import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="team-card">
      <Link to={`/team-matches/${id}`} className="team-link">
        <div className="team-container">
          <img className="team-logo" src={teamImageUrl} alt={name} />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
