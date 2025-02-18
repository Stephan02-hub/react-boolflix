import { useState } from "react"
import {useGlobalContext} from "../Context/GlobalContext"

const Header = () =>{

      const [query, setQuery] = useState("")

      const {fetchMovie} = useGlobalContext()
  
      const handlerSearch = (e) =>{
        e.preventDefault()
        fetchMovie(query)
        
        
        
      }
  return(
    <header className="text-bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid d-flex">
            <a className="navbar-brand text-danger" href="#">BoolFlix</a>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              
              <form className="d-flex" role="search" onSubmit={handlerSearch}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e =>{ setQuery(e.target.value)}}/>
                <button className="btn btn-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      
    </header>
  )
}

export default Header