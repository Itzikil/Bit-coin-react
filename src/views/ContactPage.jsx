import { Component } from 'react'
import { ContactList } from '../cpms/ContactList'
import { ContactFilter } from '../cpms/ContactFilter'

import { contactService } from '../services/contact.service'
import { Link } from 'react-router-dom'

export class ContactPage extends Component {

  state = {
    contacts: [],
    filterBy: {
      term: ''
    },
    contact: null
  }

  componentDidMount() {
    this.loadContacts()
  }

  loadContacts = async () => {
    try {
      const contacts = await contactService.getContacts(this.state.filterBy)
      this.setState({ contacts })
    } catch (err) {
      console.log('err:', err)
    }
  }

  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts)
  }
  contactPreview = (contact) => {
    this.setState({ contact })
  }

  render() {
    const { contacts, filterBy, contact } = this.state
    if (!contacts?.length) return <div>Loading...</div>
    return (
      <section className='flex column contact-page gap15 relative'>
        <ContactFilter onChangeFilter={this.onChangeFilter} filterBy={filterBy} />
        <ContactList contacts={contacts} contactPreview={this.contactPreview} />
        {contact &&
          <div className='contact-peak flex align-center column gap5'>
            <img src={contact.imgUrl} alt="contact" />
            <h3>{contact.name}</h3>
          </div>
        }
        <Link to={`/contact/edit`} className='btn add-btn'><p>+</p></Link>
      </section>
    )
  }
}
