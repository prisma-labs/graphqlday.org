import { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Subscribe } from 'unstated'

import rem from 'utils/rem'
import { textGrey } from 'utils/colors'
import { upperCaseHeading } from 'utils/mixins'
import { navHeight, mobileNavHeight } from 'utils/sizes'
import { mobile } from 'utils/media'
// import { eventbriteLink } from '../utils/config'
import Navbar from '../components/Navbar'
import TwinsContainer from 'components/TwinsContainer'
import SectionContent from 'components/SectionContent'
import Button from 'components/Button'
import PinkImage from 'components/PinkImage'
import ModalContainer from '../containers/ModalContainer'

const JoinUsIntro = () => (
  <Wrapper>
    <NavbarFloater>
      <Navbar />
    </NavbarFloater>

    <PopWrapper>
      <TwinsContainer
        fullWidthOnMobile={true}
        startWidth={650}
        renderStart={Content => (
          <Content>
            <ContentWrapper>
              <SectionContent>
                <Title>Join us at GraphQL Day Toronto!</Title>
                <Description>
                  GraphQL Day Toronto is a single-day conference focusing on
                  adopting GraphQL and getting the most out of it in production.
                  Learn from a lineup of thought leaders and connect with other
                  forward-thinking local developers and technical leaders.
                </Description>
                <Meta>
                  <MetaItem>
                    <MetaItemKey>Date</MetaItemKey>
                    <MetaItemValue>28th February, 2019</MetaItemValue>
                  </MetaItem>
                  <MetaItem>
                    <MetaItemKey>Location</MetaItemKey>
                    <MetaItemValue>
                      <a href="https://www.google.com/maps/place/25+York+Street/@43.6434445,-79.3809378,15z/data=!4m5!3m4!1s0x0:0x32684a124bd8acaf!8m2!3d43.6434445!4d-79.3809378?ved=2ahUKEwjJjbOMm5HgAhUCyYMKHSTvBG8Q_BIwCnoECAMQCA&shorturl=1">
                        3rd Floor TELUS Digital, Toronto
                      </a>
                    </MetaItemValue>
                  </MetaItem>
                </Meta>

                <Subscribe to={[ModalContainer]}>
                  {modal => (
                    <ButtonWrapper>
                      <Button
                        style={{ marginRight: 24, marginBottom: 24 }}
                        isLink={true}
                        href="https://www.eventbrite.com/e/graphql-day-toronto-tickets-53346817768"
                      >
                        TICKETS & TRAINING
                      </Button>
                      <Button isLink={true} href="mailto:hello@okgrow.com">
                        BECOME A SPONSOR
                      </Button>
                    </ButtonWrapper>
                  )}
                </Subscribe>
              </SectionContent>
            </ContentWrapper>
          </Content>
        )}
        renderEnd={Content => (
          <Fragment>
            <PinkImage.Bg right={0} />
            <Content style={{ position: 'relative' }}>
              <ImageWrapper>
                <PinkImage.Image retina={false} src="/static/toronto.png" />
              </ImageWrapper>
            </Content>
          </Fragment>
        )}
      />
    </PopWrapper>
  </Wrapper>
)

export default JoinUsIntro

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
`

const ContentWrapper = styled.div`
  padding-top: ${rem(navHeight + 55)};
  padding-bottom: 100px;

  ${mobile(css`
    padding-top: ${rem(mobileNavHeight)};
    padding-bottom: 10px;
  `)};
`

const ImageWrapper = styled.div`
  padding-top: 160px;
  display: flex;
  justify-content: flex-start;

  ${mobile(css`
    padding-top: 0;
    justify-content: center;
  `)};
`

const PopWrapper = styled.div`
  position: relative;
`

const NavbarFloater = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: ${rem(45)};
  font-weight: 800;

  ${mobile(css`
    font-size: ${rem(25)};
  `)};
`

const Description = styled.p`
  margin-top: ${rem(40)};
  margin-bottom: 0;

  max-width: ${rem(620)};
  line-height: 1.5;
  color: ${textGrey};

  ${mobile(css`
    margin-top: ${rem(25)};
    font-size: ${rem(15)};
  `)};
`

const Meta = styled.div`
  margin-top: ${rem(40)};
  margin-bottom: 0;
`

const MetaItem = styled.div`
  padding-right: ${rem(70)};
  display: inline-block;

  ${mobile(css`
    width: 50%;
    padding-right: 0;
  `)};
`

const MetaItemKey = styled.div`
  ${upperCaseHeading};
`

const MetaItemValue = styled.div``

const ButtonWrapper = styled.div`
  margin-top: ${rem(40)};
  margin-bottom: 0;
`
