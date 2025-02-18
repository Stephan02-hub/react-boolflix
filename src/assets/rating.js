function rating(number){
    return Math.ceil((number - 1)* 4/9)+1;
  }
  
  function ratingStar(voto){
    const votoIntero = rating(voto);
    let stellePunt ='';
  
    for(let i = 0; i < votoIntero; i++){
      stellePunt += '<i class="fa-solid fa-star"></i>';
    }
  
    for(let i= votoIntero; i < 5; i++){
      stellePunt += '<i class="fa-regular fa-star"></i>';
    }
  
    return stellePunt;
  }
  
  
  
  export default ratingStar