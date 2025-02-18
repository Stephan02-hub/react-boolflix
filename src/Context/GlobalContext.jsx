import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
  // const baseApiUrl = "https://api.themoviedb.org/3/search/movie?api_key=6cf11780013dc8256074e1389fdab41f&query=ritorno+al+futuro"
  const baseApiUrl = "https://api.themoviedb.org/3/search/multi?api_key=6cf11780013dc8256074e1389fdab41f&query="

  const [movies, setMovies] = useState([]);

  const fetchMovie = (query) =>{
    axios.get(baseApiUrl + query)
    .then((res) =>{
      setMovies(res.data.results)
      console.log(res.data.results);
      
    })
    .catch(err =>{
      console.log("Errore ", err);
      
    })   

    
  }
  return (
    <GlobalContext.Provider value={{movies, setMovies, fetchMovie}}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () =>{
  return useContext(GlobalContext)
}

export {useGlobalContext, GlobalProvider}