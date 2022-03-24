
//This will have our API data fetching functions within.
// Use named exports to expose AJAX functionality as needed, e.g., export function getAllStarships() {...}to obtain all starships.

  export const fetchData = async () => {
    try 
    
    {
      const response = await fetch("https://swapi.dev/api/starships/") 
      console.log(response);
      return response.json();
    } catch (error) {
      console.log('Error', error);
    }
  };
