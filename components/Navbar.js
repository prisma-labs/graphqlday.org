import Navbar from 'components/Navbar'
import { eventbriteLink } from '../utils/config'

export default () => (
  <Navbar
    title="GraphQL Day"
    renderNormalLinks={renderNormalLinks}
    renderAnchorLinks={renderAnchorLinks}
  />
)

// Nav Links
const renderAnchorLinks = NavItem => [
  <NavItem key="4" href="#venue" isAnchor={true}>
    Venue
  </NavItem>,
  <NavItem key="5" href="https://graphql-europe.org">
    GraphQL Europe
  </NavItem>,
  <NavItem key="6" href="/team">
    Team
  </NavItem>,
  // <NavItem key="7" href={eventbriteLink} isButtonStyle={true}>
  //   Get Tickets
  // </NavItem>,
]

const renderNormalLinks = NavItem => [
  <NavItem key="4" href="/#venue">
    Venue
  </NavItem>,
  <NavItem key="5" href="https://graphql-europe.org">
    GraphQL Europe
  </NavItem>,
  <NavItem key="6" href="/team">
    Team
  </NavItem>,
  // <NavItem key="7" href={eventbriteLink} isButtonStyle={true}>
  //   Get Tickets
  // </NavItem>,
]
