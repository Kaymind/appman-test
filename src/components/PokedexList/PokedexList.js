import React from "react"
import styled from "styled-components"

import { PokedexDetailCard } from "../PokedexDetailCard/PokedexDetailCard"

const PokedexList = ({ className, pokedexList }) => (
  <div className={className}>
    <div className="pokedex-list">
      {pokedexList.map(pk => (
        <PokedexDetailCard key={pk.id} pk={pk} className="my-pokedex-card"/>
      ))}
    </div>
  </div>
)

const PokedexListStyled = styled(PokedexList)`
  > .pokedex-list {
    width: 100%;
    height: calc(768px - 200px);
    overflow: scroll;
    padding: 20px;
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
