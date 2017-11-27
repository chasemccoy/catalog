import React from 'react'
import styled, {injectGlobal} from 'styled-components'
import {Link} from '../components/Components'
import { colors, sizes, fontWeights } from '../utils/design'
import { media } from '../utils/media'
import {Icon} from './Icon'
import { push as Menu } from 'react-burger-menu'

injectGlobal`
	html.noScroll {
		overflow: hidden;
	}

	.bm-menu {
		overflow: visible !important;
	}

	.bm-burger-button,
	.bm-cross-button {
		position: fixed;
		left: 0 !important;
		top: 0 !important;
		right: 0 !important;
		background-color: white;
		padding: 24px ${sizes.content.padding};
		display: none;
		${media.small`display: flex;`}
	}

	.bm-burger-button {
		${media.small`padding: 24px ${sizes.content.smallPadding};`}
	}

	.bm-cross-button {
		${media.small`padding: 24px 40px 16px;`}
		width: auto !important;
		height: auto !important;
	}
`

const SidebarWrapper = styled(Menu)`
	background-color: white;
	width: ${sizes.sidebar.width} !important;
	padding: 96px 24px 0 64px;

	${media.tiny`
		min-height: 100vh;
		width: 100vw !important;
		padding-left: 40px;
		padding-right: 40px;
	`}

	.primary + .primary,
	.secondary + .primary {
		margin-top: 16px;
	}
`

const SidebarLink = styled(Link).attrs({
	className:  props => props.secondary ? 'secondary' : 'primary',
	activeClassName: 'selected',
	exact: true
})`
	display: flex !important;
	align-items: center;
	height: 36px;
	padding: 8px;
	border-radius: 4px;
	text-decoration: none;
	margin: 0 ${props => props.secondary ? '-8px 0 18px' : '-8px'};
	font-weight: ${fontWeights.medium};
	transition: 0.3s all;

	&:link, &:visited {
		color: ${props => props.secondary ? colors.sidebar.link.secondary : colors.sidebar.link.primary};
	}

	&:hover {
		background-color: ${colors.sidebar.link.hover};
	}

	&:active {
		background-color: ${colors.sidebar.link.selectedHover};
	}

	&.selected {
		background-color: ${colors.sidebar.link.selectedBackground};

		&:link, &:visited {
			color: ${colors.sidebar.link.selected};
		}

		&:hover {
			background-color: ${colors.sidebar.link.selectedHover};
		}
	}
`

const SidebarHeader = styled.h1`
	font-size: 15px;
	font-weight: ${fontWeights.bold};
	margin: ${props => props.flush ? '0 0 0 8px' : '0 0 40px 0'};
	display: ${props => props.flush ? 'inline' : 'block'};
	text-transform: uppercase;
	letter-spacing: 2px;

	${props => props.desktop && (media.small`display: none !important;`)}

	a {
		text-decoration: none;
	}
`

const SidebarButton = (props) => (
	<div style={{display: 'flex', alignItems: 'center'}}>
		{props.open ? <Icon name='sidebar-open' /> : <Icon name='sidebar-close' />}
		<SidebarHeader flush>Chase McCoy</SidebarHeader>
	</div>
)

class Sidebar extends React.Component {
	state = {
		isOpen: false
	}

	componentDidMount = () => {
		window.matchMedia(`(min-width: ${sizes.breakpoints.small})`).addListener(this.mediaQueryChanged)
		this.setState({isOpen: window.matchMedia(`(min-width: ${sizes.breakpoints.small})`).matches})
	}

	mediaQueryChanged = () => {
		this.setState({isOpen: window.matchMedia(`(min-width: ${sizes.breakpoints.small})`).matches})

		document.documentElement.classList.toggle('noScroll', window.matchMedia(`(max-width: ${sizes.breakpoints.small})`).matches && this.state.isOpen)
	}

	handleStateChange = (state) => {
		document.documentElement.classList.toggle('noScroll', window.matchMedia(`(max-width: ${sizes.breakpoints.small})`).matches && state.isOpen)
	}

	render() {
		return (
			<SidebarWrapper
				noOverlay
				disableOverlayClick
				pageWrapId='content'
				outerContainerId='wrapper'
				width={sizes.sidebar.width}
				isOpen={this.state.isOpen}
				customBurgerIcon={<SidebarButton open />}
				customCrossIcon={<SidebarButton />}
				onStateChange={this.handleStateChange}
			>
				<SidebarHeader desktop><Link to='/'>Chase McCoy</Link></SidebarHeader>

				<SidebarLink to='/'><Icon name='home' />Home</SidebarLink>
				<SidebarLink to='/portfolio'><Icon name='person' />About Me</SidebarLink>

				<SidebarLink to='/favorites'><Icon name='heart' />Favorites</SidebarLink>
				<SidebarLink to='/books' secondary>Books</SidebarLink>
				<SidebarLink to='/movies' secondary>Movies</SidebarLink>

				<SidebarLink to='/portfolio'><Icon name='portfolio' />Portfolio</SidebarLink>
				<SidebarLink to='/bookmarks'><Icon name='bookmark' />Bookmarks</SidebarLink>
		  </SidebarWrapper>
		);
	}
}

export default Sidebar
