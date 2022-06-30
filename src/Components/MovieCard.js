export default function MovieCard(props) {
    return (
        <div className="MovieCard">
            <h1><b>Title: </b> {props.title}</h1> 
            <p><b>Year: </b> {props.year}</p> 
            <p><b>Rated: </b> {props.rated}</p> 
        </div> 
    ); 
} 

// export default function MovieCard() {
//     return (
//         <>
//             {movieData.map(({ Title, Year, Rated }) => (
//                 <p key={movieData}>Title {Title}</p>
//                 <p key={movieData}>Year: {Year}</p> 
//                 <p key={movieData}>Rated: {Rated}</p> 
//             ))}
//         </>
        
//     );
// }