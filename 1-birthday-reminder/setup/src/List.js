import React from 'react';

const List = ({ people, removePerson }) => {
 return (
  <>
   {people.map((persons) => {
    const { id, name, age, image } = persons;
    return <article
     key={id}
     className="person">

     <img src={image} alt={name} />

     <div>
      <h4>{name}</h4>
      <p>{age} years</p>
     </div>
     <button className='remove' onClick={() => removePerson(id)}>-</button>

    </article>
   })}
  </>
 );
};

export default List;
