import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
width: 50px;
padding: 10px;
background-color: rgb(91, 91, 91);;
color: white;
border-radius: 5px;
text-align: center;
height: 15px;
justify-content: center;
margin: 10px;
font-weight: 400;
font-size: 12px;
font-family: Open Sans, Segoe UI, Tahoma, sans-serif;

&.blue {
  background-color: rgb(10, 99, 176);;
}

&.red {
  background-color: rgb(150, 20, 18);
}
`

const LocationType = (props) => {
    if (props.type === "A") {
        return <StyledDiv className="type red">Airport</StyledDiv>;
    } else if (props.type === "C") {
        return <StyledDiv className="type blue">City</StyledDiv>;
    } else {
        return <StyledDiv className="type">Station</StyledDiv>;
    }
}

export default LocationType