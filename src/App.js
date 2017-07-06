import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const people = this.props.contacts;

    return (
      <ol>
        { people.map( people => (
          <li key={people.name}>{people.name}</li>
        ))}
      </ol>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>FD Mates</h3>
        <ContactList contacts={[
          { name: "Munawar" },
          { name: "Prateep" },
          { name: "Ellanki Hari" },
          { name: "Vikram" },
          { name: "Vasu" },
          { name: "Vamsi" }
        ]}/>
        <h3>School Mates</h3>
        <ContactList contacts={[
          { name: "Aleem" },
          { name: "Akber" },
          { name: "Nasir" }
        ]}/>
      </div>
    );
  }
}

export default App;
