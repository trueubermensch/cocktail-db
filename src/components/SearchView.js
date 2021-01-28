import React from "react";

const SearchView = ({ cocktails, onCocktailSelect }) => {
    if (cocktails === null) {
        cocktails = [{ strDrink: "nothing is found" }];
    }
    const cocktailList = cocktails.map((cocktail) => {
        return (
            <li
                onClick={() => onCocktailSelect(cocktail)}
                key={cocktail.idDrink}
                className="list-group-item bg-dark text-warning border-warning active"
            >
                {cocktail.strDrink}
            </li>
        );
    });

    return <ul className="list-group mt-3">{cocktailList}</ul>;
};

export default SearchView;
