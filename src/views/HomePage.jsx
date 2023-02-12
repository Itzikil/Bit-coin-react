import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { bitcoinService } from "../services/bitcoin.service"
import { contactService } from "../services/contact.service"

export const HomePage = () => {

    const loggedInUser = useSelector(state => state.userModule.loggedInUser)
    const moves = useSelector(state => state.userModule.moves)
    const [bitcoinRate, setBitcoinRate] = useState()
    const [currContact, setcurrContact] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        loggedInUser?.name ? onBitcoinRate() : navigate('/signup')
    }, [])

    const onBitcoinRate = async () => {
        const bitcoinRate = await bitcoinService.getRate(loggedInUser?.coins)
        setBitcoinRate(bitcoinRate)
    }

    const getContact = async (contactId) => {
        const contact = await contactService.getContactById(contactId)
        setcurrContact(contact)
    }

    if (!loggedInUser) return <div>Loading...</div>
    return (
        <section className="home-page flex column">
            <h2>Hello {loggedInUser.name}</h2>
            <img src={loggedInUser.imgUrl} alt="user" className="user-image"/>
            <p className="xl-font">₿{loggedInUser.coins}</p>
            <p>${bitcoinRate?.toLocaleString()}</p>
                {!!moves?.length ?
                    <section className="previous-transfer-container">
                        <h2 >Your previous transfers</h2>
                        <ul className='previous-transfer flex column gap15'>
                            {moves.map((move, idx) => {
                                // { getContact(move.toId) }
                                return <li key={move.at} className="flex space">
                                    <NavLink to={`/contact/${move.toId}`}>
                                        {currContact ? <img src={currContact} alt="contact" className="contactImg"/> :<p className="contactImg">{move.to.slice(0,2)}</p>}
                                        </NavLink>
                                    <div className="flex column gap10">
                                        <NavLink to={`/contact/${move.toId}`}><p className="bold">{move.to}</p></NavLink>
                                        <p className="sm-font gray">{new Date(move.at).toLocaleString()}</p>
                                    </div>
                                    <p className="md-font">₿{move.amount}</p>
                                </li>
                            })
                            }
                        </ul>
                    </section> : <h2 className="previous-transfer text-center">You have no previous transfers</h2>
                }
        </section>
    )
}
