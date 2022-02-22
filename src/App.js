import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import { default as jsonContacts } from "./contacts.json";

function App() {
  const firstFive = jsonContacts.slice(0, 5);

  const [contacts, setContacts] = useState(firstFive);
  const randomContact = () => {
    let contactExists = true;
    while (contactExists && contacts.length < jsonContacts.length) {
      let randomIndex = Math.floor(Math.random() * jsonContacts.length);
      let newContact = jsonContacts[randomIndex];
      const CONTACT_EXISTS = contacts.find((contact) => {
        return contact.id === newContact.id;
      });
      if (!CONTACT_EXISTS) {
        contactExists = false;
        setContacts((prevState) => [...prevState, newContact]);
      }
    }
  };

  const sortPopularity = () => {
    let newContacts = [...contacts];
    setContacts(() =>
      newContacts.sort((a, b) =>
        a.popularity > b.popularity ? 1 : b.popularity > a.popularity ? -1 : 0
      )
    );
  };

  const sortName = () => {
    let repeatContacts = [...contacts];
    setContacts(() =>
      repeatContacts.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase()
          ? 1
          : b.name.toLowerCase() > a.name.toLowerCase()
          ? -1
          : 0
      )
    );
  };

  const deleteContact = (id) => {
    setContacts((prevState) => prevState.filter((person) => person.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>IronContacts</h1>
      </header>
      <div>
        <button onClick={randomContact}>Add Random Contact</button>
        <button onClick={sortPopularity}>Sort by Popularity</button>
        <button onClick={sortName}>Sort by Name</button>
      </div>

      <table>
        <thead>
          <tr className="App-title-row">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emy</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((person) => {
            return (
              <Contact
                key={person.id}
                id={person.id}
                picture={person.pictureUrl}
                name={person.name}
                popularity={person.popularity}
                wonOscar={person.wonOscar}
                wonEmy={person.wonEmmy}
                onDelete={deleteContact}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
