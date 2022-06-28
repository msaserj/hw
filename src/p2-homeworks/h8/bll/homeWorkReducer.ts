import {UserType} from "../HW8";


type ActionType = {type: 'sort', payload: 'up'|'down'} | {type: 'check', payload: number}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const newState = [...state].sort((a, b) => a.age - b.age)
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age >= action.payload)
        }
        default: return state
    }
}