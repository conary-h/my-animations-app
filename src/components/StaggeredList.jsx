import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const StaggeredList = () => {
  // Ref for the list container
  const listRef = useRef(null);

  useEffect(() => {
    // Target all li children of the listRef.current
    gsap.to(listRef.current.children, {
      opacity: 1,
      y: 0,
      stagger: 0.2, // Stagger the animation of each item by 0.2 seconds
      ease: 'power3.out',
      duration: 1,
    });
  }, []); // Empty dependency array ensures this runs once on mount

  // A simple array to generate list items for the demo
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <ul ref={listRef} style={{ listStyle: 'none', padding: '20px' }}>
      {items.map((item, index) => (
        <li
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            margin: '10px 0',
            padding: '10px',
            color: '#333',
            background: '#f0f0f0',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
          }}
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default StaggeredList;
