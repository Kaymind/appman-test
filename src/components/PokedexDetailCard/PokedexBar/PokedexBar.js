import React from "react"
import styled from "styled-components"

const PokedexBar = ({ className, label }) => (
  <div className={className}>
    <span className="label">{label}</span>
    <div className="progress-bar">
      <div className="level"></div>
    </div>
  </div>
)

const PokedexBarStyled = styled(PokedexBar)`
  display: flex;
  align-items: center;

  > .label {
    width: 20%;
    max-width: 100px;
    margin-right: 10px;
    font-size: 16px;
  }

  > .progress-bar {
    max-width: 300px;
    width: 70%;
    height: 24px;
    border: 1px solid ${props => props.theme["levelTubeBoxShadow"]};
    background-color: ${props => props.theme["levelTubeBackground"]};
    border-radius: 10px;
    overflow: hidden;

    > .level {
      height: 100%;
      width: ${props => props.value}%;
      background-color: ${props => props.theme["levelTubeValueBackground"]};
    }
  }
`

export { PokedexBarStyled as PokedexBar }
