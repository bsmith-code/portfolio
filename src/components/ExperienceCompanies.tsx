import { MouseEvent, useState } from 'react'
import ReactPlayer from 'react-player'

import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import {
  Backdrop,
  Box,
  ButtonGroup,
  IconButton,
  Portal,
  Tooltip
} from '@mui/material'

import {
  ExperienceCompanyDate,
  ExperienceCompanyDuration,
  ExperienceCompanyLogoWrapper,
  ExperienceCompanyPosition,
  ExperienceCompanyWrapper
} from 'styles/components/experience.styles'

import { formatDate, getDuration } from 'helpers'

import { EXPERIENCE } from 'constants/index'

import { IExperienceCompany } from 'types'

interface IDemosProps {
  demos: IExperienceCompany['demos']
}
const ExperienceDemos = ({ demos = [] }: IDemosProps) => {
  const [currentVideo, setCurrentVideo] = useState('')

  const handlePlayVideo =
    (video: string) => (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      setCurrentVideo(video)
    }

  return demos.length ? (
    <>
      <ButtonGroup sx={{ mt: 1 }}>
        {demos.map(({ title, video }) => (
          <Tooltip key={`video-${video}`} title={title}>
            <IconButton onClick={handlePlayVideo(video)}>
              <OndemandVideoIcon />
            </IconButton>
          </Tooltip>
        ))}
      </ButtonGroup>

      <Portal>
        <Backdrop
          open={!!currentVideo}
          onClick={() => setCurrentVideo('')}
          sx={{ zIndex: 9999 }}
        >
          <ReactPlayer
            controls
            url={`assets/videos/${currentVideo}`}
            width="80%"
            height="80%"
          />
        </Backdrop>
      </Portal>
    </>
  ) : null
}

export const ExperienceCompanies = () => (
  <>
    {EXPERIENCE.map(
      ({ url, logo, name, position, startDate, endDate, demos = [] }) => (
        <ExperienceCompanyWrapper key={`company-${name}`}>
          <Box
            top={0}
            left={0}
            right={0}
            href={url}
            bottom={0}
            component="a"
            target="_blank"
            rel="noreferrer"
            position="absolute"
          />
          <ExperienceCompanyLogoWrapper>
            <img src={`assets/images/${logo}`} alt={name} />
          </ExperienceCompanyLogoWrapper>
          <ExperienceCompanyPosition>{position}</ExperienceCompanyPosition>
          <ExperienceCompanyDate>
            {formatDate(startDate)} - {formatDate(endDate)}
          </ExperienceCompanyDate>
          <ExperienceCompanyDuration>
            {getDuration({ startDate, endDate })}
          </ExperienceCompanyDuration>
          <ExperienceDemos demos={demos} />
        </ExperienceCompanyWrapper>
      )
    )}
  </>
)
