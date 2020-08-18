import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItemToMyPokedexList, removeItemFromMyPokedexList } from "../../redux/pokedex/pokedex.action"
import styled from "styled-components"

import { PokedexBar } from "./PokedexBar/PokedexBar"
import { Rating } from "./Rating/Rating"

const PokedexDetailCard = ({ className, pk }) => {
  const [hover, setHover] = useState(false)
  const dispatch = useDispatch()
  const isModalShow = useSelector(state => state.ui.isShow)
  console.log(pk)
  return (
    <div className={className} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="left-section">
        <img src={pk.imageUrlHiRes} className="pokedex-image" alt={`pokedex-${pk.id}`} />
      </div>
      <div className="right-section">
        <h2 className="title">{pk.name}</h2>
        <PokedexBar label="hp" value={pk.hp} />
        <PokedexBar label="str" value={pk.strength} />
        <PokedexBar label="weak" value={pk.weakness} />
        <Rating happiness={pk.happiness} />
      </div>
      {hover ? (
        isModalShow ? (
          <span className="add-button" onClick={() => dispatch(addItemToMyPokedexList(pk))}>
            Add
          </span>
        ) : (
          <span className="add-button" onClick={() => dispatch(removeItemFromMyPokedexList(pk))}>
            X
          </span>
        )
      ) : null}
    </div>
  )
}

const PokedexDetailCardStyled = styled(PokedexDetailCard)`
  display: flex;
  height: 200px;
  padding: 20px;
  position: relative;
  background-color: ${props => props.theme["cardBackground"]};
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme["cardBoxShadow"]};

  &:hover {
    box-shadow: 0 0 5px ${props => props.theme["cardBoxShadowHover"]};
  }

  > .left-section {
    width: 30%;
    max-width: 150px;

    > .pokedex-image {
      width: 100%;
      height: 100%;
    }
  }

  > .right-section {
    flex: 1;
    padding: 10px;

    > .title {
      margin: 0;
      font-family: Gaegu;
    }
  }

  > .add-button {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 2rem;
    color: ${props => props.theme["colorAddButton"]};
    cursor: pointer;

    &:hover {
      cursor: pointer;
    }
  }
`

export { PokedexDetailCardStyled as PokedexDetailCard }
