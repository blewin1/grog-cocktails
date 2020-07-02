import React, { useState } from 'react';
import "./searchBar.scss"

const SearchBar = ({ enabled=true, handleSubmit, placeholder="" }) => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const submitForm = (e) => {
        e.preventDefault();
        handleSubmit(value);
        setValue('');
    }

    return (
        <div className="search-bar">
            <form onSubmit={submitForm}>
                <input className="field" type="text" placeholder={placeholder} value={value} onChange={handleChange} disabled={!enabled} />
                <input className="submit" type="submit" />
            </form>
        </div>
    );
}

export default SearchBar;