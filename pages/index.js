import Speakers from 'graphiconf/sections/Speakers'
import CoOrganizedBy from 'graphiconf/sections/CoOrganizedBy'
import FullImage from 'components/FullImage'

import { speakersList } from '../utils/data'
import SeoTitle from '../components/SeoTitle'
import JoinUs from '../sections/JoinUs'
import Schedule from '../sections/Schedule'
import GetYourTickets from '../sections/GetYourTickets'
import Nemo from '../sections/Nemo'
import Footer from '../sections/Footer'
import Partners from '../sections/Partners'

export default () => (
  <div>
    <SeoTitle />

    <JoinUs />
    <Speakers
      heading="Meet our GraphQL expert speakers"
      speakersList={speakersList}
    />
    <Schedule />

    <div style={{ padding: '140px 0 70px 0' }}>
      <FullImage src="/static/nemo-1.jpg" />
    </div>

    <Nemo />
    <GetYourTickets />

    <FullImage src="/static/nemo-3.jpg" />

    <div style={{ padding: '80px 0 30px 0' }}>
      <Partners />
      <CoOrganizedBy />
    </div>

    <Footer />
  </div>
)
