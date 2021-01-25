import React, { useState } from 'react';
import data from './data';
import List from './List';
import Add from './Add';
/*const url = 'https://type.fit/api/quotes';
const getQuote = async () => {
 const response = await fetch(url);
 const quotes = await response.json();
 console.log(quotes[0]);
}
console.log(getQuote());*/

const idGen = () => { return new Date().getTime().toString() };

function App() {
 const [people, setPeople] = useState(data);
 const [person, setPerson] = useState({ id: '', name: '', age: '', image: 'https://' })
 const [addButton, setAddButton] = useState(false);

 const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setPerson({ ...person, id: idGen(), [name]: value });
 }
 const handleSubmit = (e) => {
  e.preventDefault();
  setPeople([...people, person]);
  setPerson({ id: '', name: '', age: '', image: 'https://' })
 }

 const removePerson = (id) => {
  const newPeople = people.filter((person) => person.id !== id);
  setPeople(newPeople);
 }


 return (
  <main>
   {addButton &&
    <Add
     person={person}
     handleChange={handleChange}
     handleSubmit={handleSubmit}
     setAddButton={setAddButton}
     addButton={addButton} />}

   <section className="container">
    <h3>{people.length} birthdays today</h3>
    <List people={people} removePerson={removePerson} />
    <button onClick={() => setPeople([])}>
     clear all
     </button>
    <button onClick={() => setAddButton(!addButton)}>
     add people
    </button>

   </section>
  </main >
 )
}

export default App;
