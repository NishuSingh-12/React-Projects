import { useEffect, useState } from "react";

function FruitsSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      setResults([]);
      return;
    }
  };

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const timeoutID = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`,
        );
        const data = await response.json();
        setResults(data.map((fruit) => fruit.name));
      } catch (error) {
        console.error(error);
      }
    }, 500);

    return () => clearTimeout(timeoutID);
  }, [query]);

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          id="search-input"
        />
      </form>

      <div id="results">
        {results.length > 0 ? (
          results.map((item, index) => (
            <p key={index} className="result-item">
              {item}
            </p>
          ))
        ) : (
          <p>Result not found</p>
        )}
      </div>
    </div>
  );
}

export default FruitsSearch;
