// export default function MovieCard(props) {
//     return (
//         <div className="MovieCard">
//             <h1><b>Title: </b> {props.title}</h1> 
//             <p><b>Year: </b> {props.year}</p> 
//             <p><b>Rated: </b> {props.rated}</p> 
//         </div> 
//     ); 
// } 

export default function MovieCard(props) {
    const movies = props.movies; 
    
    return (
        <div className="movie-card" style={{ display: "flex", justifyContent:"space-evenly", marginTop: 80 }}>
            {movies.length > 0 ? ( 
                movies.map((movie) => ( 
                    <div className="movie-preview" key={movie.id}>
                        <h2>{ movie.Title }</h2> 
                        <p><b>Year:</b> { movie.Year }</p> 
                        <p><b>Rated:</b> { movie.Rated }</p> 
                    </div> 
                )) 
            ) : (
                <div>No Movies Found</div> 
            )} 
        </div> 
    ); 
} 