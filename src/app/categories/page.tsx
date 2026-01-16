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

const listItemStyle = {
  padding: '10px 14px',
  borderRadius: 8,
  transition: 'all 0.2s',
  cursor: 'pointer',
  color: '#1f2937',
  border: '1px solid #e5e7eb',
  marginBottom: 8,
  background: '#fff',
  display: 'inline-block',
};

const hoverStyle = {
  transform: 'translateY(-1px)',
  boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
  borderColor: '#d1d5db',
  background: '#f9fafb',
};

const containerStyle = {
  padding: '20px',
  borderRadius: 12,
  background: 'linear-gradient(135deg, #f8fafc 0%, #eef2f7 100%)',
  maxWidth: 420,
  boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
};

const headingStyle = {
  margin: '0 0 12px',
  fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial',
  fontWeight: 700,
  color: '#111827',
};

const BookCategories = () => {
  const [hover, setHover] = React.useState(null);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Book Categories</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
        {categories.map((category) => (
          <li key={category.id} style={{ padding: 0 }}>
            <button
              type="button"
              onMouseEnter={() => setHover(category.id)}
              onMouseLeave={() => setHover(null)}
              style={{
                ...listItemStyle,
                ...(hover === category.id ? hoverStyle : {}),
              }}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookCategories;
