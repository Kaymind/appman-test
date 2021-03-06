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
  
  return (
    <div className={className} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="left-section">
        <img src={pk.imageUrlHiRes} className="pokedex-image" alt={`pokedex-${pk.id}`} />
      </div>
      <div className="right-section">
        <h2 className="title">{pk.name}</h2>
        <PokedexBar label="HP" value={pk.hp} />
        <PokedexBar label="STR" value={pk.strength} />
        <PokedexBar label="WEAK" value={pk.weakness} />
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
  padding: 10px;
  position: relative;
  background-color: ${props => props.theme["cardBackground"]};
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme["cardBoxShadow"]};

  &:hover {
    box-shadow: 0 0 5px ${props => props.theme["cardBoxShadowHover"]};
  }

  > .left-section {
    width: 30%;
    min-width: 105px;
    max-width: 120px;

    > .pokedex-image {
      width: 100%;
      height: 100%;
    }
  }

  > .right-section {
    flex: 1;
    padding: 10px 0 0 10px;
    overflow: auto;

    
    ::-webkit-scrollbar {
      display: none;
    }  

    > .title {
      margin: 0;
      font-family: Gaegu;
      font-size: 2rem;
      text-transform: uppercase;
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
