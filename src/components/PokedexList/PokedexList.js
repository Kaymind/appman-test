import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokedexList } from "../../redux/pokedex/pokedex.action"
import styled from "styled-components"

import { PokedexDetailCard } from "../PokedexDetailCard/PokedexDetailCard"

const PokedexList = ({ className }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokedexList())
  }, [dispatch])

  const myPokedexList = useSelector(state => state.pokedex.myPokedexList)

  return(
  <div className={className}>
    <div className="pokedex-list">
      {myPokedexList.map(pk => (
        <PokedexDetailCard key={pk.id} pk={pk} className="my-pokedex-card"/>
      ))}
    </div>
  </div>
)}

const PokedexListStyled = styled(PokedexList)`
  > .pokedex-list {
    width: 100%;
    height: calc(768px - 150px);
    overflow: scroll;
    padding: 10px 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;

    ::-webkit-scrollbar {
      display: none;
    }    

    > .my-pokedex-card {
      width: 49%;

      &:last-child {
        margin-bottom: 50px;
      }
    }
  }
`

export { PokedexListStyled as PokedexList }
