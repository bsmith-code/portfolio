import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LayoutDefault } from 'layouts/LayoutDefault'

import { ViewAbout } from 'views/ViewAbout'
import { ViewContact } from 'views/ViewContact'
import { ViewExperience } from 'views/ViewExperience'
import { ViewExpertise } from 'views/ViewExpertise'
import { ViewHome } from 'views/ViewHome'
import { ViewProjects } from 'views/ViewProjects'
import { ViewStudy } from 'views/ViewStudy'

import {
  ROUTE_PATH_ABOUT,
  ROUTE_PATH_CONTACT,
  ROUTE_PATH_EXPERIENCE,
  ROUTE_PATH_EXPERTISE,
  ROUTE_PATH_PROJECTS,
  ROUTE_PATH_STUDY
} from 'constants/index'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<ViewHome />} />
        <Route path={ROUTE_PATH_ABOUT} element={<ViewAbout />} />
        <Route path={ROUTE_PATH_EXPERTISE} element={<ViewExpertise />} />
        <Route path={ROUTE_PATH_EXPERIENCE} element={<ViewExperience />} />
        <Route path={ROUTE_PATH_PROJECTS} element={<ViewProjects />} />
        <Route path={ROUTE_PATH_CONTACT} element={<ViewContact />} />
        <Route path={ROUTE_PATH_STUDY} element={<ViewStudy />} />
      </Route>

      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
