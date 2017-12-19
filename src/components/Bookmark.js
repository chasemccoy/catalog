import { colors, fontWeights } from 'utils/design'

import Card from 'components/Card'
import Icon from 'components/Icon'
import Image from 'components/Image'
import Markdown from 'components/Markdown'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const BookmarkContainer = styled(Card)`
	padding: 24px;
`

const BookmarkTitle = styled.h4`
	padding-left: 8px;
	margin-top: -2px;
	margin-bottom: 0;
	font-weight: ${fontWeights.medium};
`

const BookmarkHeader = styled.div`
	display: flex;
`

const BookmarkContent = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 12px;
	margin-left: calc(22px + 4px + 8px);
`

const BookmarkDescription = styled.div`
	width: 100%;
	font-size: 14px;

	p {
		margin: 0;
	}
`

const BookmarkImage = styled(Image)`
	border-radius: 4px;
	width: 48px;
	height: 48px;
	object-fit: cover;
	float: right;
	margin-left: 16px;
`

const MarkdownDescription = BookmarkDescription.withComponent(Markdown)

const BookmarkComment = MarkdownDescription.extend`
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
			<BookmarkContainer to={this.props.url} highlight>
				<BookmarkHeader>
					<Icon name='open' />

					<BookmarkTitle>{this.state.title}</BookmarkTitle>
				</BookmarkHeader>

				<BookmarkContent>
					<BookmarkDescription>
						{this.state.imageURL && <BookmarkImage src={this.state.imageURL} title={this.state.title} />}

						<p>{this.state.description}</p>
					</BookmarkDescription>

					{this.props.comment && <BookmarkComment>{this.props.comment}</BookmarkComment>}
				</BookmarkContent>
			</BookmarkContainer>
		);
	}
}

export default Bookmark
