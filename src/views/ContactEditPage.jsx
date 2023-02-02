import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { contactService } from '../services/contact.service'

export const ContactEditPage = () => {

  const [contact, setContact] = useState()
  const params = useParams()
  const navigate = useNavigate()

  console.log(params);

  useEffect(() => {
    loadContacts()
  }, [])

  const loadContacts = async () => {
    const contactId = params.id
    if (contactId) {
      const contact = await contactService.getContactById(contactId)
      setContact(contact)
    }

  }

  const handleChange = ({ target }) => {
    const field = target.name
    let value = target.value

    setContact(contact => ({  ...contact, [field]: value  }))
  }

  const onAddContact = async (ev) => {
    ev.preventDefault()
    try {
      await contactService.saveContact(contact)
      onBack()
    } catch (err) {
      console.log('err:', err)
    }
  }

  const deleteContact = () => {
    contactService.deleteContact(contact._id)
    onBack()
  }

  const onBack = () => {
    navigate('/contact')
  }

  if (!contact) return <div>Loading...</div>
  const { name, phone, email } = contact

  return (
    <section>
      <nav className='flex space'>
        <button onClick={onBack}>Back</button>
        <button onClick={deleteContact}>Delete</button>
      </nav>

      <form className='flex column align-center gap15' onSubmit={onAddContact}>
        <h2>{contact._id ? 'Edit Contact' : 'Add Contact'}</h2>
        <input type="text" onChange={handleChange} value={name} name="name" placeholder='name' />
        <input type="text" onChange={handleChange} value={phone} name="phone" placeholder='phone' />
        <input type="text" onChange={handleChange} value={email} name="email" placeholder='email' />
        <button className='btn update-btn'>{contact._id ? 'Update' : 'Add'}</button>
      </form>
    </section>
  )
}
