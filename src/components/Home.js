import React, { useState, useEffect } from 'react';

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const dataApi = "https://sheetabz.github.io/Accommadation-api/db.json"


  useEffect(() => {
    // Fetch the data from the JSON file
    const fetchData = async () => {
      try {
        const response = await fetch(dataApi);
        const data = await response.json();

        setPhotos(data.properties);
        console.log(photos);
      } catch (error) {
        console.log('Error fetching photos:', error);
      }
    };

    fetchData();
  }, []);

    // Filter photos with valid URLs
    const validPhotos = photos.filter((photo) => {
      const img = new Image();
      img.src = photo.img_cover;
      return img.complete && img.width > 0 && img.height > 0;
    });

  // Group photos into rows
  const rows = [];
  const rowSize = 4;

  for (let i = 0; i < validPhotos.length; i += rowSize) {
    const row = validPhotos.slice(i, i + rowSize);
    rows.push(row);
  }

  return (
    <div>
      {rows.map((row, index) => (
        <div key={index} style={{ display: 'flex' }}>
          {row.map((photo) => (
            <div key={photo.id} style={{ flex: 1, padding: '10px' }}>
              <img src={photo.img_cover} alt={photo.title} style={{ width: '100%' }} />
              <h4>{photo.title}</h4>
              <p>{photo.album}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Home;
