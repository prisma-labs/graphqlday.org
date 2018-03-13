import { Component } from 'react'
import { Subscribe } from 'unstated'
import styled from 'styled-components'

import { eventbriteLink, eventbriteLinkWithCombi } from '../utils/config'
import { muteText } from 'utils/colors'
import ModalContainer from '../containers/ModalContainer'
import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'
import SectionContent from 'components/SectionContent'
import SectionSubtitleDesc from 'components/SectionSubtitleDesc'
import Ticket from 'components/Ticket'
import TicketsRow from 'components/TicketsRow'
import BigSwitch from 'components/BigSwitch'

const onlyTicketData = [
  {
    price: '59€',
    name: 'Early Bird',
    desc: 'Until 21st of March',
    disabled: false,
    href: eventbriteLink,
  },
  {
    price: '69€',
    name: 'Regular',
    desc: 'Until 13th of April',
    disabled: true,
    href: eventbriteLink,
  },
  {
    price: '89€',
    name: 'Late Bird',
    desc: 'Until the very last minute',
    disabled: true,
    href: eventbriteLink,
  },
]

const withConfTicketData = [
  {
    price: '330€',
    name: 'Early Bird',
    desc: 'Until 21st of March',
    disabled: false,
    href: eventbriteLinkWithCombi,
  },
  {
    price: '335€',
    name: 'Regular',
    desc: 'Until 13th of April',
    disabled: true,
    href: eventbriteLinkWithCombi,
  },
  {
    price: '345€',
    name: 'Late Bird',
    desc: 'Until the very last minute',
    disabled: true,
    href: eventbriteLinkWithCombi,
  },
]

class GetYourTicket extends Component {
  state = {
    selectedOption: 'only',
  }

  render() {
    const ticketData =
      this.state.selectedOption === 'only' ? onlyTicketData : withConfTicketData
    return (
      <Wrapper id="get-your-ticket">
        <Container>
          <SectionContent>
            <Headings>
              <SectionTitle>Get your tickets!</SectionTitle>
              <SectionSubtitleDesc>
                Tickets for GraphQL Day include entry to the conference, the
                workshop and some delicious eats! Tickets for GraphQL Day
                qualify you for a discount for GraphQL Europe!
              </SectionSubtitleDesc>
            </Headings>

            <SwitchWrapper>
              <BigSwitch
                name="ticket-type"
                onChange={e =>
                  this.setState({
                    selectedOption: e.target.value,
                  })
                }
                selected={this.state.selectedOption}
                items={[
                  {
                    value: 'only',
                    label: 'Only GraphQL Day',
                  },
                  {
                    value: 'with-conf',
                    label: 'GraphQL Day + GraphQL Europe',
                    wrapperProps: { style: { maxWidth: 180 } },
                  },
                ]}
              />
            </SwitchWrapper>

            <Subscribe to={[ModalContainer]}>
              {modal => (
                <TicketsRow.Row>
                  {ticketData.map((ticket, i) => {
                    return (
                      <TicketsRow.Item key={i}>
                        <Ticket
                          omniStyle={true}
                          price={ticket.price}
                          name={ticket.name}
                          desc={ticket.desc}
                          href={ticket.href}
                          onSelect={() => ticket.disabled || modal.show()}
                          disabled={ticket.disabled}
                        />
                      </TicketsRow.Item>
                    )
                  })}
                </TicketsRow.Row>
              )}
            </Subscribe>

            <SideNote>
              Are you a student - or do you want to attend but just don’t have
              the means? We have set aside a number of free tickets to include
              the community.{' '}
              <a href="mailto:support@graphql-europe.org">Send us an email</a>{' '}
              and let us know why you should come. The application deadline is{' '}
              <b>March 26</b>, winners will be announced a few days later.
            </SideNote>
          </SectionContent>
        </Container>
      </Wrapper>
    )
  }
}

export default GetYourTicket

const Wrapper = styled.section``

const Headings = styled.div`
  text-align: center;
`

const SwitchWrapper = styled.div`
  margin: 35px 0;
  display: flex;
  justify-content: center;
`

const SideNote = styled.p`
  padding: 0;
  margin: 50px auto 0 auto;
  text-align: center;
  line-height: 1.6;
  max-width: 850px;
  color: ${muteText};
`
