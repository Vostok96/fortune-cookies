
// const CardSong = (props) => {

//   return (
//     <div className = "card-song">
//       <h2>{props.titulo}</h2>
//       <h3><span>Album: </span>{props.album}</h3>
//       <h3><span>Banda: </span>{props.banda}</h3>
//       <h3><span>Genero: </span>{props.genero}</h3>
//       <h3><span>Fecha de Lanzamiento: </span>{props.fecha}</h3>
//     </div>
//   );
// }

// export default CardSong;

const CardSong = ({titulo, album, banda, genero, fecha}) => {

    return (
      <div className = "card-song">
        <h2>{ titulo }</h2>
        <h3><span>Album: </span>{ album }</h3>
        <h3><span>Banda: </span>{ banda }</h3>
        <h3><span>Genero: </span>{ genero }</h3>
        <h3><span>Fecha de Lanzamiento: </span>{ fecha }</h3>
      </div>
    );
  }
  
  export default CardSong

