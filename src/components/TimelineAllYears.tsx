import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { useAppSelector } from '../store'

interface IProps {
  selectedYear: number
  setSelectedYear: Dispatch<SetStateAction<number>>
}

const TimelineAllYears = ({
  selectedYear,
  setSelectedYear
}: IProps): JSX.Element => {
  // Extract years as numbers from state
  const { allYears } = useAppSelector(state => ({
    allYears: Object.keys(state.timeline).map(year => parseInt(year))
  }))

  return (
    <Wrapper>
      {allYears.map(year => (
        <YearBtn
          key={`allYears-${year}`}
          onClick={() => setSelectedYear(year)}
          className={[selectedYear === year ? 'active' : '']}
        >
          {year}
        </YearBtn>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media screen and (min-width: 767px) {
    border-top: 1px solid var(--blue);
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`
const YearBtn = styled.button`
  width: 100%;
  text-align: center;
  padding: 15px;
  cursor: pointer;
  border-top: 1px solid var(--blue);
  background: var(--white);
  color: var(--blue);
  transition: all 0.2s ease;
  font-size: ${rem(14)};
  &.active {
    background: var(--blue);
    color: var(--white);
  }
  &:hover {
    background: var(--blue);
    color: var(--white);
  }
  &:before {
    @media screen and (min-width: 767px) {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 1px;
      background: rgba(255, 255, 255, 0.7);
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.2),
        rgba(255, 255, 255, 1)
      );
      z-index: -1;
    }
  }
  @media screen and (min-width: 767px) {
    width: 150px;
    border-top: none;
  }
`

export default TimelineAllYears
