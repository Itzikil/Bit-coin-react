import { userService } from "../../services/user.service"

export function transferCoins(amount,contact) {
    return async (dispatch) => {
        await userService.transferCoins(amount ,contact)
        dispatch({ type: 'TRANSFER_COINS', amount })
    }
}

export function signup(name) {
    return async (dispatch) => {
         const user = await userService.signup(name)
        dispatch({ type: 'SIGNUP' , user})
    }
}

export function logout() {
    return (dispatch) => {
         userService.logout()
        dispatch({ type: 'LOGOUT'})
    }
}
