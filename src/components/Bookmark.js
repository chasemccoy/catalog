import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Icon} from './Icon'
import { colors, fontWeights } from '../utils/design'

const BookmarkContainer = styled.a`
	display: block;
	min-height: 100%;
	padding: 24px;
	background-color: ${colors.bookmark.background};
	border-radius: 4px;
	border: 1px solid ${colors.bookmark.border.outer};
	text-decoration: none;
	transition: 0.3s all;

	&:hover {
		transform: scale(1.02);
	}

	&:active {
		transform: translateY(2px);
	}
`

const BookmarkTitle = styled.h4`
	padding-left: 8px;
	margin-top: -2px;
	margin-bottom: 0;
	font-weight: ${fontWeights.medium};
`

const BookmarkHeader = styled.div`
	display: flex;
	margin-bottom: 12px;
`

const BookmarkContent = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-left: calc(22px + 4px + 8px);
`

const BookmarkDescription = styled.p`
	margin-bottom: 0;
	color: ${colors.text.header};
	font-size: 14px;
	flex-basis: calc(100% - 48px - 16px);
`

const BookmarkImage = styled.img`
	border-radius: 4px;
	margin: 0 0 0 16px;
	width: 48px;
	height: 48px;
	object-fit: cover;
`

const BookmarkComment = BookmarkDescription.extend`
	width: 100%;
	margin-top: 20px;
	padding-top: 16px;
	border-top: 1px dashed ${colors.bookmark.border.inner};
	flex-basis: 100%;
`

class Bookmark extends React.Component {
	static propTypes = {
		url: PropTypes.string.isRequired,
		comment: PropTypes.string
	}

	state = {
		title: 'Loading...',
		description: '',
		imageURL: ''
	}

	componentDidMount = () => {
		fetch(`https://micro-open-graph-ljbqgzbbec.now.sh/?url=${this.props.url}`)
			.then((response) => response.json())
			.then((result) => {
				if (!result.title) {
					this.setState({title: 'Error: could not load metadata'})
					return
				}
				result.title && this.setState({title: result.title})
				result.description && this.setState({description: result.description})
				result.image && this.setState({imageURL: result.image})
			})
	};

	render() {
		return (
			<BookmarkContainer href={this.props.url} target='_blank'>
				<BookmarkHeader>
					<Icon name='open' />

					<BookmarkTitle>{this.state.title}</BookmarkTitle>
				</BookmarkHeader>

				<BookmarkContent>
					<BookmarkDescription>
						{this.state.description}
					</BookmarkDescription>

					{this.state.imageURL && <BookmarkImage src={this.state.imageURL} title={this.state.title} />}

					{this.props.comment && <BookmarkComment>{this.props.comment}</BookmarkComment>}
				</BookmarkContent>
			</BookmarkContainer>
		);
	}
}

export default Bookmark
