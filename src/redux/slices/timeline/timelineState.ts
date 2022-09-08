export interface IYear {
  date: string
  title: string
  description: string
}

export interface ITimelineState {
  [key: number]: IYear[]
}

export const initialState: ITimelineState = {
  1989: [
    {
      date: 'April 29th, 1989',
      title: 'I arrived on Earth',
      description:
        'Shortly after I was born in Toledo, Ohio, my family moved to Wilmington, North Carolina where I would stay until 3rd Grade. I then resided in Cary, NC until College when I returned to Wilmington, NC. I currently live in Raleigh, North Carolina where I focus mainly on Javascript, React, Redux and Node App Development.'
    }
  ],
  2007: [
    {
      date: 'May 5th, 2007',
      title: 'Graduated High School',
      description:
        'In the summer of 2007, I graduated from Green Hope High School in Cary, NC with my eyes set upon an exciting and fruitful journey.'
    }
  ],
  2010: [
    {
      date: 'September 1st, 2010',
      title: 'Action Sports Now, LLC',
      description:
        'While in College, I received an internship as a database manager for a start up company called Action Sports Now. It was the largest network of action sports businesses on the web. My position as the database manager eventually morphed into a front end developer position as the company grew and reformed.'
    }
  ],
  2011: [
    {
      date: 'December 12th, 2011',
      title: 'Graduated College',
      description:
        "In the winter of 2011, I graduated from the University of North Carolina, Wilmington with a Bachelor's in Management of Information Systems. This degree focused on both computer science and business administration. At this moment, my internship at ASN became a full time position."
    }
  ],
  2013: [
    {
      date: 'June 10th, 2013',
      title: 'Pilot Design Company',
      description:
        'After 3 years at Action Sports Now, I decided to embark on my first entrepreneurial endeavor with a business partner to startup Pilot Design Company. We were a one-stop-shop for all things web which included server infrastructure, website hosting, database management, website and application development, SEO, marketing, web and print design, and so much more.'
    },
    {
      date: 'December 18th, 2013',
      title: 'Moved to Augusta, Georgia',
      description:
        'After 6 wonderful years in Wilmington, NC and without any solidified plans for the future, I decided to move in with my parents who relocated to Augusta, GA while I was in college. This was ultimately a move to save money while working for Pilot Design Company and preparing for my next endeavor.'
    }
  ],
  2014: [
    {
      date: 'June 30th, 2014',
      title: 'Kruhu - Award Winning Agency',
      description:
        'While still working with Pilot Design Company, my business partner and I decided to get full time positions to further our careers with teams of experts in our fields. I received a job at Kruhu as a Front End Developer and was mentored by the great Otis Richardson, a Senior Programmer and multi-linguist musician.'
    }
  ],
  2016: [
    {
      date: 'April 15th, 2016',
      title: 'Moved to Raleigh, North Carolina',
      description:
        'After 2 years in Augusta, GA, I decided it was time to make a move to the tech capital of the east where I could progress my career even further.'
    },
    {
      date: 'May 2nd, 2016',
      title: 'Thee Digital',
      description:
        'During my brief tenure at Thee Digital, I was approached by a startup company called MedSign to. I jumped on the opportunity to venture out of the agency realm and enter the world of product development.'
    },
    {
      date: 'August 1st, 2016',
      title: 'MedSign',
      description:
        'MedSign is an online patient registration application that allows practices to create reusable and user-friendly patient forms. MedSign solves the tedious process of manual data entry by digitizing the workflow for both patients and practice staff. As the Co-Founder and JavaScript Developer, I provided expertise on system architecture, design, implementation, testing, delivery, and operation of the application.'
    }
  ],
  2017: [
    {
      date: 'February 27th, 2017',
      title: 'Atlantic BT',
      description:
        "After MedSign's funding diminished and its revenue unable to support our families we mutually agreed to disband the endeavor. This is when I reached out to ABT for an open Front End Developer position and gladly accepted an offer. This position eventually morphed into a Javascript Developer position as we continued to receive javascript focused projects in our pipeline."
    }
  ],
  2019: [
    {
      date: 'July 9th, 2019',
      title: 'INE - Internetwork Expert',
      description: ''
    }
  ],
  2021: [
    {
      date: 'September 13th, 2021',
      title: 'PrecisionHawk',
      description: ''
    }
  ]
}
