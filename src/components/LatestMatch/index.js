import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetails

  return (
    <>
      <p className="latest-match-heading">Latest Matches</p>
      <div className="latest-match-container">
        <div className="latest-match-team-details">
          <div className="latest-team-left-section">
            <p className="latest-match-heading">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p className="latest-match-venue">{venue}</p>
            <p className="latest-match-result">{result}</p>
          </div>
          <img
            className="latest-match-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="separator" />
        <div className="latest-team-right-section">
          <p className="latest-match-label">First Innings</p>
          <p className="latest-match-value">{firstInnings}</p>
          <p className="latest-match-label">Second Innings</p>
          <p className="latest-match-value">{secondInnings}</p>
          <p className="latest-match-label">Man Of The Match</p>
          <p className="latest-match-value">{manOfTheMatch}</p>
          <p className="latest-match-label">Umpires</p>
          <p className="latest-match-value">{umpires}</p>
        </div>
      </div>
    </>
  )
}

export default LatestMatch
