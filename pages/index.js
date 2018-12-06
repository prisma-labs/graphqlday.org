import { Provider } from 'unstated'

// import Speakers from 'graphiconf/sections/Speakers'
// import CoOrganizedBy from 'graphiconf/sections/CoOrganizedBy'
// import FullImage from 'components/FullImage'

// import { speakersList } from '../utils/data'
import SeoTitle from '../components/SeoTitle'
import JoinUs from '../sections/JoinUs'
// import Schedule from '../sections/Schedule'
import GetYourTickets from '../sections/GetYourTickets'
import Nemo from '../sections/Nemo'
import Footer from '../sections/Footer'
// import Partners from '../sections/Partners'
import Sponsors from '../sections/Sponsors'
import SubscribeModal from '../components/SubscribeModal'
import styled from 'styled-components'

export default () => (
  <Provider>
    <div>
      <SeoTitle />

      <JoinUs />
      {/*
      <Speakers heading="Speakers coming soon" speakersList={speakersList} />
      */}
      <SpeakersComingSoon>
        <p>
          Hear from the thought leaders in the GraphQL space including speakers
          from GitHub, Shopify, Amazon, TELUS, and more!
        </p>
        <p> Speakers and schedule coming soon.</p>
      </SpeakersComingSoon>
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
)

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
  @media (max-width: 700px) {
    font-size: 24px;
  }
`
