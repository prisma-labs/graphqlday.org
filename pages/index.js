import { Provider } from 'unstated'

// import Speakers from 'graphiconf/sections/Speakers'
// import CoOrganizedBy from 'graphiconf/sections/CoOrganizedBy'
// import FullImage from 'components/FullImage'

import { speakersList } from '../utils/data'
import SeoTitle from '../components/SeoTitle'
import JoinUs from '../sections/JoinUs'
// import Schedule from '../sections/Schedule'
import GetYourTickets from '../sections/GetYourTickets'
import Nemo from '../sections/Nemo'
import Footer from '../sections/Footer'
// import Partners from '../sections/Partners'
import Sponsors from '../sections/Sponsors'
import SubscribeModal from '../components/SubscribeModal'

export default () => (
  <Provider>
    <div>
      <SeoTitle />

      <JoinUs />
      <Speakers heading="Speakers coming soon" speakersList={speakersList} />

      <Nemo />
      <GetYourTickets />

      {/*<FullImage src="/static/nemo-3.jpg" />*/}

      <div style={{ padding: '0px 0 30px 0' }}>
        <Sponsors />
      </div>

      <SubscribeModal />

      <Footer />
    </div>
  </Provider>
)
