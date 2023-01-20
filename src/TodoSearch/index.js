import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';
function TodoSearch() {
    // const [] = React.useState('');
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return (
        <input 
            className='TodoSearch'
            placeholder="Seach To-Do..." 
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
} 
export {TodoSearch};