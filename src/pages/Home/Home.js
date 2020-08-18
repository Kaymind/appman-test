import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokedexList } from "../../redux/pokedex/pokedex.action"
import styled from "styled-components"

import { PokedexList } from "../../components/PokedexList/PokedexList"
import { AddPokedex } from "../../components/AddPokedek/AddPokedex"
import { Modal } from "../../components/Modal/Modal"

const Home = ({ className }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPokedexList())
  }, [dispatch])

  const myPokedexList = useSelector(state => state.pokedex.myPokedexList)
  const isShowModal = useSelector(state => state.ui.isShow)

  return (
    <>
      <div className={className}>
        <h1 className="title">My Pokedex</h1>
        <PokedexList pokedexList={myPokedexList} />
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
