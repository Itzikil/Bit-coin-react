import { ContactPreview } from './ContactPreview'
import loader from '../assets/svg/loader.gif'
import { useState } from 'react'

export function ContactList({ contacts, changePage, contactPreview }) {
    const [contactsLoaded, setImgsLoaded] = useState(false)
    var imgsLoaded = []

    const loadedContacts = () => {
        imgsLoaded.push(1)
        if (imgsLoaded.length === contacts.length) setImgsLoaded(true)
    }

    return (
        <>
            <section className="contact-list flex column" style={contactsLoaded ? { display: 'flex' } : { display: 'none' }}>
                {contacts.map(contact =>
                    <ContactPreview
                        key={contact._id}
                        contact={contact}
                        changePage={changePage}
                        contactPreview={contactPreview}
                        loadedContacts={loadedContacts}
                    />
                )}
            </section>
            {!contactsLoaded ? <img src={loader} alt="loading" width={100} /> : ''}
        </>
    )
}