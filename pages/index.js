import { Provider } from 'unstated'
import styled from 'styled-components'

import Speakers from 'graphiconf/sections/Speakers'
import withData from 'utils/withData'
// import CoOrganizedBy from 'graphiconf/sections/CoOrganizedBy'
// import FullImage from 'components/FullImage'

import { speakersList } from '../utils/data'
import SeoTitle from '../components/SeoTitle'
import JoinUs from '../sections/JoinUs'
import Schedule from '../sections/Schedule'
import GetYourTickets from '../sections/GetYourTickets'
import Nemo from '../sections/Nemo'
import Footer from '../sections/Footer'
import Button from 'components/Button'
// import Partners from '../sections/Partners'
import Sponsors from '../sections/Sponsors'
import SubscribeModal from '../components/SubscribeModal'

export default withData(() => (
  <Provider>
    <div>
      <SeoTitle />
      <JoinUs />
      <Speakers heading="Speakers" speakersList={speakersList} />
      <Schedule />
      <Container>
        <TrainingContainer id="training">
          <h1>Training</h1>
          <Column>
            <LeftSide>
              <h3>GraphQL Fundamentals Training</h3>
              <ul>
                <li>Why use GraphQL?</li>
                <li>GraphQL syntax</li>
                <li>
                  Introduction to Apollo Client Sending queries on the client
                </li>
                <li>
                  Triggering mutations on the client Introduction to Apollo
                  Server
                </li>
                <li>
                  Writing type definitions Mapping types to data with resolver
                  functions
                </li>
              </ul>
            </LeftSide>
            <RightSide>
              <h3>Advanced GraphQL Training </h3>
              <ul>
                <li>Server-side rendering & best practices</li>
                <li>
                  GraphQL Subscriptions Schema stitching Caching and batching
                </li>
                <li>
                  GraphQL operations with Dataloader Imperative client cache
                  updates
                </li>
                <li>
                  with update API Optimistic UI in response to a mutation
                  GraphQL in production with Apollo Engine
                </li>
              </ul>
            </RightSide>
          </Column>
          <Center>
            <Button
              style={{ marginRight: 24, marginBottom: 24 }}
              isLink={true}
              href="https://www.eventbrite.com/e/graphql-day-toronto-tickets-53346817768"
            >
              TRAINING TICKETS
            </Button>
          </Center>
        </TrainingContainer>
      </Container>
      <Nemo />
      <GetYourTickets />
      {/*<FullImage src="/static/nemo-3.jpg" />*/}
      <div style={{ padding: '0px 0 30px 0' }}>
        <Sponsors />
      </div>
      <SubscribeModal />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </div>
  </Provider>
))

const Center = styled.div`
  text-align: center;
`

const Column = styled.div`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

const LeftSide = styled.div`
  width: 50%;
  display: inline-block;
  padding: 24px;
  padding-top: 0;
  @media (max-width: 800px) {
    width: 100%;
  }
`
const RightSide = styled.div`
  width: 50%;
  display: inline-block;
  padding: 24px;
  padding-top: 0;
  @media (max-width: 800px) {
    width: 100%;
  }
`

const Container = styled.div`
  max-width: 63.333333333333336rem;
  padding: 0 1.3888888888888888rem;
  margin: 0 auto;
  box-sizing: content-box;
`

const TrainingContainer = styled.div`
  h1 {
    margin-top: 0;
    margin-bottom: 2.5rem;
    line-height: 1.0555555555555556rem;
    font-weight: 600;
    font-size: 0.8888888888888888rem;
    -webkit-text-transform: uppercase;
    text-transform: uppercase;
    -webkit-letter-spacing: 0.027777777777777776rem;
    -moz-letter-spacing: 0.027777777777777776rem;
    -ms-letter-spacing: 0.027777777777777776rem;
    letter-spacing: 0.027777777777777776rem;
    color: #db3f74;
  }
`

// TODO: clone the graphiconf package and change the image there
const FooterContainer = styled.div`
  div[class^='Footer__End'],
  div[class*=' Footer__End'] {
    display: none;
  }
`

const SpeakersComingSoon = styled.div`
  max-width: 900px;
  padding: 56px 24px;
  margin: 0 auto;
  font-size: 36px;
  padding-top: 0;
  margin-top: -48px;
  @media (max-width: 700px) {
    font-size: 24px;
  }
`
