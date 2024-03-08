import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, arrowClicked} = props
  const {suggestion} = eachSuggestion

  const onArrowClicked = () => {
    arrowClicked(suggestion)
  }

  return (
    <li className="suggestion-cont">
      <p className="suggestion">{suggestion}</p>
      <button className="arrow-button" onClick={onArrowClicked} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
