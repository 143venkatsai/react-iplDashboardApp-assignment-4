import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchCard

  const finalResult = matchStatus === 'Won'

  const matchCardResult = finalResult ? 'match-won' : 'match-loss'

  return (
    <li className="match-list-element">
      <img
        className="match-card-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-heading">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={matchCardResult}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
