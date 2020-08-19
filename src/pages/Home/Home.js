import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

import { PokedexList } from "../../components/PokedexList/PokedexList"
import { AddPokedex } from "../../components/AddPokedek/AddPokedex"
import { Modal } from "../../components/Modal/Modal"

const Home = ({ className }) => {
  const isShowModal = useSelector(state => state.ui.isShow)

  return (
    <>
      <div className={className}>
        <h1 className="title">My Pokedex</h1>
        <PokedexList />
        <AddPokedex />
      </div>
      {isShowModal ? <Modal /> : null}
    </>
  )
}

const HomeStyled = styled(Home)`
  > .title {
    text-align: center;
  }
`

export { HomeStyled as Home }
