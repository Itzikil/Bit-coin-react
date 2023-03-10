import { Link } from "react-router-dom"

export function ContactPreview({ contact, contactPreview ,loadedContacts}) {
    return (
        <section onMouseOver={() => contactPreview(contact)} onMouseOut={() => contactPreview()} className="contact-preview flex" >
            <Link to={`/contact/${contact._id}`} className="contact-preview flex align-center">
                <img src={contact.imgUrl} alt="contact" onLoad={loadedContacts}/>
                <h1>{contact.name}</h1>
            </Link>
        </section>
    )
}