import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: {}, isLoading: true}

  componentDidMount() {
    this.teamMatchesApiUrl()
  }

  getFormattedData = data => ({
    id: data.id,
    venue: data.venue,
    date: data.date,
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  teamMatchesApiUrl = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }

    this.setState({teamMatchesData: formattedData, isLoading: false})
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'KKR':
        return 'kkr'
      case 'CSK':
        return 'csk'
      case 'DC':
        return 'dc'
      case 'KXP':
        return 'kxp'
      case 'RCB':
        return 'rcb'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      default:
        return ''
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderMatchCard = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData

    return (
      <ul className="match-card-container">
        {recentMatches.map(eachMatch => (
          <MatchCard matchCard={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatch} = teamMatchesData

    return (
      <div className="responsive-container">
        <img className="banner-image" src={teamBannerUrl} alt="team banner" />
        <LatestMatch matchDetails={latestMatch} key={latestMatch.id} />
        {this.renderMatchCard()}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const className = `teams-matches-container ${this.getRouteClassName()}`

    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
