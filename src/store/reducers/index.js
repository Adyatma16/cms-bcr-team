import { combineReducers } from "redux"
import { auth } from "./reducer-authentication"

const rootReducers = combineReducers({
    auth
})
export default rootReducers