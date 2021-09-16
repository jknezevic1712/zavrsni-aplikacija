import React from "react";

const FilterKnjige = ({status, setStatus}) => {

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <div className="select">
            <select onChange={statusHandler} name="books" className="filter-books">
                <option value="sve">Sve</option>
                <option value="dostupne">Dostupne</option>
                <option value="nedostupne">Nedostupne</option>
            </select>
        </div>
    );
};

export default FilterKnjige;