import { CHANGE_THEME, USER_TYPE_CHANGE } from '../actions/types'
import { light, dark } from '../../theme'

const initialState = {
    theme: dark,
    userType: 'USER'
}

const appReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case CHANGE_THEME:
            return {
                ...state,
                theme: action.data
            }
        case USER_TYPE_CHANGE:
            return {
                ...state,
                userType: action.data
            }
    }
    return state
}

export default appReducer