import Footer from 'graphiconf/sections/Footer'
import Speakers from 'graphiconf/sections/Speakers'
import CoOrganizedBy from 'graphiconf/sections/CoOrganizedBy'
import GetYourTicket from 'graphiconf/sections/GetYourTicket'
import FullImage from 'components/FullImage'

import SeoTitle from '../components/SeoTitle'
import JoinUs from '../sections/JoinUs'
import { speakersList } from '../utils/data'

export default () => (
  <div>
    <SeoTitle />

    <JoinUs />
    <Speakers
      heading="Meet our GraphQL expert speakers"
      speakersList={speakersList}
    />

    <FullImage src="/static/nemo-1.jpg" />
    <GetYourTicket />

    {/*
        HERE!

        I'm here

        HERE!
    */}

    <FullImage src="/static/nemo-3.jpg" />

    <div style={{ padding: '115px 0 30px 0' }}>
      <CoOrganizedBy />
    </div>

    <Footer />
  </div>
)
