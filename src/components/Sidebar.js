import { colors, fontWeights, sizes } from 'utils/design'
import styled, { injectGlobal } from 'styled-components'

import Icon from 'components/Icon'
import { Link } from 'components/Components'
import { push as Menu } from 'react-burger-menu'
import React from 'react'
import { media } from 'utils/media'

injectGlobal`
	html.noScroll {
		overflow: hidden;
	}

	.bm-menu {
		overflow: visible !important;
		width: ${sizes.sidebar.minWidth};

		${media.small`width: 100%;`}
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
		border-bottom: 1px solid ${colors.sidebar.border};
	}

	.bm-burger-button {
		${media.small`padding: 24px ${sizes.content.smallPadding};`}
		z-index: 2 !important;
	}

	.bm-cross-button {
		padding: 24px 64px;
		${media.tiny`padding: 24px;`}
		width: auto !important;
		height: auto !important;
	}
`

const SidebarWrapper = styled(Menu)`
  background-color: white;
  min-width: ${sizes.sidebar.minWidth};
  padding: 96px 24px 0 64px;
  z-index: 3 !important;
  ${'' /* box-shadow: rgba(0, 0, 0, 0.0392157) -1px 0px 2px inset;
	background-color: #FAFBFC; */} display: flex;
  justify-content: flex-end;

  ${media.tiny`
		min-height: 100vh;
		width: 100vw !important;
		padding-left: ${sizes.content.smallPadding};
		padding-right: ${sizes.content.smallPadding};
	`} .primary + .primary, .secondary + .primary {
    margin-top: 16px;
  }
`

const SidebarLink = styled(Link).attrs({
  className: props => (props.secondary ? 'secondary' : 'primary'),
  activeClassName: 'selected',
  exact: true,
})`
  display: flex !important;
  align-items: center;
  height: 36px;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  margin: 0 ${props => (props.secondary ? '-8px 0 18px' : '-8px')};
  font-weight: ${fontWeights.medium};
  transition: 0.3s all;

  &:link,
  &:visited {
    color: ${props =>
      props.secondary
        ? colors.sidebar.link.secondary
        : colors.sidebar.link.primary};
  }

  &:hover {
    background-color: ${colors.sidebar.link.hover};
  }

  &:active {
    background-color: ${colors.sidebar.link.selectedHover};
  }

  &.selected {
    background-color: ${colors.primary.lightBlue};

    &:link,
    &:visited {
      color: ${colors.primary.blue};
    }

    &:hover {
      background-color: ${colors.sidebar.link.selectedHover};
    }
  }
`

const SidebarHeader = styled.h1`
  font-size: 16px;
  font-weight: ${fontWeights.bold};
  margin: ${props => (props.flush ? '0 0 0 8px' : '0 0 40px 0')};
  display: ${props => (props.flush ? 'inline' : 'block')};
  text-transform: uppercase;
  letter-spacing: 2px;

  ${props => props.desktop && media.small`display: none !important;`} a {
    text-decoration: none;
  }
`

const SidebarButton = props => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {props.open ? <Icon name="sidebar-open" /> : <Icon name="sidebar-close" />}
    <SidebarHeader flush>Chase McCoy</SidebarHeader>
  </div>
)

class Sidebar extends React.Component {
  state = {
    isOpen: false,
  }

  componentDidMount = () => {
    window
      .matchMedia(`(min-width: ${sizes.breakpoints.small})`)
      .addListener(this.mediaQueryChanged)
    this.setState({
      isOpen: window.matchMedia(`(min-width: ${sizes.breakpoints.small})`)
        .matches,
    })
  }

  mediaQueryChanged = () => {
    this.setState({
      isOpen: window.matchMedia(`(min-width: ${sizes.breakpoints.small})`)
        .matches,
    })

    document.documentElement.classList.toggle(
      'noScroll',
      window.matchMedia(`(max-width: ${sizes.breakpoints.small})`).matches &&
        this.state.isOpen
    )
  }

  handleStateChange = state => {
    document.documentElement.classList.toggle(
      'noScroll',
      window.matchMedia(`(max-width: ${sizes.breakpoints.small})`).matches &&
        state.isOpen
    )
    this.setState({ isOpen: state.isOpen })
  }

  closeMenu = () => {
    this.setState({
      isOpen: window.matchMedia(`(min-width: ${sizes.breakpoints.small})`)
        .matches,
    })
  }

  render() {
    return (
      <SidebarWrapper
        noOverlay
        disableOverlayClick
        pageWrapId="content"
        outerContainerId="wrapper"
        width={sizes.sidebar.width}
        isOpen={this.state.isOpen}
        customBurgerIcon={<SidebarButton open />}
        customCrossIcon={<SidebarButton />}
        onStateChange={this.handleStateChange}
        className={this.state.isOpen ? 'open' : 'closed'}
      >
        <SidebarHeader desktop>
          <Link to="/">Chase McCoy</Link>
        </SidebarHeader>

        {/* <SidebarSubheader>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</SidebarSubheader> */}

        <div onClick={this.closeMenu}>
          {this.props.items &&
            this.props.items.map(({ node }, i) => (
              <SidebarLink
                to={node.url}
                secondary={node.icon ? false : true}
                key={i}
              >
                {node.icon && <Icon name={node.icon} />}
                {node.title}
              </SidebarLink>
            ))}
        </div>
      </SidebarWrapper>
    )
  }
}

export default Sidebar
