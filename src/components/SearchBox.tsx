import React, {ChangeEvent} from 'react';

type SearchBoxProps = {
  searchField: string;
  searchChange: ChangeEvent<HTMLInputElement>;
}

const SearchBox = ({ searchfield, searchChange }: SearchBoxProps) => {
  return (
    <div className='pa2'>
      <input
        aria-label="Search"
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;