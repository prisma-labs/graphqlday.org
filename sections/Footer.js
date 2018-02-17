import { Fragment } from 'react'
import { Twitter, Medium, Mail } from 'components/Icons'
import Footer from 'components/Footer'
import Link from 'next/link'

import { eventbriteLink } from '../utils/config'

export default () => (
  <Footer
    renderLinks={({
      Column,
      LinkItem,
      AnchorLinkItem,
      IconWrapper,
      isHomePage,
    }) => (
      <Fragment>
        <Column>
          <Link href={eventbriteLink}>
            <LinkItem href={eventbriteLink}>Get Tickets</LinkItem>
          </Link>

          {isHomePage() ? (
            <AnchorLinkItem key="2" to="#venue">
              Venue
            </AnchorLinkItem>
          ) : (
            <Link href="/#venue">
              <LinkItem href="/#venue">Venue</LinkItem>
            </Link>
          )}

          <Link>
            <LinkItem href="https://graphql-europe.org">
              GraphQL Europe
            </LinkItem>
          </Link>
          <Link key="4" href="/team">
            <LinkItem href="/team">Team</LinkItem>
          </Link>
        </Column>

        <Column>
          {/* <LinkItem href="https://api.graphql-europe.org">API</LinkItem> */}
          <LinkItem href="/code-of-conduct">Code of Conduct</LinkItem>
          <LinkItem href="/imprint">Imprint</LinkItem>
          <LinkItem href="https://github.com/graphcool/graphqlday.org">
            <span>View source</span>
          </LinkItem>
        </Column>

        <Column>
          <LinkItem href="https://twitter.com/graphqleu">
            <IconWrapper>
              <Twitter />
            </IconWrapper>
            <span>Twitter</span>
          </LinkItem>
          <LinkItem href="https://medium.com/graphql-europe">
            <IconWrapper medium>
              <Medium />
            </IconWrapper>
            <span>Medium</span>
          </LinkItem>
          <LinkItem href="mailto:support@graphql-europe.org">
            <IconWrapper>
              <Mail />
            </IconWrapper>
            <span>Contact us!</span>
          </LinkItem>
        </Column>
      </Fragment>
    )}
  />
)
