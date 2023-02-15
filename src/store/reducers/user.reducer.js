import { userService } from "../../services/user.service";

const INITIAL_STATE = {
    loggedInUser: userService.getUser(),
    moves: userService.getMoves()
}

export function userReducer(state = INITIAL_STATE, action) {
    const { loggedInUser, moves } = state
    switch (action.type) {
        case 'TRANSFER_COINS':
            return {
                ...state,
                loggedInUser: { ...loggedInUser, coins: loggedInUser.coins - action.amount },
                moves: [...userService.getMoves()],
            }
        case 'SIGNUP':
            return {
                ...state,
                loggedInUser: { ...action.user },
            }
        case 'LOGOUT':
            return {
                ...state,
                loggedInUser: null,
                moves: null,
            }
        case 'ADD_COINS':
            return {
                ...state,
                loggedInUser: { ...loggedInUser, coins: +loggedInUser?.coins + +action.coins },
            }
        default:
            return state;
    }
}