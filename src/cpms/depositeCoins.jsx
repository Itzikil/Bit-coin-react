import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addCoins } from '../store/actions/user.actions'

export const DepositeCoins = ({ depositeCoins, toggleDeposit }) => {
    const [openModal, setdDepositeModal] = useState(false)
    const [coinsAmount, setCoinsAmount] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        setdDepositeModal(depositeCoins)
    }, [depositeCoins])

    const handleChange = ({ target }) => {
        const amount = target.value
        setCoinsAmount(amount)
    }

    const deposit = (event) => {
        event.preventDefault()
        dispatch(addCoins(coinsAmount))
    }
    console.log(depositeCoins);
    return (
        <section className={openModal ? 'open-container deposite-container' : "close-container deposite-container"}>
            <form onSubmit={(event) => { deposit(event); toggleDeposit(event) }}>
                <h3>Deposite</h3>
                <input type="text" placeholder="amount" onChange={handleChange} />
                <button>Deposit</button>
            </form>
        </section>
    )
}