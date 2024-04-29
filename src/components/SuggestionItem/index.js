import './index.css'
import {Component} from 'react'

class SuggestionItem extends Component {
  funny = () => {
    const {gill, funk} = this.props
    funk(gill.suggestion)
  }
  render() {
    const {gill} = this.props
    const {suggestion} = gill
    return (
      <li className="overall">
        <p className="para">{suggestion}</p>
        <img
          onClick={this.funny}
          className="image"
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </li>
    )
  }
}
export default SuggestionItem
