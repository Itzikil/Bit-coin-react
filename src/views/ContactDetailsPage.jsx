import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { contactService } from '../services/contact.service'
import { transferCoins } from '../store/actions/user.actions'

export const ContactDetailsPage = () => {

    const [contact, setContact] = useState()
    const [transfer, setTransfer] = useState()
    const [previousTransfers, setpreviousTransfers] = useState()
    const moves = useSelector(state => state.userModule.moves)

    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadContact()
    }, [contact?.id])

    useEffect(() => {
        loadTransfers()
    }, [contact , moves])

    const loadContact = async () => {
        const contact = await contactService.getContactById(params.id)
        setContact(contact)
    }

    const handleChange = ({ target }) => {
        const transfer = target.value
        // setUsername(username => (  {username} ))
        setTransfer(transfer)
    }

    const onTransferCoins = (ev) => {
        if (isNaN(transfer)) return console.log('Only numbers')
        ev.preventDefault()
        dispatch(transferCoins(transfer, contact))
    }

    const loadTransfers = () => {
        console.log(moves);
        // console.log(contact);
        if (!contact) return
        const previousTransfers = moves?.filter(move => move.toId === contact._id)
        setpreviousTransfers(previousTransfers)
    }



    const onBack = () => {
        navigate('/contact')
    }
    console.log(previousTransfers);
    if (!contact) return <div>Loading...</div>
    return (
        <section className='contact-details flex column align-center'>
            <nav className='flex space align-center'>
                <button className='' onClick={onBack}>Back</button>
                <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
            </nav>
            <img src={contact.imgUrl} alt="contact image"/>
            <h1>{contact.name}</h1>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
            <form className='transfer-coins flex column gap15' onSubmit={onTransferCoins}>
                <h3>Transfer coins to {contact.name}</h3>
                <div className='flex gap15'>
                    <input type="text" placeholder='Amount' value={transfer} onChange={handleChange} />
                    <button>Transfer</button>
                </div>
            </form>
            <div className='previous-transfer'>
                <h3>Previous transfers</h3>
                {previousTransfers &&
                    <ul className='previous-transfer flex column gap15'>
                        {previousTransfers.map((move, idx) => {
                            return <li key={move.at}>
                                <p><span>At:</span> {new Date(move.at).toLocaleString()}</p>
                                <p><span>Amount:</span> ₿{move.amount}</p>
                            </li>
                        })
                        }
                    </ul>
                }
            </div>
        </section>
    )
}
