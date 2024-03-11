import { IExperienceCompany } from 'types/experience.types'

export const EXPERIENCE: IExperienceCompany[] = [
  {
    url: '//olivertechnology.com',
    logo: 'company_oliver.svg',
    name: 'Oliver.',
    position: 'Senior Software Engineer',
    startDate: '2023-12-13',
    endDate: '2024-03-09'
  },
  {
    url: '//precisionhawk.com',
    logo: 'company_ph.svg',
    name: 'PrecisionHawk',
    position: 'Senior Software Developer',
    startDate: '2021-09-13',
    endDate: '2023-10-05',
    demos: [
      {
        title: 'Bulk edit, asset details, compare view',
        video: 'ph_bulk-edit.mp4'
      },
      {
        title: 'Map, layers, tagging',
        video: 'ph_map.mp4'
      },
      {
        title: 'Login, overview, projects',
        video: 'ph_overview.mp4'
      }
    ]
  },
  {
    url: '//ine.com',
    logo: 'company_ine.svg',
    name: 'Internetwork Expert',
    position: 'Senior Javascript Developer',
    startDate: '2019-07-09',
    endDate: '2021-09-10'
  },
  {
    url: '//atlanticbt.com',
    logo: 'company_atlanticbt.svg',
    name: 'Atlantic BT',
    position: 'Frontend Developer, Javascript Developer',
    startDate: '2017-02-27',
    endDate: '2019-07-03'
  },
  {
    url: '#',
    logo: 'company_medsign.png',
    name: 'MedSign',
    position: 'Software Developer',
    startDate: '2016-08-01',
    endDate: '2017-02-24'
  },
  {
    url: '//theedigital.com',
    logo: 'company_thee-digital.png',
    name: 'Thee Digital',
    position: 'Frontend Developer',
    startDate: '2016-05-02',
    endDate: '2016-07-29'
  },
  {
    url: '//kruhu.com',
    logo: 'company_kruhu.svg',
    name: 'Kruhu',
    position: 'Frontend Developer',
    startDate: '2014-06-30',
    endDate: '2016-04-15'
  },
  {
    url: '#',
    logo: 'company_pilot-design.jpeg',
    name: 'Pilot Design Co.',
    position: 'Frontend Developer',
    startDate: '2013-06-10',
    endDate: '2014-06-30'
  },
  {
    url: '#',
    logo: 'company_asn.png',
    name: 'ActionSportsNow',
    position: 'Frontend Developer, Database Manager',
    startDate: '2010-09-01',
    endDate: '2013-06-07'
  }
]
