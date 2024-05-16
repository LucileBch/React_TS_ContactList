// ---------- CONTACT component ----------
// Interfaces imports
import Contact from "../interfaces/Contact";

// Style imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Contacts.css";

// type Props = {
//   contactList: Contact[];
//   setContactList: React.Dispatch<React.SetStateAction<Contact[]>>;
// };

export function Contacts({
  contactList,
  setContactList,
}: {
  contactList: Contact[];
  setContactList: React.Dispatch<React.SetStateAction<Contact[]>>;
}): JSX.Element {
  const handleDelete = (id: string) => {
    const index = contactList.findIndex((contact) => contact.id === id);
    const updatedContactList = [...contactList];
    updatedContactList.splice(index, 1);
    setContactList(updatedContactList);
  };

  return (
    <div className="contact__content">
      <h2>{contactList.length} Contacts</h2>
      <ul className="contact__list">
        {contactList.map((contact) => {
          return (
            <li key={contact.id} className="contact__person">
              <div className="person__infos">
                <h3>{contact.name}</h3>
                <p>{contact.email}</p>
              </div>
              <FontAwesomeIcon
                icon="trash"
                onClick={() => {
                  handleDelete(contact.id);
                }}
                className="contact__delete"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
