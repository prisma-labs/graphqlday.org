import styled, { css } from 'styled-components'

import { mobile } from 'utils/media'
import { muteBlue } from 'utils/colors'
import ScheduleRow from 'components/ScheduleRow'
import SectionTitle from 'components/SectionTitle'
import Container from 'components/Container'

const scheduleList = [
  {
    title: 'Talk 1',
    description: 'Ken Wheeler',
    images: [
      {
        src: [
          '/static/speakers/speaker-1.jpg',
          '/static/speakers/speaker-1@2x.jpg',
        ],
      },
    ],
  },
  {
    images: [
      {
        src: '/static/coffee.svg',
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
