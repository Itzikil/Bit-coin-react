import { userService } from "../../services/user.service";

const INITIAL_STATE = {
    loggedInUser: userService.getUser(),
    moves : userService.getMoves()
}

export function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'TRANSFER_COINS':
            const { loggedInUser ,moves } = state
            return {
                ...state,
                loggedInUser: { ...loggedInUser, coins: loggedInUser.coins - action.amount },
                moves : [...userService.getMoves()],
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
            }
        default:
            return state;
    }
}