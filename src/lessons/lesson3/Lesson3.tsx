import React, { useState } from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState<any>('');


    const searchFilm = () => {
        API.searchFilmsByTitle(searchName)
            .then((res) => {
                console.log(res.data);
                setSearchResult(res.data)
            })
            .catch(() => {})
    };

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {JSON.stringify(searchResult)}
                    {
                        searchResult && <div>
                            <h1>{searchResult.Title}</h1>
                            <p>{searchResult.Year}</p>
                            <img src={searchResult.Poster} alt=""/>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
}
export default Lesson3;