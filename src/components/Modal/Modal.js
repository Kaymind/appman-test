import React from "react"
import { useDispatch } from "react-redux"
import { closeAddModal } from "../../redux/ui/ui.action"
import { getPokedexList } from "../../redux/pokedex/pokedex.action"
import styled from "styled-components"

import { SearchBox } from "./SearchBox/SearchBox"
import { PokedexCardList } from "../PokedexCardList/PokedexCardList"

const Modal = ({ className }) => {
  const dispatch = useDispatch()
  return (
    <div className={className}>
      <div
        className="overlay"
        onClick={() => {
          dispatch(closeAddModal())
          dispatch(getPokedexList())
        }}></div>
      <div className="card">
        <SearchBox />
        <PokedexCardList />
      </div>
    </div>
  )
}

const ModalStyled = styled(Modal)`
  > .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 999;

    > .card {
      width: 90%;
      height: 90%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      z-index: 9999;
      background-color: ${props => props.theme["Colorless"]};
    }
  }

  > .card {
    width: 90%;
    height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    z-index: 9999;
    background-color: ${props => props.theme["Colorless"]};
  }
`

export { ModalStyled as Modal }
