import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { DepositeCoins } from "../cpms/depositeCoins"
import { PreviousTransfer } from "../cpms/previousTransfer"
import { bitcoinService } from "../services/bitcoin.service"
import { contactService } from "../services/contact.service"

export const HomePage = () => {

    const loggedInUser = useSelector(state => state.userModule.loggedInUser)
    const moves = useSelector(state => state.userModule.moves)
    const [depositeCoins, setdDepositeCoins] = useState(false)
    const [bitcoinRate, setBitcoinRate] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        loggedInUser?.name ? onBitcoinRate() : navigate('/signup')
    }, [])

    // useEffect(() => {
    //     // loggedInUser = loggedInUser
    //     console.log('change');
    // }, [depositeCoins])

    const onBitcoinRate = async () => {
        const bitcoinRate = await bitcoinService.getRate(loggedInUser?.coins)
        setBitcoinRate(bitcoinRate)
    }


    const toggleDeposit = () => {
        setdDepositeCoins(!depositeCoins)
    }

    if (!loggedInUser) return <div>Loading...</div>
    return (
        <section className="home-page flex column">
            <button onClick={toggleDeposit} className='deposit-btn'>Deposite</button>
            {depositeCoins && <DepositeCoins depositeCoins={depositeCoins} toggleDeposit={toggleDeposit} />}
            <h2>Hello {loggedInUser.name}</h2>
            <img src={loggedInUser.imgUrl} alt="user" className="user-image" />
            <p className="xl-font">₿{loggedInUser.coins}</p>
            {bitcoinRate ? <p>${bitcoinRate?.toLocaleString()}</p> :
             <iframe src="https://giphy.com/embed/3owzW5c1tPq63MPmWk" title="bitRate" width="300" height="150" frameBorder="0" allowFullScreen></iframe>}
            <PreviousTransfer moves={moves}/>
        </section>
    )
}
