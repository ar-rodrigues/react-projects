import React from 'react';


const Add = (props) => {

 return (
  <section className="container modal-content">
   <button id="close" onClick={() => props.setAddButton(!props.addButton)}>&times;</button>
   <form className="form" onSubmit={(e) => props.handleSubmit(e)}>
    <label htmlFor="name"> Name</label>
    <input
     type="text"
     id="name"
     name="name"
     value={props.person.name}
     onChange={(e) => props.handleChange(e)}
     placeholder=" Enter your name" />

    <br />

    <label htmlFor="age"> Age</label>
    <input
     type="number"
     id="age"
     name="age"
     value={props.person.age}
     onChange={(e) => props.handleChange(e)}
     placeholder=" Enter your age" />

    <br />

    <label htmlFor="image"> Image Link</label>
    <input
     type="url"
     id="image"
     name="image"
     value={props.person.image}
     onChange={(e) => props.handleChange(e)}
     placeholder=" https://www..." />
    <button type="submit" onSubmit={(e) => props.handleSubmit(e)}>
     Submit
  </button>
   </form >
  </section >
 )
}

export default Add;