import { useState, useEffect } from "react";
//import MovieCard from "./MovieCard"; 

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY; 

export default function MovieList() {
    //const [timespan, setTimespan] = useState("This Month"); 
    const [searchCriteria, setSearchCriteria] = useState('Thor');
    const [movies, setMovies] = useState([]); 
    const [isLoading, setIsLoading] = useState(false); 

    const [search, setSearch] = useState('Thor'); 

    useEffect(() => {
        async function getMovies() {
            setIsLoading(true); 
            const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchCriteria}`; 
            const response = await fetch(url); 
            const data = await response.json(); 
            console.log("data is: ", data); 
            setMovies(data); 
            setIsLoading(false); 
        } 
        getMovies(); 
    }, [searchCriteria]); 

    return (
        <div>
            <div>Movie List</div> 
            {/* <button onClick={() => setTimespan("This Month")}>This Month</button> 
            <button onClick={() => setTimespan("This Year")}>This Year</button>  
            <div style={{ marginBottom: 40 }}>{timespan} is selected.</div> */}
            <button onClick={() => setSearchCriteria("Batman")}>Search Batman</button> 
            <button onClick={() => setSearchCriteria("Superman")}>Search Superman</button> 
            <div style={{ marginBottom: 40 }}>{searchCriteria} is selected.</div> 

            {/* { isLoading && <div>Loading...</div> }  */}

            {!isLoading ? (
                <div>
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            // <MovieCard movie={movie} /> 
                            <div>
                                <div>{movie.Title}</div>
                            </div> 
                        ))   
                    ) : (
                        <div>No movies found.</div> 
                    )}
                </div> 
            ) : (
                <div>Loading...</div> 
            )} 
        </div> 
    ); 
} 