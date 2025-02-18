import languageFlag from "../assets/language"
import ratingStar from "../assets/rating"

const ResultSection = ({title, data}) =>{

  

  return (
    <div><h1 className="mt-5">{title}</h1>
         <div className="d-flex justify-content-between flex-wrap">   
            {data.map((movie) => (<div className="col-12 col-md-4 mt-2" key={movie.id}>
              
              
                  <div className="card" style={{width: "300px", height:"530px"}}>
                    <div className="card-body">
                      <h3 className="card-text">{movie.title || movie.name}</h3>
                      <img className="img-fluid" src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt={movie.title || movie.name} />
                    </div>            
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{movie.original_title || movie.original_name}</li>
                      <li className="list-group-item">{movie.original_language} <img src={languageFlag[movie.original_language]} alt={movie.original_language} style={{width: "40px"}} /></li>
                      <li className="list-group-item">{ratingStar (movie.vote_average)}</li>
                    </ul>
                  </div>
                  
                
            </div>))}
          </div>
        </div>
    
    
  )
}

export default ResultSection