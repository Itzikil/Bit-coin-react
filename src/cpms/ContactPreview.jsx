import { Link } from "react-router-dom"

export function ContactPreview({ contact }) {
    return (
        <section className="contact-preview flex" >
            <Link to={`/contact/${contact._id}`} className="contact-preview flex align-center">
            <img src={contact.imgUrl} alt="" />
            <h1>{contact.name}</h1>
            </Link>
        </section>
    )
}