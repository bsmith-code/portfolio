export interface ICompany {
  url: string
  logo: string
  name: string
  position: string
  startDate: string
  endDate: string
}

export type IExperienceState = ICompany[]

export const initialState: IExperienceState = [
  {
    url: '//precisionhawk.com',
    logo: '',
    name: 'PrecisionHawk',
    position: 'Senior Software Developer',
    startDate: '9-13-2021',
    endDate: 'Present'
  },
  {
    url: '//ine.com',
    logo: 'ine.svg',
    name: 'Internetwork Expert',
    position: 'Senior Javascript Develper',
    startDate: '07-09-2019',
    endDate: '09-10-2021'
  },
  {
    url: '//atlanticbt.com',
    logo: 'atlanticbt.svg',
    name: 'AtlanticBT',
    position: 'Javascript Developer',
    startDate: '02-27-2017',
    endDate: '07-03-2019'
  },
  {
    url: '#',
    logo: 'medsign.png',
    name: 'MedSign',
    position: 'Javascript Developer',
    startDate: '08-01-2016',
    endDate: '02-24-2017'
  },
  {
    url: '//theedigital.com',
    logo: '',
    name: 'Thee Digital',
    position: 'Front End Developer',
    startDate: '05-02-2016',
    endDate: '07-29-2016'
  },
  {
    url: '//kruhu.com',
    logo: 'kruhu.svg',
    name: 'Kruhu',
    position: 'Front End Developer',
    startDate: '06-30-2014',
    endDate: '04-15-2016'
  },
  {
    url: '#',
    logo: 'pilot.jpg',
    name: 'Pilot Design Co.',
    position: 'Front End Developer',
    startDate: '06-10-2013',
    endDate: '06-30-2014'
  },
  {
    url: '#',
    logo: 'asn.png',
    name: 'ActionSportsNow',
    position: 'Front End Developer, Database Manager',
    startDate: '09-01-2010',
    endDate: '06-07-2013'
  }
]
