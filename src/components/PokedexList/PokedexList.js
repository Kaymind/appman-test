import React from "react"
import styled from "styled-components"

import { PokedexDetailCard } from "../PokedexDetailCard/PokedexDetailCard"

const PokedexList = ({ className, pokedexList }) => (
  <div className={className}>
    <div className="pokedex-list">
      {pokedexList.map(pk => (
        <PokedexDetailCard key={pk.id} pk={pk} />
      ))}
    </div>
  </div>
)

const PokedexListStyled = styled(PokedexList)`
  > .pokedex-list {
    width: 100%;
    height: 85vh;
    overflow: scroll;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 200px;
    grid-gap: 10px;
  }
`

export { PokedexListStyled as PokedexList }
