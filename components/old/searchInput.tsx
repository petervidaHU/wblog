import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);

    if (value.length >= 2) {
      onSearch(value);
    }
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchValue}
        onChange={handleChange}
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => onSearch(searchValue)} edge="end">
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

export default SearchInput;
