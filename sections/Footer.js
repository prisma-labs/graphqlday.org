import { Fragment } from 'react'
import { Twitter, Mail } from 'components/Icons'
import Footer from 'components/Footer'
import Link from 'next/link'

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
          {isHomePage() ? (
            <AnchorLinkItem key="2" to="#venue">
              Venue
            </AnchorLinkItem>
          ) : (
            <Link href="/#venue">
              <LinkItem href="/#venue">Venue</LinkItem>
            </Link>
          )}
        </Column>

        <Column>
          {/* <LinkItem href="https://api.graphql-europe.org">API</LinkItem> */}
          <LinkItem href="/code-of-conduct">Code of Conduct</LinkItem>
          <LinkItem href="https://github.com/graphcool/graphqlday.org">
            <span>View source</span>
          </LinkItem>
        </Column>

        <Column>
          <LinkItem href="https://twitter.com/ok_grow">
            <IconWrapper>
              <Twitter />
            </IconWrapper>
            <span>Twitter</span>
          </LinkItem>
          <LinkItem href="mailto:hello@okgrow.com">
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
