import { storageService } from "./storage.service"

export const contactService = {
    getContacts,
    getContactById,
    deleteContact,
    saveContact,
    getEmptyContact
}
const storageKey = 'contact'

const contacts = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ochoa Hydes",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "imgUrl": `https://robohash.org/set_set5/1.png`
    },
    {
        "_id": "5a5664025f6ae9aa24a99fde",
        "name": "Hallie Mcleans",
        "email": "halliemclean@renovize.com",
        "phone": "+1 (948) 464-2888",
        "imgUrl": `https://robohash.org/set_set5/2.png`
    },
    {
        "_id": "5a56640252d6acddd183d319",
        "name": "Parsons Norris",
        "email": "parsonsnorris@renovize.com",
        "phone": "+1 (958) 502-3495",
        "imgUrl": `https://robohash.org/set_set5/3.png`
    },
    {
        "_id": "5a566402ed1cf349f0b47b4d",
        "name": "Rachel Lowe",
        "email": "rachellowe@renovize.com",
        "phone": "+1 (911) 475-2312",
        "imgUrl": `https://robohash.org/set_set5/4.png`
    },
    {
        "_id": "5a566402abce24c6bfe4699d",
        "name": "Dominique Soto",
        "email": "dominiquesoto@renovize.com",
        "phone": "+1 (807) 551-3258",
        "imgUrl": `https://robohash.org/set_set5/5.png`
    },
    {
        "_id": "5a566402a6499c1d4da9220a",
        "name": "Shana Pope",
        "email": "shanapope@renovize.com",
        "phone": "+1 (970) 527-3082",
        "imgUrl": `https://robohash.org/set_set5/6.png`
    },
    {
        "_id": "5a566402f90ae30e97f990db",
        "name": "Faulkner Flores",
        "email": "faulknerflores@renovize.com",
        "phone": "+1 (952) 501-2678",
        "imgUrl": `https://robohash.org/set_set5/7.png`
    },
    {
        "_id": "5a5664027bae84ef280ffbdf",
        "name": "Holder Bean",
        "email": "holderbean@renovize.com",
        "phone": "+1 (989) 503-2663",
        "imgUrl": `https://robohash.org/set_set5/8.png`
    },
    {
        "_id": "5a566402e3b846c5f6aec652",
        "name": "Rosanne Shelton",
        "email": "rosanneshelton@renovize.com",
        "phone": "+1 (968) 454-3851",
        "imgUrl": `https://robohash.org/set_set5/9.png`
    },
    {
        "_id": "5a56640272c7dcdf59c3d411",
        "name": "Pamela Nolan",
        "email": "pamelanolan@renovize.com",
        "phone": "+1 (986) 545-2166",
        "imgUrl": `https://robohash.org/set_set5/10.png`
    },
    {
        "_id": "5a5664029a8dd82a6178b15f",
        "name": "Roy Cantu",
        "email": "roycantu@renovize.com",
        "phone": "+1 (929) 571-2295",
        "imgUrl": `https://robohash.org/set_set5/11.png`
    },
    {
        "_id": "5a5664028c096d08eeb13a8a",
        "name": "Ollie Christian",
        "email": "olliechristian@renovize.com",
        "phone": "+1 (977) 419-3550",
        "imgUrl": `https://robohash.org/set_set5/12.png`
    },
    {
        "_id": "5a5664026c53582bb9ebe9d1",
        "name": "Nguyen Walls",
        "email": "nguyenwalls@renovize.com",
        "phone": "+1 (963) 471-3181",
        "imgUrl": `https://robohash.org/set_set5/13.png`
    },
    {
        "_id": "5a56640298ab77236845b82b",

        "name": "Glenna Santana",
        "email": "glennasantana@renovize.com",
        "phone": "+1 (860) 467-2376",
        "imgUrl": `https://robohash.org/set_set5/14.png`
    },
    {
        "_id": "5a56640208fba3e8ecb97305",
        "name": "Malone Clark",
        "email": "maloneclark@renovize.com",
        "phone": "+1 (818) 565-2557",
        "imgUrl": `https://robohash.org/set_set5/15.png`
    },
    {
        "_id": "5a566402abb3146207bc4ec5",
        "name": "Floyd Rutledge",
        "email": "floydrutledge@renovize.com",
        "phone": "+1 (807) 597-3629",
        "imgUrl": `https://robohash.org/set_set5/16.png`
    },
    {
        "_id": "5a56640298500fead8cb1ee5",
        "name": "Grace James",
        "email": "gracejames@renovize.com",
        "phone": "+1 (959) 525-2529",
        "imgUrl": `https://robohash.org/set_set5/17.png`
    },
    {
        "_id": "5a56640243427b8f8445231e",
        "name": "Tanner Gates",
        "email": "tannergates@renovize.com",
        "phone": "+1 (978) 591-2291",
        "imgUrl": `https://robohash.org/set_set5/18.png`
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Lilly Conner",
        "email": "lillyconner@renovize.com",
        "phone": "+1 (842) 587-3812",
        "imgUrl": `https://robohash.org/set_set5/19.png`
    }
]

function loadContacts() {
    storageService.save(storageKey, contacts)
    return contacts
}

const storageContacts = storageService.load(storageKey) || loadContacts()

function sort(arr) {
    return arr.sort((a, b) => {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1
        }
        if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1
        }

        return 0
    })
}

function getContacts(filterBy = null) {
    return new Promise((resolve, reject) => {
        var contactsToReturn = storageContacts
        console.log(contactsToReturn);
        if (filterBy && filterBy.term) {
            contactsToReturn = filter(filterBy.term)
        }
        if (!contactsToReturn) return console.log('not yet');
        resolve(sort(contactsToReturn))
    })
}

function getContactById(id) {
    return new Promise((resolve, reject) => {
        const contact = storageContacts.find(contact => contact._id === id)
        contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
    })
}

function deleteContact(id) {
    return new Promise((resolve, reject) => {
        const index = storageContacts.findIndex(contact => contact._id === id)
        if (index !== -1) {
            storageContacts.splice(index, 1)
        }

        resolve(storageContacts)
    })
}

function _updateContact(contact) {
    return new Promise((resolve, reject) => {
        const index = storageContacts.findIndex(c => contact._id === c._id)
        if (index !== -1) {
            storageContacts[index] = contact
        }
        storageService.save(storageKey, storageContacts)
        resolve(contact)
    })
}

function _addContact(contact) {
    return new Promise((resolve, reject) => {
        contact._id = _makeId()
        contact.imgUrl = `https://robohash.org/set_set5/${contact._id}.png`
        storageContacts.push(contact)
        storageService.save(storageKey, storageContacts)
        resolve(contact)
    })
}

function saveContact(contact) {
    return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: '',
    }
}

function filter(term) {
    term = term.toLocaleLowerCase()
    return storageContacts.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(term) ||
            contact.phone.toLocaleLowerCase().includes(term) ||
            contact.email.toLocaleLowerCase().includes(term)
    })
}

function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

