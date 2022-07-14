import { useState, useEffect } from "react";  // import from React Library 
import MovieCard from "./MovieCard";

export default function Home() {
    const [movies, setMovies] = useState(null); 
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/movies') 
                .then(res => {
                    return res.json(); 
                }) 
                .then(data => {
                    console.log(data); 
                    setMovies(data); 
                    setIsLoading(false); 
                }) 
        }, 1000); 
    }, []); 

    return (
        <div>
            <h1 className="HeaderText">Movie App</h1>
            <h2 style={{ fontStyle: "italic" }}>
                Choose from thousands of films!
            </h2> 

            { isLoading && <div>Loading...</div> } 
            
            <div>
                {movies && <MovieCard movies={movies} />}  {/* creating a property value to pass the data as a prop; a prop */}
            </div> 
        </div> 
    );     
} 



// const movieData = {
//     Title: "The Avengers",
//     Year: "2012",
//     Rated: "PG-13",
// }; 

// export default function Home() {
//     return (
//         <div>
//             <h1 className="HeaderText">Movie App</h1>
//             <h2 style={{ fontStyle: "italic" }}>
//                 Choose from thousands of films!
//             </h2> 
//             <div style={{ display: "flex", justifyContent:"center", marginTop: 40 }}>
//                 <MovieCard title={movieData.Title} year={movieData.Year} rated={movieData.Rated} /> 
//             </div> 
//         </div> 
//     ); 
// } 

// const movieData = () => [
//     {
//         Title: "The Avengers",
//         Year: "2012",
//         Rated: "PG-13",
//     }, 
//     {
//         Title: "Thor",
//         Year: "2011",
//         Rated: "PG-13",
//     }, 
//     {
//         Title: "Iron Man",
//         Year: "2008",
//         Rated: "PG-13",
//     }, 
// ]; 