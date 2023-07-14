import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Album = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    // Fetch album details from API using Fetch API
    const fetchAlbum = async () => {
      try {
        const response = await fetch(`your_album_api_endpoint/${id}`);
        const data = await response.json();
        setAlbum(data);
      } catch (error) {
        console.error('Error occurred while fetching album:', error);
      }
    };

    fetchAlbum();
  }, [id]);

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{album.title}</h2>
      {album.photos.map((photo) => (
        <img src={photo.url} alt={photo.title} key={photo.id} />
      ))}
    </div>
  );
};

export default Album;
