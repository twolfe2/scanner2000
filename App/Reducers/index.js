import { combineReducers } from 'redux'
import UPCReducer from './UPCReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  upc: UPCReducer
})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = ['login']
// OR put reducer keys that you DO want stored to persistence here (overrides blacklist)
// export const persistentStoreWhitelist = []
