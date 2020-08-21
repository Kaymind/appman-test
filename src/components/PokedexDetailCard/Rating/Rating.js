import React from "react"
import styled from "styled-components"
import happinessIcon from "../../../assets/images/cute.png"

const Rating = ({ className, happiness }) => {
  return (
    <div className={className}>
      {[...new Array(happiness)].map((_, index) => (
        <img key={index} src={happinessIcon} height={38} alt="hapiness-img" className="happiness-icon" />
      ))}
    </div>
  )
}

const RatingStyled = styled(Rating)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;

  > .happiness-icon {
    margin-right: 2px;
    margin-bottom: 2px;
  }
`

export { RatingStyled as Rating }
