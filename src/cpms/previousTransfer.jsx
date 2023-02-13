import { useState } from "react"
import { NavLink } from "react-router-dom"
import { contactService } from "../services/contact.service"


export const PreviousTransfer = ({ moves }) => {
    const [currContact, setcurrContact] = useState()

    const getContact = async (contactId) => {
        const contact = await contactService.getContactById(contactId)
        setcurrContact(contact)
    }
    return (
        <>
            {!!moves?.length ?
                <section className="previous-transfer-container">
                    <h2 >Your previous transfers</h2>
                    <ul className='previous-transfer flex column gap15'>
                        {moves.map((move, idx) =>
                            // {getContact(move.toId)}
                            <li key={move.at} className="flex space">
                                <NavLink to={`/contact/${move.toId}`}>
                                    {currContact ? <img src={currContact} alt="contact" className="contactImg" /> :
                                        <p className="contactImg">{move.to.slice(0, 2)}</p>}
                                </NavLink>
                                <div className="flex column gap10">
                                    <NavLink to={`/contact/${move.toId}`}><p className="bold">{move.to}</p></NavLink>
                                    <p className="sm-font gray">{new Date(move.at).toLocaleString()}</p>
                                </div>
                                <p className="md-font">₿{move.amount}</p>
                            </li>
                        )
                        }
                    </ul>
                </section> : <h2 className="previous-transfer text-center">You have no previous transfers</h2>
            }
        </>
    )
}