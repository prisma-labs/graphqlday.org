import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const Page = styled.section`
  padding: 48px 64px;
  max-width: 1000px;
  margin: 0 auto;

  h1 {
    margin-bottom: 32px;
    font-size: 2.5em;
    font-weight: 800;
  }

  h2 {
    font-size: 1.4em;
    line-height: 1.7;
    font-weight: 400;
    margin-bottom: 64px;
  }

  h3 {
    color: rgb(219, 63, 116);
    line-height: 1.1;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 16px 0;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 32px;
    opacity: 0.75;
  }
`

const ConductPage = () => (
  <Layout>
    <Page>
      <h1>Code of Conduct</h1>
      <h2>
        All attendees, speakers, sponsors and volunteers at our conference are
        required to agree with the following code of conduct. Organisers will
        enforce this code throughout the event. We expect cooperation from all
        participants to help ensure a safe environment for everybody.
      </h2>

      <h3>THE QUICK VERSION</h3>
      <p>
        Our conference is dedicated to providing a harassment-free conference
        experience for everyone, regardless of gender, gender identity and
        expression, age, sexual orientation, disability, physical appearance,
        body size, race, ethnicity, religion (or lack thereof), or technology
        choices. We do not tolerate harassment of conference participants in any
        form. Sexual language and imagery is not appropriate for any conference
        venue, including talks, workshops, parties, Twitter and other online
        media. Conference participants violating these rules may be sanctioned
        or expelled from the conference without a refund at the discretion of
        the conference organisers.
      </p>

      <h3>THE LESS QUICK VERSION</h3>
      <p>
        Harassment includes offensive verbal comments related to gender, gender
        identity and expression, age, sexual orientation, disability, physical
        appearance, body size, race, ethnicity, religion, technology choices,
        sexual images in public spaces, deliberate intimidation, stalking,
        following, harassing photography or recording, sustained disruption of
        talks or other events, inappropriate physical contact, and unwelcome
        sexual attention.
      </p>
      <p>
        Participants asked to stop any harassing behavior are expected to comply
        immediately. Sponsors are also subject to the anti-harassment policy. In
        particular, sponsors should not use sexualised images, activities, or
        other material. Booth staff (including volunteers) should not use
        sexualised clothing/uniforms/costumes, or otherwise create a sexualised
        environment. If a participant engages in harassing behavior, the
        conference organisers may take any action they deem appropriate,
        including warning the offender or expulsion from the conference with no
        refund.
      </p>
      <p>
        If you are being harassed, notice that someone else is being harassed,
        or have any other concerns, please contact a member of conference staff
        immediately. Conference staff can be identified as they'll be wearing
        branded clothing and/or badges. Conference staff will be happy to help
        participants contact hotel/venue security or local law enforcement,
        provide escorts, or otherwise assist those experiencing harassment to
        feel safe for the duration of the conference. We value your attendance.
      </p>
      <p>
        We expect participants to follow these rules at conference and workshop
        venues and conference-related social events.
      </p>

      <h3>MORE INFO</h3>
      <p>
        For more information, please check the original version:
        http://confcodeofconduct.com.
      </p>

      <h3>NEED HELP?</h3>
      <p>
        Email us at <a href="mailto:hello@graphcms.com">hello@graphcms.com</a>.
      </p>
    </Page>
  </Layout>
)

export default ConductPage
