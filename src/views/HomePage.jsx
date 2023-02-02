import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { bitcoinService } from "../services/bitcoin.service"

export const HomePage = () => {

    const loggedInUser = useSelector(state => state.userModule.loggedInUser)
    const moves = useSelector(state => state.userModule.moves)
    const [bitcoinRate, setBitcoinRate] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        loggedInUser?.name ? onBitcoinRate() : navigate('/signup')
    }, [])

    const onBitcoinRate = async () => {
        const bitcoinRate = await bitcoinService.getRate(loggedInUser?.coins)
        setBitcoinRate(bitcoinRate)
    }
    console.log(moves);
    if (!loggedInUser) return <div>Loading...</div>
    return (
        <section className="home-page flex column">
            <h2>Hello {loggedInUser.name}</h2>
            <img src={loggedInUser.imgUrl} alt="" />
            <p>Coins: {loggedInUser.coins}</p>
            <p>BTC: {bitcoinRate}</p>
            <div>
                {!!moves.length &&
                    <section>
                        <h2 >Your previous transfers</h2>
                        <ul className='previous-transfer flex column gap15'>
                            {moves.map((move, idx) => {
                                return <li key={move.at}>
                                    <p><span>To:</span> {move.to}</p>
                                    <p><span>At:</span> {new Date(move.at).toLocaleString()}</p>
                                    <p><span>Coins:</span> {move.amount}</p>
                                </li>
                            })
                            }
                        </ul>
                    </section>
                }
            </div>
        </section>
    )
}
