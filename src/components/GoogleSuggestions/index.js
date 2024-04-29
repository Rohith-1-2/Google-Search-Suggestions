import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}
  inputReader = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }
  reactor = (s) => {
    this.setState({
      searchInput:s
    })
  }
  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          className="google"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="overallCard">
          <div className="cardImg">
            <img
              className="icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              onChange={this.inputReader}
              value={searchInput}
              className="inputE"
              type="search"
              placeholder="Search Google"
            />
          </div>
          <ul className="unorder">
            {filteredList.map(item => (
              <SuggestionItem gill={item} funk={this.reactor} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
