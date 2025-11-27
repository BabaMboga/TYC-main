"use client"

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Image from 'next/image';
import  '../../styles/app.min.css';

type CloudinaryResource ={
  public_id: string;
  format: string;
  type: string;
};

const Page = () => {
  // const [photoGalleryAray, updatedPhotoGalleryArray] = useState([]);
  const [photos, setPhotos] = useState<CloudinaryResource[]>([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect (() => {
    fetch('/api/gallery')
    .then(response => {
      if (!response.ok) throw new Error('Failed to fetch');
      return response.json();
    })
    .then(data => {
      setPhotos(data.resources);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
      setError(error.message);
      setLoading(false);
    });
  }, []);

  if (loading) return <div  className='App'><h1>Loading...</h1></div>;
  if (error) return <div className="App"><h1>Error: {error}</h1></div>;
  // useEffect (() => {
    
  //   axios
  //   .get('https://res.cloudinary.com/djfitsjh9/image/list/tyc-images.json')
  //   .then(function (response) {
  //     setPhotos(response.data.resources)
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }, []);
  return (
    <div className='App'>
      <h1 className='title'>TYC Gallery</h1>
      <div className='gallery'>
        {photos.map((item, index) => {
          const imgUrl = `https://res.cloudinary.com/djfitsjh9/image/upload/${item.public_id}.${item.format}`;

          return (
            <div key={index} className='col-lg-4 col-md-4 col-sm-12 p-1'>
              <Image
                src={imgUrl}
                alt={item.public_id}
                width={800}
                height={800}
              ></Image>
            </div>
          )

        })}

      </div>

    </div>
  )
}

export default Page;