import React, {useContext, useState} from 'react';
import {AlertContext}                from '../context/alert/AlertContext';
import {GithubContext}               from '../context/github/githubContext';

const Search = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const github = useContext(GithubContext);

    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return;
        }
        if (value.trim()) {
            github.search(value.trim());
            alert.hide();
        } else {
            github.clearUsers();
            github.show('Enter User To Find!');
        }
    };
    return (
        <div className='form-group'>
            <input
                type="text"
                className='form-control'
                placeholder='Enter Users Nickname'
                value={value}
                onChange={(event => setValue(event.target.value))}
                onKeyPress={onSubmit}
            />
        </div>
    );
};

export default Search;
