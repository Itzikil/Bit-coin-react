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
        if (isNaN(amount)) return console.log('Only valid numbers')
        setCoinsAmount(amount)
    }
    const closeModal = () => {
        toggleDeposit()
    }
    
    const deposit = (ev) => {
        ev.preventDefault()
        closeModal()
        if (!coinsAmount) return console.log('Only valid numbers')
        dispatch(addCoins(coinsAmount))
    }

    return (
        <section className={`deposite-container ${openModal ? 'open-container' : 'close-container'}`}>
                <button className="close-btn" onClick={closeModal}>X</button>
            <form onSubmit={deposit} className='flex column gap5'>
                <h3 className="m5">Deposite Bitcoins</h3>
                <input type="text" placeholder="amount" onChange={handleChange} />
                <button>Deposit</button>
            </form>
        </section >
    )
}