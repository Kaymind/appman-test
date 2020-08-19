import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { PokedexDetailCard } from "../PokedexDetailCard/PokedexDetailCard"

const PokedexCardList = ({ className }) => {
  const pokedexList = useSelector(state => state.pokedex.pokedexList)

  return (
    <div className={className}>
      {pokedexList.map(pk => (
        <PokedexDetailCard key={pk.id} pk={pk} />
      ))}
    </div>
  )
}

const PokedexCardListStyled = styled(PokedexCardList)`
  height: 80%;
  overflow: scroll;
  padding: 20px;
`

export { PokedexCardListStyled as PokedexCardList }
