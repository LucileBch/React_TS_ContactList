// ---------- FORM component ----------
// Packages imports
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Interaces imports
import Contact from "../interfaces/Contact";

// Style imports
import "../styles/Form.css";

// type Props = {
//   contactList: Contact[];
//   setContactList: React.Dispatch<React.SetStateAction<Contact[]>>;
// };

export function Form({
  setContactList,
  contactList,
}: {
  contactList: Contact[];
  setContactList: React.Dispatch<React.SetStateAction<Contact[]>>;
}): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newContact = { id: uuidv4(), name, email };
    const newContactList = [...contactList, newContact];
    setContactList(newContactList);
    setName("");
    setEmail("");
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const nameValue = event.target.value;
    setName(nameValue);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const emailValue = event.target.value;
    setEmail(emailValue);
  };

  return (
    <div className="main__form">
      <h2>Add a contact</h2>
      <form onSubmit={handleSubmit} className="form__content">
        <input
          value={name}
          type="text"
          placeholder="Enter your name"
          name="username"
          onChange={handleName}
          className="form__input"
        />
        <input
          value={email}
          type="email"
          placeholder="Enter your email address"
          name="email"
          onChange={handleEmail}
          className="form__input"
        />
        <input type="submit" value="Submit" className="form__button" />
      </form>
    </div>
  );
}
