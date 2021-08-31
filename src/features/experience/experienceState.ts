export interface ICompany {
  url: string
  logo: string
  name: string
}

export interface IExperienceState {
  companies: ICompany[]
}

export const initialState: IExperienceState = {
  companies: [
    { url: '//www.ine.com', logo: 'ine.svg', name: 'Internetwork Expert' },
    { url: '//www.atlanticbt.com', logo: 'atlanticbt.svg', name: 'AtlanticBT' },
    { url: '', logo: 'medsign.png', name: 'MedSign' },
    { url: '//www.kruhu.com', logo: 'kruhu.svg', name: 'Kruhu' },
    { url: '', logo: 'pilot.jpg', name: 'Pilot Design Co.' },
    { url: '', logo: 'asn.png', name: 'ActionSportsNow' }
  ]
}
