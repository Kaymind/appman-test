import React from "react"
import { useDispatch } from "react-redux"
import { openAddModal } from "../../redux/ui/ui.action"
import styled from "styled-components"

const AddPokedex = ({ className }) => {
  const dispatch = useDispatch()

  return (
    <div className={className}>
      <span className="add-button" onClick={() => dispatch(openAddModal())}>
        +
      </span>
    </div>
  )
}

const AddPokedexStyled = styled(AddPokedex)`
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme["bottomBarBackground"]};
  position: absolute;
  bottom: 0;
  right: 0;

  > .add-button {
    font-size: 2rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-size: 5rem;
    box-shadow: inset 0 10px 10px ${props => props.theme["bottomBarBoxShadow"]};
    color: ${props => props.theme["bottomBarTextColor"]};

    &:hover {
      cursor: pointer;
    }
  }
`

export { AddPokedexStyled as AddPokedex }
