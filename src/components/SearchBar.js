import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmitForm} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={term}
                        //onChange={onInputeChange}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>

        </div>
    )
}


export default SearchBar;



// Using sepate function
 // const onInputeChange = (e) => {
    //     setTerm(e.target.value)
    // }