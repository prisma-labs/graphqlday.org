import styled from 'styled-components'

import Container from 'components/Container'
import SectionContent from 'components/SectionContent'
import SectionTitle from 'components/SectionTitle'
import { Grid, GridItem, LogoImage } from 'components/LogoGrid'

const Sponsors = () => (
  <Wrapper>
    <Container>
      <SectionContent style={{ paddingBottom: '2.5rem' }}>
        <SectionTitle>Sponsored by</SectionTitle>
        <Grid>
          <GridItem>
            <a href="https://www.mijndomein.nl/">
              <LogoImage src="/static/logos/mijndomein.png" alt="Mijndomein" />
            </a>
          </GridItem>
        </Grid>
      </SectionContent>
    </Container>
  </Wrapper>
)

export default Sponsors

const Wrapper = styled.section`
  text-align: center;
`
