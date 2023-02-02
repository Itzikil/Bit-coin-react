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
    }
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

  render() {
    const { contacts, filterBy } = this.state
    return (
      <section className='flex column contact-page gap15'>
        <div >
        <ContactFilter onChangeFilter={this.onChangeFilter} filterBy={filterBy} />
        <Link to={`/contact/edit`} className='btn add-btn'><p>+</p></Link>
        </div>
        <ContactList contacts={contacts} />
      </section>
    )
  }
}
