{/*URL desde donde haré la llamada a la API: https://dummyjson.com/users*/}

export async function fetchCharacters() {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const results = await response.json();
    return results.users;
        } catch (error) {
            console.error(error);
        }
}