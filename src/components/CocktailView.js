import React from "react";

const CocktailView = ({ cocktail }) => {
    if (cocktail === null) {
        return (
            <div className="card text-warning bg-dark border-warning">
                <div className="card-body">Choose a cocktail</div>
            </div>
        );
    } else {
        return (
            <div className="card text-warning bg-dark border-warning">
                <img
                    src={cocktail.strDrinkThumb}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h4 className="card-title">{cocktail.strDrink}</h4>
                    <h5 className="card-subtitle text-warning text-muted">
                        {cocktail.strAlcoholic} {cocktail.strCategory}
                    </h5>
                    <p className="card-text">{cocktail.strInstructions}</p>
                </div>
            </div>
        );
    }
};

export default CocktailView;
