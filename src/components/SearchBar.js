import React, { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
    const [input, setInput] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(input);
    };

    return (
        <form onSubmit={onSubmit} >
            <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                className="search-bar bg-dark"
                type="text"
                placeholder="search cocktail"
            />
        </form>
    );
};

export default SearchBar;
