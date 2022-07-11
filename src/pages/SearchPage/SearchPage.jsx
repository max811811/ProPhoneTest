import React, { useState, useEffect } from 'react';
import ImageCard from '../../components/ImageCard/ImageCard';
import ImageSearch from '../../components/ImageSearch/ImageSearch';
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

      const key = process.env.REACT_APP_PixKey;
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