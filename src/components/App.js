import React, { useState, useEffect, useRef } from "react";
import cocktails from "../api/cocktailsdb";
import CocktailView from "./CocktailView";
import SearchBar from "./SearchBar";
import SearchView from "./SearchView";
import Navbar from "./Navbar";
import "../style/style.css";

function App() {
    const [cocktailList, setCocktailList] = useState([]);
    const [cocktail, setCocktail] = useState({});
    const [submit, setSubmit] = useState("");

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            const search = async () => {
                const result = await cocktails.get(`/search.php?s=${submit}`);
                setCocktailList(result.data.drinks);
                console.log(result);
            };
            search();
        }
    }, [submit]);

    const onCocktailSelect = (cocktail) => {
        setCocktail(cocktail);
    };

    const handleSubmit = (term) => {
        setSubmit(term);
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <SearchBar handleSubmit={handleSubmit} />
                        <SearchView
                            onCocktailSelect={onCocktailSelect}
                            cocktails={cocktailList}
                        />
                    </div>

                    <div className="col-sm-4">
                        <CocktailView cocktail={cocktail} />
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
