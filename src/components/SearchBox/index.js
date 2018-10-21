// @flow
import * as React from 'react';
import Classes from './SearchBox.module.css';

type Props = {
  doSearch: Function,
  searchTerm: string,
  onChange: Function,
}

const SearchBox = (props: Props) => {
  const { doSearch, searchTerm, onChange } = props;
  return (
    <div className={Classes.searchWrapper}>
      <div className={Classes.searchInner}>
        <input
          id="searchTerm"
          name="searchTerm"
          className={Classes.inputBox}
          type="text"
          value={searchTerm}
          onChange={onChange}
          placeholder="Search a city"
        />
        <button
          className={Classes.button}
          type="submit"
          onClick={doSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
