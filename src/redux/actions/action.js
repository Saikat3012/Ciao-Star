import { CHANGE_THEME, USER_TYPE_CHANGE } from './types'

export const changeTheme = ( theme ) => {
    return {
        type: CHANGE_THEME,
        data: theme
    }
}
export const setUserType = ( userType ) => {
    return {
        type: USER_TYPE_CHANGE,
        data: userType
    }
}