import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StatisticsList from './Statistics.styled.jsx'
import FeedbackOptions from '../FeedbackOptions'

const Statistics = ({
	good = 0,
	neutral = 0,
	bad = 0,
	total = 0,
	positivePercentage = 0,
}) => {
	return (
		<StatisticsList>
			<li key="good">Good: {good}</li>
			<li key="neutral">Neutral: {neutral}</li>
			<li key="bad">Bad: {bad}</li>
			<li key="total">Total: {total}</li>
			<li key="percentage">Positive percentage: {positivePercentage}%</li>
		</StatisticsList>
	)
}

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired
}

export default Statistics
