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
	  left: 64px !important;
	  top: 32px !important;
		display: none;
		${media.small`display: block;`}
	}

	.bm-burger-button {
		${media.small`left: 32px !important;`}
	}
`

const SidebarWrapper = styled(Menu)`
	background-color: white;
	width: ${sizes.sidebar.width} !important;
	padding: 96px 24px 0 64px;

	${media.small`
		min-height: 100vh;
		width: 100vw !important;
		padding-right: 64px;
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
	margin-bottom: 40px;
	text-transform: uppercase;
	letter-spacing: 2px;

	a {
		text-decoration: none;
	}
`

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
				customBurgerIcon={<Icon name='sidebar-open' />}
				customCrossIcon={<Icon name='sidebar-close' />}
				onStateChange={this.handleStateChange}
			>
				<SidebarHeader><Link to='/'>Chase McCoy</Link></SidebarHeader>

				<SidebarLink to='/'><Icon name='home' />Home</SidebarLink>
				<SidebarLink to='/test-post-2'><Icon name='person' />About Me</SidebarLink>
				<SidebarLink to='/test-post-2'><Icon name='heart' />Favorites</SidebarLink>
				<SidebarLink to='/test-gallery-1' secondary>Books</SidebarLink>
				<SidebarLink to='/portfolio' secondary>Movies</SidebarLink>
				<SidebarLink to='/portfolio'><Icon name='portfolio' />Portfolio</SidebarLink>
				<SidebarLink to='/bookmarks'><Icon name='bookmark' />Bookmarks</SidebarLink>
		  </SidebarWrapper>
		);
	}
}

export default Sidebar
