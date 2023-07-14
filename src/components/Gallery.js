import React, { useState, useEffect } from 'react';
import Image from '../images/home_unsplash.jpg';

const Gallery = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://sheetabz.github.io/Accommadation-api/db.json');
      const data = await response.json();
      setProperties(data.properties);
    };
    fetchData();
  }, []);

  const sections = {
    homes: properties.filter(item => item.property_type === "Home"),
    vacation: properties.filter(item => item.property_type === "Villa"),
    rental: properties.filter(item => item.property_type === "Rental unit"),
    bungalow: properties.filter(item => item.property_type === "Bungalow"),
    apartment: properties.filter(item => item.property_type === "Apartment"),
    other: properties.filter(item => item.property_type !== "Home" && item.property_type !== "Villa" && item.property_type !== "Rental unit" && item.property_type !== "Bungalow" && item.property_type !== "Apartment" && item.property_type !== "Guesthouse"),
  };

  const rows = [];
  for (const section in sections) {
    const sectionProperties = sections[section];
    const itemsPerRow = 4;
    let currentRow = [];
    for (let i = 0; i < sectionProperties.length; i++) {
      if (i % itemsPerRow === 0) {
        currentRow = [];
      }
      currentRow.push(sectionProperties[i]);
      if (currentRow.length === itemsPerRow) {
        rows.push(currentRow);
        currentRow = [];
      }
    }
  }

  return (
    <div className="gallery">
      {rows.map((row, index) => (
        <div key={index} className="row">
          {row.map((property) => (
            <div key={index} className="card" style={{ flex: 1, padding: '10px' }}>
              <img src={property.img_cover} alt={property.title} style={{ width: '300px', height: '300px' }} />
              <h3>{property.property_type}</h3>
              <p>{property.title}</p>
              <p>Rating: {property.rating}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
