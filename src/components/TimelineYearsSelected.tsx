import { useAppSelector } from 'hooks/useRedux'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 75px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 767px) {
    flex-direction: row;
    align-items: stretch;
    flex-wrap: wrap;
    min-height: 600px;
    padding: 75px 0;
  }
`
const Event = styled.article`
  max-width: 450px;
  flex-basis: 450px;
  padding: 25px;
  margin: 0 0 25px 0;
  text-align: center;
  background: #fff;
  box-shadow: 0px 0px 34px -3px rgba(0, 0, 0, 0.5);
  &:last-child {
    margin: 0;
  }
  @media screen and (min-width: 767px) {
    margin: 0 25px 0 0;
  }
`
const EventDate = styled.span`
  background: #7ebaeb;
  color: #fff;
  padding: 10px 25px;
  line-height: 1;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
  margin: 0 0 25px 0;
`
const EventTitle = styled.h4`
  font-size: 24px;
  font-weight: 300;
  line-height: 1.3;
`
const EventDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
`
const Separator = styled.span`
  display: inline-block;
  height: 1px;
  width: 100px;
  background: #7ebaeb;
  margin: 25px 0;
`

interface IProps {
  selectedYear: number
}

const TimelineSelectedYear = ({ selectedYear }: IProps) => {
  // Extract the selected year events from state
  const { selectedYearEvents } = useAppSelector(state => ({
    selectedYearEvents: state.timeline[selectedYear]
  }))

  return (
    <Wrapper>
      {selectedYearEvents.map(({ date, title, description }) => (
        <Event key={`event-${title}`}>
          <EventDate>{date}</EventDate>
          <EventTitle>{title}</EventTitle>
          <Separator />
          <EventDescription>{description}</EventDescription>
        </Event>
      ))}
    </Wrapper>
  )
}

export default TimelineSelectedYear
