import styled from 'styled-components'

export const FeedbackList = styled.ul`
	padding: 0;
	list-style: none;
	display: flex;
	justify-content: center;
	gap: 30px;
`

export const FeedbackButton = styled.button`
	&:focus,
	&:hover {
		border-color: ${(props) =>
			props.feedback === 'good'
				? '#64ffa5'
				: props.feedback === 'neutral'
				? '#646cff'
				: '#ff6486'};
		outline: none;
	}
`