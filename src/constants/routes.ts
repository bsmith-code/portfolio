export const ROUTE_PATH_ABOUT = '/about'
export const ROUTE_PATH_RESUME = '/assets/documents/resume.pdf'
export const ROUTE_PATH_CONTACT = '/contact'
export const ROUTE_PATH_EXPERTISE = '/expertise'
export const ROUTE_PATH_PORTFOLIO = '/portfolio'
export const ROUTE_PATH_EXPERIENCE = '/experience'

export const ROUTE_LABEL_ABOUT = 'About'
export const ROUTE_LABEL_RESUME = 'Resume'
export const ROUTE_LABEL_CONTACT = 'Contact'
export const ROUTE_LABEL_EXPERTISE = 'Expertise'
export const ROUTE_LABEL_PORTFOLIO = 'Portfolio'
export const ROUTE_LABEL_EXPERIENCE = 'Experience'

export const ROUTES_PUBLIC: {
  path: string
  label: string
  isAnchor?: boolean
}[] = [
  {
    path: ROUTE_PATH_ABOUT,
    label: ROUTE_LABEL_ABOUT
  },
  {
    path: ROUTE_PATH_EXPERTISE,
    label: ROUTE_LABEL_EXPERTISE
  },
  {
    path: ROUTE_PATH_EXPERIENCE,
    label: ROUTE_LABEL_EXPERIENCE
  },
  {
    path: ROUTE_PATH_CONTACT,
    label: ROUTE_LABEL_CONTACT
  }
  // {
  //   isAnchor: true,
  //   path: ROUTE_PATH_RESUME,
  //   label: ROUTE_LABEL_RESUME
  // }
]

export const ROUTES_PATH_TO_LABEL_MAP: Record<string, string> = {
  [ROUTE_PATH_ABOUT]: ROUTE_LABEL_ABOUT,
  [ROUTE_PATH_CONTACT]: ROUTE_LABEL_CONTACT,
  [ROUTE_PATH_EXPERTISE]: ROUTE_LABEL_EXPERTISE,
  [ROUTE_PATH_PORTFOLIO]: ROUTE_LABEL_PORTFOLIO,
  [ROUTE_PATH_EXPERIENCE]: ROUTE_LABEL_EXPERIENCE
}
