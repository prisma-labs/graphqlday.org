import { Component } from 'react'
import { Subscribe } from 'unstated'
import styled from 'styled-components'

// import { eventbriteLink, eventbriteLinkWithCombi } from '../utils/config'
// import { muteText } from 'utils/colors'
import ModalContainer from '../containers/ModalContainer'
import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'
import SectionContent from 'components/SectionContent'
import SectionSubtitleDesc from 'components/SectionSubtitleDesc'
import Ticket from 'components/Ticket'
import TicketsRow from 'components/TicketsRow'
// import BigSwitch from 'components/BigSwitch'

const onlyTicketData = [
  {
    price: 'Coming Soon',
    name: 'Early Bird',
    desc: 'Sold out!',
    disabled: true,
    // href: eventbriteLink,
  },
  {
    price: 'Coming Soon',
    name: 'Regular',
    desc: 'Sold out!',
    disabled: true,
  },
  {
    price: 'Coming Soon',
    name: 'Late Bird',
    desc: 'See you next year!',
    disabled: true,
  },
]

const withConfTicketData = [
  {
    price: '$330',
    name: 'Early Bird',
    desc: 'Sales end!',
    disabled: true,
  },
  {
    price: '$335',
    name: 'Regular',
    desc: 'Sales end',
    disabled: true,
  },
  {
    price: '$345',
    name: 'Late Bird',
    desc: 'See you next year!',
    disabled: true,
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
                Tickets for GraphQL Day Toronto include entry to the conference,
                delicious eats, and reception!
              </SectionSubtitleDesc>
            </Headings>

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

// const SwitchWrapper = styled.div`
//   margin: 35px 0;
//   display: flex;
//   justify-content: center;
// `

// const SideNote = styled.p`
//   padding: 0;
//   margin: 50px auto 0 auto;
//   text-align: center;
//   line-height: 1.6;
//   max-width: 850px;
//   color: ${muteText};
// `
