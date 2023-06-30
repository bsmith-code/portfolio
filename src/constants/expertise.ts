import { IExpertise } from 'types'

export const EXPERTISE: IExpertise[] = [
  {
    name: 'Front End',
    skills: [
      { name: 'React & React Native', icon: 'devicon-react-original' },
      { name: 'Redux', icon: 'devicon-redux-original' },
      { name: 'Vue & Vuex', icon: 'devicon-vuejs-plain' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'Socket.io', icon: 'devicon-socketio-original' }
    ]
  },
  {
    name: 'Back End',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Express', icon: 'devicon-express-original' },
      { name: 'Sequelize', icon: 'devicon-sequelize-plain' },
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
      { name: 'Postgresql', icon: 'devicon-postgresql-plain' }
    ]
  },
  {
    name: 'DevOps',
    skills: [
      { name: 'AWS', icon: 'devicon-amazonwebservices-original' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'Ubuntu', icon: 'devicon-ubuntu-plain' },
      { name: 'Linux', icon: 'devicon-linux-plain' },
      { name: 'Apache', icon: 'devicon-apache-plain' },
      { name: 'Nginx', icon: 'devicon-nginx-original' },
      { name: 'Jenkins', icon: 'devicon-jenkins-line' }
    ]
  }
]
