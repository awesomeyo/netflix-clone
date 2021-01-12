import React,{ useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'

export function Row({title, fetchUrl}) {
  const [movies, setMovies] = useState([]);

  //A snippet of code which runs based on a specific condition 

  useEffect(() =>{
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData()
  }, [fetchUrl]) //if leave blank only run once, if put movies here, its gonna runs everytime movies changes

  console.log(movies)
  return (
    <>
      <h2>{title}</h2>
    </>
  )
}
