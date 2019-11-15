import React, { useState } from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
`
const DropdownContainer = styled.div`
`
const StyledH2 = styled.h2`

`
//extend StyledH2 styles to add or overwrite styles
const StyledH2Region = styled(StyledH2)`
`

const Dropdown = (props) => {
    if(props.location && props.location !== ''){
    return props.location.map((item, key) => {
        // console.log('what is in item',item);
        return (
            <DropdownContainer className='dropdown-container' key={key}>
            <li className='location-item'></li>
            <StyledDiv className='location-details'>
            <StyledH2 className='location-name'>{item.name}</StyledH2>
            <StyledH2Region className='location-region'></StyledH2Region>
            </StyledDiv>    
            </DropdownContainer>
        )
    })
}
else{
    return (
        <li className="dropdown-item">
        <h2 className="location-no-results">No Results Found</h2>
      </li>
    )
}

}

export default Dropdown