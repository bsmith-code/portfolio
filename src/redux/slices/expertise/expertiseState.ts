export interface IExpertise {
  name: string
  skills: { name: string; icon: string }[]
}

export type IExpertiseState = IExpertise[]

export const initialState: IExpertiseState = [
  {
    name: 'Client Side',
    skills: [
      { name: 'React & React Native', icon: 'devicon-react-original' },
      { name: 'Redux', icon: 'devicon-redux-original' },
      { name: 'Vue & Vuex', icon: 'devicon-vuejs-plain' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'Socket.io', icon: 'devicon-socketio-original' },
      { name: 'Next.js', icon: 'devicon-nextjs-original' },
      { name: 'Nuxt.js', icon: 'devicon-nuxtjs-plain' },
      { name: 'NPM', icon: 'devicon-npm-original-wordmark' },
      { name: 'Yarn', icon: 'devicon-yarn-plain' },
      { name: 'Axios', icon: 'icon_axios.svg' },
      { name: 'Webpack', icon: 'devicon-webpack-plain' },
      { name: 'Babel', icon: 'devicon-babel-plain' }
    ]
  },
  {
    name: 'Server Side & DBs',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Express', icon: 'devicon-express-original' },
      { name: 'Socket.io', icon: 'devicon-socketio-original' },
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
      { name: 'Jenkins', icon: 'devicon-jenkins-line' },
      { name: 'Digital Ocean', icon: 'devicon-digitalocean-plain' }
    ]
  },
  {
    name: 'Version Control',
    skills: [
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'GitLab', icon: 'devicon-gitlab-plain' },
      { name: 'Bitbucket', icon: 'devicon-bitbucket-original' },
      { name: 'Sourcetree', icon: 'devicon-sourcetree-original' }
    ]
  }
]
