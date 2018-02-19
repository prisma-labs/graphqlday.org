import styled, { css } from 'styled-components'

import { mobile } from 'utils/media'
import { muteBlue } from 'utils/colors'
import ScheduleRow from 'components/ScheduleRow'
import SectionTitle from 'components/SectionTitle'
import Container from 'components/Container'

const scheduleList = [
  {
    title: 'Registration',
    description: 'Enjoy a hot coffe and some breakfast snacks',
    images: [
      {
        src: ['/static/coffee.svg', '/static/coffee@2x.svg'],
      },
    ],
    time: '08:30 - 09:30',
  },
  {
    title: 'Introduction to urql - A new GraphQL client for React ',
    description: 'Ken Wheeler',
    images: [
      {
        src: [
          '/static/speakers/speaker-1.jpg',
          '/static/speakers/speaker-1@2x.jpg',
        ],
      },
    ],
    time: '09:30 - 10:00',
  },
  {
    title: 'The GraphQL Ecosystem',
    description: 'Kim Brandwijk',
    images: [
      {
        src: [
          '/static/speakers/speaker-2.jpg',
          '/static/speakers/speaker-2@2x.jpg',
        ],
      },
    ],
    time: '10:00 - 10:30',
  },
  {
    title: 'Coffe break',
    description: '',
    images: [
      {
        src: ['/static/coffee.svg', '/static/coffee@2x.svg'],
      },
    ],
    time: '10:30 - 11:00',
  },
  {
    title: 'State Management in React Apps with Apollo Client',
    description: 'Sara Vieira',
    images: [
      {
        src: [
          '/static/speakers/speaker-3.jpg',
          '/static/speakers/speaker-3@2x.jpg',
        ],
      },
    ],
    time: '11:00 - 11:30',
  },
  {
    title: 'Building a GraphQL API Over Your Existing Backends',
    description: 'Martijn Walraven',
    images: [
      {
        src: [
          '/static/speakers/speaker-4.jpg',
          '/static/speakers/speaker-4@2x.jpg',
        ],
      },
    ],
    time: '11:30 - 12:00',
  },
  {
    title: 'Lunch',
    description: '',
    images: [
      {
        src: ['/static/cutlery.svg', '/static/cutlery@2x.svg'],
      },
    ],
    time: '12:00 - 13:00',
  },
  {
    title: 'Lightning Talk',
    description: 'Manjula Dube',
    images: [
      {
        src: [
          '/static/speakers/speaker-5.jpg',
          '/static/speakers/speaker-5@2x.jpg',
        ],
      },
    ],
    time: '13:00 - 13:15',
  },
  {
    title: 'Lightning Talk',
    description: 'Ivan Goncharov',
    images: [
      {
        src: [
          '/static/speakers/speaker-6.jpg',
          '/static/speakers/speaker-6@2x.jpg',
        ],
      },
    ],
    time: '13:15 - 13:30',
  },
  {
    title: 'Coffe break',
    description: '',
    images: [
      {
        src: ['/static/coffee.svg', '/static/coffee@2x.svg'],
      },
    ],
    time: '13:30 - 14:00',
  },
  {
    title: 'Workshop: Fullstack GraphQL',
    description: 'Nikolas Burk & Speakers',
    images: [
      {
        src: [
          '/static/speakers/speaker-7.jpg',
          '/static/speakers/speaker-7@2x.jpg',
        ],
      },
    ],
    time: '14:00 - 17:00',
  },
]

const listLength = scheduleList.length
const half = Math.round(scheduleList.length / 2)
const firstColumn = scheduleList.slice(0, half)
const secondColumn = scheduleList.slice(half, listLength)

export default () => (
  <Wrapper>
    <Container>
      <SectionTitle>Schedule</SectionTitle>
      <ColumnsWrapper>
        <Column>
          {firstColumn.map((row, i) => <ScheduleRow key={i} {...row} />)}
        </Column>
        <Column>
          {secondColumn.map((row, i) => <ScheduleRow key={i} {...row} />)}
        </Column>
      </ColumnsWrapper>
    </Container>
  </Wrapper>
)

const Wrapper = styled.div`
  padding-top: 80px;
  border-top: 1px solid ${muteBlue};
`

const ColumnsWrapper = styled.div`
  display: flex;

  ${mobile(css`
    flex-direction: column;
  `)};
`

const Column = styled.div`
  flex: 1 1 auto;
  margin-right: 130px;

  &:last-child {
    margin-right: 0;
  }

  ${mobile(css`
    margin-right: 0;
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }
  `)};
`
