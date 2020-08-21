import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchedPokedex, getPokedexList } from '../../../redux/pokedex/pokedex.action';
import styled from 'styled-components';

import searchImg from '../../../assets/images/search.png';

const SearchBox = ({ className }) => {
  const inputRef = useRef(null);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current.value === searchText) {
        if(searchText !== '') {
          dispatch(getSearchedPokedex(searchText));
        } else {
          dispatch(getPokedexList());
        }
      }
    }, 500);
  }, [searchText, dispatch, inputRef]);

  return (
    <div className={className}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Find pokemon"
        className="search-input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <img src={searchImg} className="search-image" alt="search-img" />
    </div>
  );
};

const SearchBoxStyled = styled(SearchBox)`
  position: relative;
  padding: 10px;
  width: 100%;
  height: 10%;

  > .search-input {
    width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid ${props => props.theme['searchBoxBorder']};
    border-radius: 10px;
    font-size: 2rem;
    font-family: Gaegu;
    padding-right: 50px;
  }

  > .search-image {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    height: 80%;
  }
`;

export { SearchBoxStyled as SearchBox };
