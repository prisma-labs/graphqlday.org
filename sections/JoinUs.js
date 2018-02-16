import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { textGrey } from 'utils/colors'
import { upperCaseHeading } from 'utils/mixins'
import { navHeight, mobileNavHeight } from 'utils/sizes'
import { mobile } from 'utils/media'
import { eventbriteLink } from 'utils/config'
import Navbar from 'components/Navbar'
import Container from 'components/Container'
import SectionContent from 'components/SectionContent'
import Button from 'components/Button'
import FantasticImg from 'components/FantasticImg'

const JoinUsIntro = () => (
  <Wrapper>
    <FantasticImgWrapper>
      <FantasticImg />
    </FantasticImgWrapper>

    <NavbarFloater>
      <Navbar />
    </NavbarFloater>

    <PopWrapper>
      <Container>
        <SectionContent>
          <Title>Join us for GraphQL Day!</Title>
          <Description>
            GraphQL Day is a hands-on one day developer conference and workshop
            for lovers of GraphQL. GraphQL Day is part of the GraphQL Europe
            family, Europe’s only GraphQL conference, organized by Graph.Cool
            and Honeypot.
          </Description>

          <Meta>
            <MetaItem>
              <MetaItemKey>Date</MetaItemKey>
              <MetaItemValue>14th April, 2018</MetaItemValue>
            </MetaItem>
            <MetaItem>
              <MetaItemKey>Location</MetaItemKey>
              <MetaItemValue>Nemo Science Museum, Amsterdam</MetaItemValue>
            </MetaItem>
          </Meta>

          <ButtonWrapper>
            <Button isLink={true} href={eventbriteLink}>
              Get Tickets
            </Button>
          </ButtonWrapper>
        </SectionContent>
      </Container>
    </PopWrapper>
  </Wrapper>
)

export default JoinUsIntro

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: ${rem(navHeight)};

  ${mobile(css`
    padding-top: ${rem(mobileNavHeight)};
  `)};
`

const FantasticImgWrapper = styled.div`
  position: absolute;

  /* here */
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
