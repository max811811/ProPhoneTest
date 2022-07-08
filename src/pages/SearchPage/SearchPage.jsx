import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';
import NavBar from '../../components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
// import './App.css';


export default function SearchPage() {
    const [image, setImage] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [user, setUser] = useState(getUser())
  
    useEffect(() => {
      const key = '23664585-b63ea49e0412f4d30e9b28cc8';
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&image_type=photo&pretty=true&safesearch=false&per_page=10`;
      // console.log(url);
      fetch(url)
        .then((response) => response.json())
        .then(
          (result) => {
            // console.log(result);
            setImage(result.hits); // HERE IS ARRAY OF DATA STORE && Chk Also Console
            setIsLoading(false);
          },
  
          (error) => {
            // setIsLoading(true);
            // setError(error);
          }
        );
    }, [search]);
  
    return (
      <>
        
        <p className="text-center">
          Note:panding :: pagination , per page filter droupdown 10,20.. ,per
          image loader
        </p>
        <ImageSearch searchHook={(text) => setSearch(text)} />
        {!isLoading && image.length === 0 && (
          <h1 className="text-center">No Data Found</h1>
        )}
        {isLoading ? (
          <h1 className="text-center"> Loading...</h1>
        ) : (
          <div className="container">
            <div className="row">
              {image.map((data) => (
                <ImageCard key={data.id} image={data} />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }