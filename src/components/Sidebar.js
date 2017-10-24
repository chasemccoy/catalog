import React from 'react'
import styled, {injectGlobal} from 'styled-components'
import {Link} from '../components/Components'
import { colors, sizes, fontWeights } from '../utils/design'
import {Icon} from './Icon'
import { push as Menu } from 'react-burger-menu'

injectGlobal`
	.bm-menu {
		overflow: visible !important;
	}

	.bm-burger-button, .bm-cross-button {
		position: fixed;
	  left: 64px !important;
	  top: 36px !important;

		@media screen and (min-width: 40em) {
			display: none;
		}
	}
`

const SidebarWrapper = styled(Menu)`
	background-color: white;
	width: ${sizes.sidebar.width};
	${'' /* border: 1px solid ${colors.sidebar.border};
	padding: 96px 24px 0; */}
	padding: 96px 24px 0 64px;

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
	height: 32px;
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
	font-size: 20px;
	font-weight: ${fontWeights.heavy};
	margin-bottom: 40px;

	a {
		text-decoration: none;
	}
`;

// const Sidebar = () => (
//   <SidebarWrapper
// 		noOverlay
// 		disableOverlayClick
// 		pageWrapId='content'
// 		outerContainerId='wrapper'
// 		width={sizes.sidebar.width}
// 		isOpen={true}
// 		// customBurgerIcon={false}
// 		// customCrossIcon={false}
// 	>
// 		<SidebarHeader><Link to='/'>Chase McCoy</Link></SidebarHeader>
// 		<SidebarLink to='/'><Icon name='home' />Home</SidebarLink>
// 		<SidebarLink to='/test-post-2'><Icon name='person' />About Me</SidebarLink>
// 		<SidebarLink to='/test-post-2'><Icon name='heart' />Favorites</SidebarLink>
// 		<SidebarLink to='/test-gallery-1' secondary>Books</SidebarLink>
// 		<SidebarLink to='/portfolio' secondary>Movies</SidebarLink>
// 		<SidebarLink to='/portfolio'><Icon name='portfolio' />Portfolio</SidebarLink>
//   </SidebarWrapper>
// )

class Sidebar extends React.Component {
	state = {
		isOpen: true
	}

	componentWillMount = () => {
		window.matchMedia(`(min-width: 40em)`).addListener(this.mediaQueryChanged)
		this.setState({isOpen: window.matchMedia(`(min-width: 40em)`).matches})
	}

	mediaQueryChanged = () => {
		this.setState({isOpen: window.matchMedia(`(min-width: 40em)`).matches})
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
