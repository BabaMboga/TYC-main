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
  const [cursor, setCursor] = useState<string | null>(null); //pagination cursor
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchMoreImages = async () => {
    if (!cursor) return;

    try {
      setLoadingMore(true);

      const res = await fetch(`/api/gallery?cursor=${cursor}`);
      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();

      setPhotos(prev => [...prev, ...data.resources]);

      setCursor(data.next_cursor ?? null);

      setLoadingMore(false);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
      setLoadingMore(false);
    }
  };



  useEffect (() => {
    const url = cursor ? `/api/gallery?page=${cursor}` : '/api/gallery';
    fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Failed to fetch');
      return response.json();
    })
    .then(data => {
      setPhotos(prev => cursor ? [...prev, ...data.resources] : data.resources);
      setCursor(data.next_cursor || null);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
      setError(error.message);
      setLoading(false);
    });
  }, [cursor]);

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
    <div className='new-App'>
      <h1 className='title'>TYC Gallery</h1>
      <div className='grid md:grid-cols-3 gap-4 p-1'>
        {photos.map((item, index) => {
          const imgUrl = `https://res.cloudinary.com/djfitsjh9/image/upload/${item.public_id}.${item.format}`;

          return (
            <div 
              key={index} 
              className='relative w-full h-64 overflow-hidden shadow-lg transition-transform hover:scale-110'
            >
              <Image
                src={imgUrl}
                alt={item.public_id}
                fill
                className='w-full h-full'
                // width={100%}
                // height={800}
              ></Image>
            </div>
          );

        })}

      </div>

      {/* Load More button */}
      {cursor && (
        <div className='flex justify-center my-6'>
          <button
            onClick={fetchMoreImages}
            className='px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition'
          >
            {loadingMore ? "Loading..." : "Load More"}
          </button>
        </div>
      )}

    </div>
  );
};

export default Page;