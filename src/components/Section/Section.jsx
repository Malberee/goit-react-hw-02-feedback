import React from 'react'
import PropTypes from 'prop-types'
import SectionTitle from './Section.styled'

const Section = ({ title, children }) => {
	return (
		<div>
            <SectionTitle>{title}</SectionTitle>
            {children}
		</div>
	)
}

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.object.isRequired
}

export default Section
