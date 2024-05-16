// ---------- APP ----------
// Packages imports
import { useState } from "react";

//Interfaces imports
import Contact from "./interfaces/Contact";

// Components imports
import { Header, Form, Contacts, Footer } from "./components";

// Style imports
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
library.add(faTrash, faLinkedinIn, faFacebook, faInstagram, faTwitter);

function App(): JSX.Element {
  const [contactList, setcontactList] = useState<Contact[]>([]);

  return (
    <div>
      <Header />
      <main className="container main">
        <Form contactList={contactList} setContactList={setcontactList} />
        <Contacts contactList={contactList} setContactList={setcontactList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
