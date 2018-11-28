import Navbar from 'components/Navbar'
import { eventbriteLink } from '../utils/config'

export default () => (
  <Navbar
    title="GraphQL Day Toronto"
    renderNormalLinks={renderNormalLinks}
    renderAnchorLinks={renderAnchorLinks}
  />
)

// Nav Links
const renderAnchorLinks = NavItem => [
  <NavItem key="4" href="#venue" isAnchor={true}>
    Venue
  </NavItem>,
  <NavItem
    key="6"
    href="https://docs.google.com/forms/d/e/1FAIpQLSet0Ipr_pObypzLYchHJiEOi-CQNy7r79WFTUzQGRlhdLGA9Q/viewform"
    isButtonStyle={true}
  >
    SUBMIT YOUR TALK
  </NavItem>,
]

const renderNormalLinks = NavItem => [
  <NavItem key="4" href="/#venue">
    Venue
  </NavItem>,
  <NavItem
    key="6"
    href="https://docs.google.com/forms/d/e/1FAIpQLSet0Ipr_pObypzLYchHJiEOi-CQNy7r79WFTUzQGRlhdLGA9Q/viewform"
    isButtonStyle={true}
  >
    SUBMIT YOUR TALK
  </NavItem>,
]
