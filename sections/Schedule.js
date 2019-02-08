import styled, { css } from 'styled-components'

import { mobile } from 'utils/media'
import ScheduleRow from 'components/ScheduleRow'
import SectionTitle from 'components/SectionTitle'
import Container from 'components/Container'

const scheduleList = [
  {
    title: 'Breakfast & Registration',
    description: '',
    images: [
      {
        src: '/static/coffee.svg',
        icon: true,
      },
    ],
    time: '8:00AM - 9:00AM',
  },
  {
    title: 'Opening Remarks',
    description: '',
    images: [
      {
        src: '',
        icon: true,
      },
    ],
    time: '9:00AM',
  },
  {
    title: 'So you want to distribute your GraphQL schema?',
    description: 'Marc-Andre Giroux',
    images: [
      {
        src: [
          '/static/speakers/marc-andre.jpg',
          '/static/speakers/marc-andre@2x.jpg',
        ],
      },
    ],
    time: '9:10AM',
  },
  {
    title: 'Mocking and automocking for tests and storybooks',
    description: 'Chang Wang',
    images: [
      {
        src: ['/static/speakers/chang.png', '/static/speakers/chang@2x.png'],
      },
    ],
    time: '9:45AM',
  },
  {
    title: 'Managing TypeScript and GraphQL types in Node',
    description: 'Erica Pisani',
    images: [
      {
        src: ['/static/speakers/erica.jpg', '/static/speakers/erica@2x.jpg'],
      },
    ],
    time: '10:20AM',
  },
  {
    title: 'Break',
    description: '',
    images: [
      {
        src: '/static/coffee.svg',
        icon: true,
      },
    ],
    time: '10:30AM',
  },
  {
    title: 'GraphQL Caching',
    description: 'Scott Walkinshaw',
    images: [
      {
        src: ['/static/speakers/scott.jpg', '/static/speakers/scott@2x.jpg'],
      },
    ],
    time: '11:00AM',
  },
  {
    title: 'Support unlimited customer experiences with GraphQL',
    description: 'Andrew Kumar & Bill Li',
    images: [
      {
        src: [
          '/static/speakers/andrew-bill.jpg',
          '/static/speakers/andrew-bill@2x.jpg',
        ],
      },
    ],
    time: '11:35AM',
  },
  {
    title: 'Lunch',
    description: '',
    images: [
      {
        src: '/static/cutlery.svg',
        icon: true,
      },
    ],
    time: '12:00PM',
  },
  {
    title: 'Building serverless applications with AWS AppSync',
    description: 'Antoine Genereux',
    images: [
      {
        src: [
          '/static/speakers/antoine.jpg',
          '/static/speakers/antoine@2x.jpg',
        ],
      },
    ],
    time: '1:00PM',
  },
  {
    title: 'Teaching GraphQL  —  lessons from a beginner',
    description: 'Leanne Shapton',
    images: [
      {
        src: ['/static/speakers/leanne.jpg', '/static/speakers/leanne@2x.jpg'],
      },
    ],
    time: '1:35PM',
  },
  {
    title:
      'How Air Canada is accelerating digital transformation using GraphQL',
    description: 'Suresh Subasinghe',
    images: [
      {
        src: ['/static/speakers/suresh.jpg', '/static/speakers/suresh@2x.jpg'],
      },
    ],
    time: '2:10PM',
  },
  {
    title: 'Break',
    description: '',
    images: [
      {
        src: '/static/coffee.svg',
        icon: true,
      },
    ],
    time: '2:20PM',
  },
  {
    title: 'Supercharge your schemas with custom directives',
    description: 'Ryan Chenkie',
    images: [
      {
        src: ['/static/speakers/ryan.jpg', '/static/speakers/ryan@2x.jpg'],
      },
    ],
    time: '3:00PM',
  },
  {
    title: 'From hell to GraphQL',
    description: 'Raj Singh and Rohit Ravikoti',
    images: [
      {
        src: [
          '/static/speakers/rohit-raj.jpg',
          '/static/speakers/rohit-raj@2x.jpg',
        ],
      },
    ],
    time: '3:30PM',
  },

  {
    title: 'Closing remarks & reception',
    description: '',
    time: '4:00PM - 6:00PM',
    images: [
      {
        src: '',
        icon: true,
      },
    ],
  },
]

const listLength = scheduleList.length
const half = Math.round(scheduleList.length / 2)
const firstColumn = scheduleList.slice(0, half)
const secondColumn = scheduleList.slice(half, listLength)

export default () => (
  <Wrapper>
    <Container>
      <SectionTitle id="schedule">Schedule</SectionTitle>
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
  padding-bottom: 80px;
`

const ColumnsWrapper = styled.div`
  display: flex;

  ${mobile(css`
    flex-direction: column;
  `)};
`

const Column = styled.div`
  width: 50%;
  flex: 1 1 auto;
  margin-right: 130px;

  &:last-child {
    margin-right: 0;
  }

  ${mobile(css`
    margin-right: 0;
    margin-bottom: 45px;
    width: auto;

    &:last-child {
      margin-bottom: 0;
    }
  `)};
`
