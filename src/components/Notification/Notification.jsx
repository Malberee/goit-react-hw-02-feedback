import React from 'react'
import PropTypes from 'prop-types'
import FeedbackNotification from './Notification.styled'

const Notification = ({ message }) => {
	return <FeedbackNotification>{message}</FeedbackNotification>
}

Notification.propTypes = {
	message: PropTypes.string.isRequired
}

export default Notification
