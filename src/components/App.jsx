import React, { Component } from 'react'
import { Title } from './App.styled.jsx'
import Section from './Section'
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import Notification from './Notification'

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	}

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state
		return good + neutral + bad
	}

	countPositiveFeedbackPercentage = () => {
		const { good } = this.state
		return Math.round((good * 100) / this.countTotalFeedback())
	}

	onLeaveFeedback = (feedback) => {
		this.setState({
			[feedback]: this.state[feedback] + 1,
		})
	}

	render() {
		const { good, neutral, bad } = this.state
		const total = this.countTotalFeedback()

		return (
			<>
				<Section title="Please leave feedback">
					<FeedbackOptions
						options={Object.keys(this.state)}
						onLeaveFeedback={this.onLeaveFeedback}
					/>
				</Section>
				<Section title="Statistics">
					{total === 0 ? (
						<Notification message="There is no feedback" />
					) : (
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={this.countTotalFeedback()}
							positivePercentage={this.countPositiveFeedbackPercentage()}
						/>
					)}
				</Section>
			</>
		)
	}
}
export default App
