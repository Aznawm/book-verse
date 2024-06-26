import React from 'react';

const categories = [
  { id: 1, name: 'Fiction' },
  { id: 2, name: 'Non-Fiction' },
  { id: 3, name: 'Mystery' },
  { id: 4, name: 'Science Fiction' },
  { id: 5, name: 'Romance' },
  { id: 6, name: 'History' },
  { id: 7, name: 'Biography' },
  { id: 8, name: 'Horror' },
  { id: 9, name: 'Thriller' },
  { id: 10, name: 'Fantasy' },
  { id: 11, name: 'Biography' },
  
];

const BookCategories = () => {
  return (
    <div>
      <h2>Book Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookCategories;