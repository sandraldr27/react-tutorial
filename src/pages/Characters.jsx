// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useEffect } from 'react'; //Importamos useEffect de react//
import { fetchCharacters } from '../api/fetchCharacters';
import { useState } from 'react';


const Characters = () => {
    const [Characters, setCharacters] = useState([]);

    useEffect(() => {
            // Aquí irá el fetch de la API //
            const getCharacters = async () => {
                const data = await fetchCharacters();
                console.log(data);
                setCharacters(data);
            };
            getCharacters();
        }, []);

        return (
            <div>
                {Characters ? (
                    <ul>
                        {Characters.map((character) => (
                            <li key={character.id}>
                                <img src={character.image} alt="" height="200px" width="200px" />
                                <div>
                                    {character.firstName} {character.age}{" "}
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading characters</p>
            )}
        </div>
    );
};

export default Characters;