import { storageService } from './storage.service'

export const userService = {
    getUser,
    addMove,
    signup,
    logout,
    transferCoins,
    depositeCoins,
    getMoves
}

const STORAGE_KEY = 'user'

function getUser() {
    return storageService.load(STORAGE_KEY) || null
}

function signup(name) {
    const user = {
        name: name,
        coins: 100,
        moves: [],
        imgUrl: `https://robohash.org/set_set5/${Math.random() + 20}.png`,
    }
    storageService.save(STORAGE_KEY, user)
    return Promise.resolve(user)
}

function addMove(contact, amount) {
    const move = {
        toId: contact._id,
        to: contact.name,
        at: new Date().getTime(),
        amount
    }
    const moves = storageService.load('move') || []
    moves.push(move)
    storageService.save('move', moves)
    return move
}

function logout() {
    storageService.save(STORAGE_KEY, null)
}

function transferCoins(amount, contact) {
    const user = getUser()
    if (amount > user.coins) {
        return Promise.reject()
    }

    const move = addMove(contact, amount)
    user.coins = user.coins - amount
    user.moves.push(move)
    storageService.save(STORAGE_KEY, user)
    return Promise.resolve()
}

function getMoves() {
    return getUser()?.moves
}

function depositeCoins(coins) {
    const user = getUser()
    user.coins = +user.coins + +coins
    storageService.save(STORAGE_KEY, user)
}