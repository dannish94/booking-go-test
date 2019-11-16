import React, { useState } from "react";
import styled from "styled-components";
import getLocations from "../services/getLocations";
import Dropdown from "./Dropdown";

const StyledDiv = styled.div`
  margin: 10px 0;
  z-index: 10
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  background-color: #f3ce56;
  padding: 24px;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  margin: 50px 50px;

  @media (max-width: 700px) {
    width: 90%;
    margin: 10px 10px;
    height: 50%;
    padding: 5px 0 0 15px;
  }
`;
const SearchHeading = styled.h2`
  color: black;
  font-size: 30px;
  font-weight: 550;

  @media (max-width: 700px) {
    font-size: 28px;
  }
`;

const SearchLabel = styled.label`
  color: black;
  font-size: 16px;
  font-weight: 400;
`;

const SearchInput = styled.input`
  width: 97%;
  min-width: 425px;
  height: 48px;
  font-size: 1rem;
  border: 1px solid #a4a4a4;
  border-radius: 4px;
  padding-left: 10px;

  &:focus {
    border: 5px #f3ce56;
  }

  @media (max-width: 700px) {
    min-width: 350px;
    max-width: 350px;
  }

  @media (max-width: 400px) {
    min-width: 300px;
    max-width: 300px;
  }

`;

const SearchButton = styled.button`
  position: absolute;
  bottom: 0;
  background-color: #039354;
  border: 1px solid transparent;
  margin: 15px 0;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  height: 56px;
  transition: background-color 0.2s;
  font-size: 24px;
  width: 90%

&:hover {
    background-color: #00874d;
  }
`;

const StyledUL = styled.ul`
background-color: white;
border-radius: 0 0 5px 5px;
width: 100%;
top: 100%;
padding: 0px;
box-shadow: 2px 0 6px 2px rgba(0, 0, 0, 0.2);
z-index: 1;
margin: 0;

@media (max-width: 700px) {
  min-width: 360px;
  max-width: 360px;
}
@media (max-width: 400px) {
  min-width: 310px;
  max-width: 310px;
}
`

const Search = () => {
  const [location, setLocation] = useState("");
  const [results, setResults] = useState(true)

  const handleInput = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length > 1) {
      const data = await getLocations(6, value);
      if (data) {
        setLocation(data);
      } else {
        setLocation('');
      }
    }
    else {
      setLocation('')
      }
  }

  return (
    <SearchContainer className="search-container">
      <SearchHeading className="search-title">
        Where are you going?
            </SearchHeading>
      <SearchLabel className="search-label">Pick-up Location</SearchLabel>
      <StyledDiv className="form-group">
        <SearchInput
          className="input"
          placeholder="city, airport, station, region and district..."
          onChange={e => handleInput(e)}
          onBlur={() => setResults(false)}
          onClick={() => setResults(true)}
        />
        {location && results && location.length > 1 ?
          (<StyledUL>
            <Dropdown location={location} />
          </StyledUL>) : null
        }
      </StyledDiv>
      <SearchButton className="search-btn">Search</SearchButton>
    </SearchContainer>
  );
};

export default Search;
