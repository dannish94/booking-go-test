import React from "react";
import styled from 'styled-components';
import LocationType from './LocationType'

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
font-size: 10px;
margin: 0 0 0 30px;
width: 80%;
align-self: flex-start;
text-align: left;
justify-content: space-evenly;
height: inherit;
`
const DropdownContainer = styled.div`
`

const StyledList = styled.li`
list-style: none;
height: auto;
border-bottom: 1px solid rgb(189, 187, 187);
display: flex;
flex-direction: row;
font-size: 20px;
transition: 0.3s;
cursor: pointer;

&:last-child {
    border: none;
  }

  &:hover {
    background-color: #e7f4fe;
  }
`

const StyledH2 = styled.h2`
font-family: Open Sans, Segoe UI, Tahoma, sans-serif;
font-size: 14px;
margin: 0;
padding-top: 7.5px;
font-weight: 400;
color: black;
`
//extend StyledH2 styles to add or overwrite styles
const StyledH2Region = styled(StyledH2)`
font-size: 11px;
font-weight: 300;
`
const Dropdown = (props) => {
    if (props.location && props.location !== '') {
        return props.location.map((item, key) => {
            // console.log('what is in item',item.placeType);
            return (
                <DropdownContainer className='dropdown-container' key={key}>
                    <StyledList className='location-item'>
                        <LocationType type={item.placeType}/>
                        <StyledDiv className='location-details'>
                            <StyledH2 className='location-name'>{item.name}</StyledH2>
                            <StyledH2Region className='location-region'>{`${item.region}, ${item.country}`}</StyledH2Region>
                        </StyledDiv>
                    </StyledList>
                </DropdownContainer>
            )
        })
    }
    else {
        return (
            <li className="dropdown-item">
                <h2 className="location-no-results">No Results Found</h2>
            </li>
        )
    }

}

export default Dropdown