import styled from 'styled-components'
import { rem } from 'polished'

export const TimelineWrapper = styled.section`
  overflow: hidden;
  position: relative;
  @media screen and (min-width: 767px) {
    overflow: scroll;
  }
`

export const TimelineYearsWrapper = styled.div`
  @media screen and (min-width: 767px) {
    border-top: 1px solid var(--blue-sky);
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

export const TimelineYearsBtn = styled.button`
  width: 100%;
  text-align: center;
  padding: 15px;
  cursor: pointer;
  border-top: 1px solid var(--blue-sky);
  background: var(--white);
  color: var(--blue-sky);
  transition: all 0.2s ease;
  font-size: ${rem(14)};
  &.active {
    background: var(--blue-sky);
    color: var(--white);
  }
  &:hover {
    background: var(--blue-sky);
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

export const TimelineYearsActiveWrapper = styled.div`
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

export const TimelineYearsActiveEvent = styled.article`
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

export const TimelineYearsActiveEventDate = styled.span`
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

export const TimelineYearsActiveEventTitle = styled.h4`
  font-size: 24px;
  font-weight: 300;
  line-height: 1.3;
`

export const TimelineYearsActiveEventDesc = styled.p`
  font-size: 14px;
  line-height: 1.6;
`

export const TimelineYearsActiveEventDivider = styled.span`
  display: inline-block;
  height: 1px;
  width: 100px;
  background: #7ebaeb;
  margin: 25px 0;
`
