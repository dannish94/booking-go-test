import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
margin: 10px 0;
`

const SearchContainer = styled.div`
display:flex;
flex-direction: column;
height:250px;
background-color: #f3ce56;
padding: 24px;
min-width: 432px;
max-width: 456px;
align-items: flex-start;
position: relative;
`
const SearchHeading = styled.h2`
color: black;
font-size: 30px;
font-weight: 550;
`

const SearchLabel = styled.label`
color: black;
font-size: 16px;
font-weight: 400;
`

const SearchInput = styled.input`
width: 100%;
min-width: 425px;
height: 48px;
font-size: 1rem;
border: 1px solid #a4a4a4;
border-radius: 4px;

&:focus {
    border: 5px #f3ce56;
  }
`

class Search extends React.Component {

    render()
    {
        return (
            <SearchContainer className='search-container'>
                <SearchHeading className='search-title'>Where are you going?</SearchHeading>
                <SearchLabel className='search-label'>Pick-up Location</SearchLabel>
                <StyledDiv className='form-group'>
                    <SearchInput className='input' 
                    placeholder='city, airport, station, region and district...'/>
                </StyledDiv>
            </SearchContainer>
        )
    }
}

export default Search