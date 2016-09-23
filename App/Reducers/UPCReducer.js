import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  "upcs":[
    {"product_name":"Lacroix Tangerine", "upc":"24463061163"}, 
    {"product_name":"ABC Sparkling water", "upc":"52000328660"}, 
    {"product_name":"Luke's cheddar chips","upc":"84114112729"},
    {"product_name":"Altoids","upc":"0022000159335"},
    {"product_name":"Blue Diamond Almonds","upc":"0041570054420"},
  ]
})

const addItem = (state, action) => 
  state.merge({upcs: state.upcs.concat({product_name: action.product_name, upc: action.upc})})


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.ADD_ITEM]: addItem
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
