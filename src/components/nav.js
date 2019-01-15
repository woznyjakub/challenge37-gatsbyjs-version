import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './logo'
import Hamburger from './hamburger'

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  overflow: hidden;
  z-index: 5;
  font-size: 15px;
  padding: 0 1.5rem;
  transition: 0.3s 0.4s;

  background-color: ${({ theme }) => theme.colors.semitransparentblack};
  ${({ backgroundEnabled }) =>
    backgroundEnabled
      ? null
      : `
    background-color: transparent;
    padding-top: 0.5rem;
    `}

  ${({ menuActive, theme }) =>
    menuActive
      ? `background-color: ${theme.colors.black} !important;
          transition-delay: 0s;`
      : null}
  ${({ theme }) => theme.media('desktop-small')} {
    transition-delay: 0s;
  }
`
const StyledItemList = styled.ul`
  flex-basis: 100%;
  ${({ menuActive }) => (menuActive ? 'padding: 0.25rem 0;' : null)}
  height: ${({ menuActive, itemsAmount }) =>
    menuActive ? `${45 * itemsAmount + 8}px` : 0};
  transition: 1s ${({ theme }) => theme.timingFunctions.scaleX};

  ${({ theme }) => theme.media('landscape')} {
    display: flex;
    flex-wrap: wrap;
    height: ${({ menuActive, itemsAmount }) =>
      menuActive ? `${45 * Math.ceil(itemsAmount / 2) + 8}px` : 0};
  }
  ${({ theme }) => theme.media('desktop-small')} {
    display: inline-flex;
    flex-basis: auto;
    height: auto;
  }
`
const StyledNavItem = styled.li`
  position: relative;
  padding: 0.25rem 0;
  line-height: 2.5em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  text-align: center;
  ${({ theme }) => theme.media('landscape')} {
    flex-basis: 50%;
  }
  ${({ theme }) => theme.font('lato', '700')}
  ${({ theme }) => theme.media('desktop-small')} {
    padding: 0 0.75rem;
    flex-basis: auto;
    ::before {
      content: '';
      position: absolute;
      left: -0.5rem;
      right: -0.5rem;
      bottom: -0.5rem;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.white};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease-out;
    }
    :hover::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`

class Nav extends Component {
  state = {
    backgroundEnabled: false,
    menuActive: false,
  }
  handleScroll = () => {
    this.setState(() => {
      return window.scrollY < 20
        ? { backgroundEnabled: false }
        : { backgroundEnabled: true }
    })
  }
  handleHamburgerClick = () => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }))
  }
  componentDidMount = () => {
    // The source of error I can't deal with.
    window.addEventListener('scroll', this.handleScroll)
  }
  handleListItemsClick = scrollTo => {
    if (window.innerWidth < 900) {
      setTimeout(() => {
        window.scroll({
          top:
            document.getElementById(scrollTo).offsetTop -
            document.getElementById('main-nav').offsetHeight,
          behavior: 'smooth',
        })
      }, 500)
      this.setState(() => ({
        menuActive: false,
      }))
    } else {
      window.scroll({
        top:
          document.getElementById(scrollTo).offsetTop -
          document.getElementById('main-nav').offsetHeight,
        behavior: 'smooth',
      })
      this.setState(() => ({
        menuActive: false,
      }))
    }
  }
  render() {
    const { backgroundEnabled, menuActive } = this.state
    const { id, items } = this.props
    return (
      <StyledNav
        id={id}
        backgroundEnabled={backgroundEnabled}
        menuActive={menuActive}
      >
        <Logo />
        <Hamburger
          onClick={this.handleHamburgerClick}
          width="35"
          height="26"
          linesHeight="3"
          hamburgerActive={menuActive}
        />
        <StyledItemList menuActive={menuActive} itemsAmount={items.length}>
          {items.map(({ name, scrollTo }, i) => (
            <StyledNavItem
              key={i}
              order={i}
              onClick={this.handleListItemsClick.bind(this, scrollTo)}
            >
              <span>{name}</span>
            </StyledNavItem>
          ))}
        </StyledItemList>
      </StyledNav>
    )
  }
}
export default Nav
