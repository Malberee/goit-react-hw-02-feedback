import React from 'react'
import PropTypes from 'prop-types'
import {FeedbackList, FeedbackButton} from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<FeedbackList>
			{options.map((option) => {
				return (
					<li key={option}>
						<FeedbackButton feedback={option} onClick={() => onLeaveFeedback(option)}>{option}</FeedbackButton>
					</li>
				)
			})}
		</FeedbackList>
	)
}

FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions
