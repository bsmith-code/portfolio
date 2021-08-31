export interface IExpertise {
  name: string
  skills: { name: string; icon: string }[]
}

export interface IExpertiseState {
  expertise: IExpertise[]
}

export const initialState: IExpertiseState = {
  expertise: [
    {
      name: 'JavaScript',
      skills: [
        { name: 'React & React Native', icon: 'devicon-react-original' },
        { name: 'Redux', icon: 'devicon-redux-original' },
        { name: 'Vue', icon: 'devicon-vuejs-plain' },
        { name: 'Vuex', icon: 'devicon-vuejs-plain' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain' },
        { name: 'Express', icon: 'devicon-express-original' },
        { name: 'Socket.io', icon: 'icon_socket-io.svg' },
        { name: 'Axios', icon: 'icon_axios.svg' }
      ]
    }
  ]
}
