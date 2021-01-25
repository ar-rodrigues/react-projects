import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
 const [index, setIndex] = useState(0);
 const { name, job, image, text } = people[index];

 const checkIndex = (number) => {
  return (number > people.length - 1
   ? number = 0
   : number < 0
    ? number = people.length - 1
    : number)
 }
 const prevPerson = () => {
  setIndex((index) => {
   const newPerson = index - 1;
   return checkIndex(newPerson);
  })
 }
 const nextPerson = () => {
  setIndex((index) => {
   const newPerson = index - 1;
   return checkIndex(newPerson);
  })
 }
 const randomPerson = () => {
  let randomNumber = Math.floor(Math.random() * (people.length));
  if (randomNumber === index) { randomNumber += 1 }
  setIndex(checkIndex(randomNumber));
 }

 return (
  <article className='review'>
   <div className='img-container'>
    <img src={image} alt={name} className='person-img' />
    <span className='quote-icon'>
     <FaQuoteRight />
    </span>
   </div>
   <div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
   </div>
   <div className='button-container'>
    <button className='prev-btn' onClick={prevPerson}>
     <FaChevronLeft />
    </button>
    <button className='next-btn' onClick={nextPerson}>
     <FaChevronRight />
    </button>
    <button className='random-btn' onClick={randomPerson}>
     surprise me
    </button>



   </div>

  </article>
 );
};

export default Review;
