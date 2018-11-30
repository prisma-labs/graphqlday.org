import { Fragment } from 'react'
import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import TwinsContainer from 'components/TwinsContainer'
import SectionTitle from 'components/SectionTitle'
import PinkImage, { pinkWidth } from 'components/PinkImage'

const Nemo = () => (
  <Wrapper id="venue">
    <TwinsContainer
      fullWidthOnMobile={true}
      reverseOnMobile={true}
      endWidth={620}
      renderStart={Content => (
        <Fragment>
          <PinkImage.Bg left={0} width="calc(100% - 250px)" />
          <Content>
            <ImageWrapper>
              <PinkImage.Image src="/static/telus.jpg" pinkAlign="start" />
            </ImageWrapper>
          </Content>
        </Fragment>
      )}
      renderEnd={Content => (
        <Content>
          <Texts>
            <SectionTitle>Venue</SectionTitle>
            <Desc>
              New telus venue blurb " At TELUS Digital, we know that technology
              makes the world go faster and we’re delivering at a speed unheard
              of in a large organization. As a team, we're united through our
              shared passion to advance the customer experience, and find new
              ways to work smarter and better everyday. Find out more about the
              team at <a href="www.telus.com/digital">www.telus.com/digital</a>.
            </Desc>
          </Texts>
        </Content>
      )}
    />
  </Wrapper>
)

export default Nemo

const Wrapper = styled.section``
const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  margin-left: -${pinkWidth}px;

  img {
    max-width: 100%;
    height: auto;
  }

  ${mobile(css`
    justify-content: center;
    margin-left: 0;
    height: auto;

    img {
      max-width: 90%;
      height: auto;
    }
  `)};
`

const Texts = styled.div`
  padding-top: 175px;
  margin-left: 80px;
  padding-bottom: 200px;

  ${mobile(css`
    padding-top: 0;
    padding-bottom: 20px;
    margin-left: 0;
  `)};
`

const Desc = styled.p`
  font-size: ${rem(25)};
  line-height: 1.67;

  ${mobile(css`
    font-size: ${rem(18)};
  `)};
`
