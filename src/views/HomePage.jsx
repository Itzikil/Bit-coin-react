import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import gsap from 'gsap'
import { DepositeCoins } from "../cpms/depositeCoins"
import { PreviousTransfer } from "../cpms/previousTransfer"
import { bitcoinService } from "../services/bitcoin.service"
import loader from '../assets/svg/loader.gif'

export const HomePage = () => {

    const loggedInUser = useSelector(state => state.userModule.loggedInUser)
    const moves = useSelector(state => state.userModule.moves)
    const [depositeCoins, setdDepositeCoins] = useState(false)
    const [bitcoinRate, setBitcoinRate] = useState()
    const [imgLoaded, setImgLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        loggedInUser?.name ? onBitcoinRate() : navigate('/signup')
    }, [])

    useEffect(() => {
        onBitcoinRate()
    }, [loggedInUser?.coins])

    const onBitcoinRate = async () => {
        const bitcoinRate = await bitcoinService.getRate(loggedInUser?.coins)
        setBitcoinRate(bitcoinRate)
    }

    const toggleDeposit = () => {
        setdDepositeCoins(!depositeCoins)
    }

    if (!loggedInUser) return <img src={loader} alt="loading" width={100} />
    return (
        <section className="home-page flex column">
            <button onClick={toggleDeposit} className='deposit-btn'>Deposite</button>
            {depositeCoins && <DepositeCoins depositeCoins={depositeCoins} toggleDeposit={toggleDeposit} />}
            <h2>Hello {loggedInUser.name}</h2>
            {imgLoaded ? '' : <img src={loader} alt="loading" width={100} />}
            <img src={loggedInUser.imgUrl} alt="user" className="user-image" onLoad={() => setImgLoaded(true)}
                style={imgLoaded ? { display: 'inline-block' } : { display: 'none' }} />
            <p className="xl-font">₿{loggedInUser.coins}</p>
            {bitcoinRate ? <p>${bitcoinRate?.toLocaleString()}</p> :
                <iframe src="https://giphy.com/embed/3owzW5c1tPq63MPmWk" title="bitRate" width="300" height="150" frameBorder="0" allowFullScreen></iframe>}
            <PreviousTransfer moves={moves} />
        </section>
    )
}
