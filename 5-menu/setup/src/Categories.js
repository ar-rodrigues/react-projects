import React from 'react';

const Categories = ({ filterItems, categories }) => {
 return (
  <div className='btn-container'>
   {categories.map((cat, index) => {
    return <button
     type='button'
     key={index}
     className='filter-btn'
     onClick={() => filterItems(cat)} >{cat}</button>
   })
   }
  </div>
 )


 //Manual approach: <button className='filter-btn' onClick={() => filterItems('breakfast')}>breakfast</button>;
};

export default Categories;
