import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import GameCard from "../../components/game-card/game-card.component";
import PlayerCard from "../../components/player-card/player-card.component";
import { ReactComponent as Search } from "../../assets/search.svg";

import "./games.styles.scss";
import Categories from "../../components/categories/categories.component";

const Games = () => {
  const [gamesList, setGamesList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchGame, setSearchGame] = useState("");
  const playerDetails = useSelector((state) => state.player.player);
  const categoriesSearch = useSelector((state) => state.categories.categories);

  const GAMES_URL = "http://localhost:3001/games";
  const CATEGORIES_URL = "http://localhost:3001/categories";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(GAMES_URL);
        if (!response.ok || playerDetails.status !== "success")
          throw Error("Did not received data");
        const games = await response.json();
        setGamesList(games);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchCategories = async () => {
      try {
        const response = await fetch(CATEGORIES_URL);
        if (!response.ok) throw Error("Did not received data");
        const categories = await response.json();
        setCategoriesList(categories);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      }
    };
    // loading simulation
    setTimeout(() => {
      fetchItems();
      fetchCategories();
    }, 2000);
  }, [playerDetails]);

  const handleSearch = (event) => {
    setSearchGame(event.target.value);
  };

  return (
    <>
      <div className="main-container">
        <div className="sub-container">
          <PlayerCard player={playerDetails.player} />
          <h3>Games</h3>
          <div className="games-container">
            {isLoading && <h2>Loading...</h2>}
            {fetchError && (
              <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>
            )}
            {!fetchError && !isLoading && (
              <div>
                {gamesList
                  .filter((category) => {
                    if (category.categoryIds[0] === categoriesSearch) {
                      return category;
                    } else if (category.categoryIds[2] === categoriesSearch) {
                      return category;
                    } else if (category.categoryIds[1] === categoriesSearch) {
                      return category;
                    } else {
                      return "";
                    }
                  })
                  .filter((val) => {
                    if (searchGame === "") {
                      return val;
                    } else if (
                      val.name.toLowerCase().includes(searchGame.toLowerCase())
                    ) {
                      return val;
                    }
                    return "";
                  })
                  .map((game, key) => {
                    return <GameCard key={key} game={game} />;
                  })}
              </div>
            )}
          </div>
        </div>
        <div className="search-container">
          <div className="input-container">
            <form>
              <input
                placeholder="Search Game"
                type="text"
                onChange={handleSearch}
              />
            </form>
            <div className="search">
              <Search className="search-logo" alt="logo" />
            </div>
          </div>
          <div className="categories-container">
            <h3>Categories</h3>
            {categoriesList.map((categories) => {
              return <Categories key={categories.id} categories={categories} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
