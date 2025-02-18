import { useEffect } from "react"
import {useGlobalContext} from "../Context/GlobalContext"
import ResultSection from "./ResultSection"


const Main = () =>{

  const { movies, fetchMovie } = useGlobalContext()
  
  useEffect(()=>{
    fetchMovie()
  }, [])
  console.log(movies);
  return(
    <main>
      <div className="container">
        <ResultSection title="Film" data={movies.filter(movie => movie.media_type === 'movie')} />
        <ResultSection title="Serie TV" data={movies.filter(movie => movie.media_type === 'tv')}/>
        
        
      </div>
    </main>
  )
}

export default Main