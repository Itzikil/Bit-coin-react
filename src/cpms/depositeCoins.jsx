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
    const closeModal = () => {
        toggleDeposit()
    }
    
    const deposit = (ev) => {
        ev.preventDefault()
        closeModal()
        dispatch(addCoins(coinsAmount))
    }

    return (
        <section className={`deposite-container ${openModal ? 'open-container' : 'close-container'}`}>
            <form onSubmit={deposit}>
                <button className="close-btn" onClick={closeModal}>X</button>
                <h3 className="m5">Deposite Bitcoins</h3>
                <input type="text" placeholder="amount" onChange={handleChange} />
                <button>Deposit</button>
            </form>
        </section >
    )
}