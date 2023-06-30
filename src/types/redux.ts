import store from 'redux/store'

export type TAppDispatch = typeof store.dispatch
export type IRootState = ReturnType<typeof store.getState>
