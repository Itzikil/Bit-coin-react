import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts , changePage}) {
    if (!contacts) return <div>Loading...</div>
    return (
        <section className="contact-list flex column">
            {contacts.map(contact =>
                <ContactPreview 
                key={contact._id}
                contact={contact} 
                changePage={changePage}
                />
            )}
        </section>
    )
}