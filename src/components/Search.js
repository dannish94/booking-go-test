import React, { useState } from "react";
import styled from "styled-components";
import getLocations from "../services/getLocations";
import Dropdown from "./Dropdown";

const StyledDiv = styled.div`
  margin: 10px 0;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  background-color: #f3ce56;
  padding: 24px;
  min-width: 432px;
  max-width: 456px;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  margin: 50px 50px;
`;
const SearchHeading = styled.h2`
  color: black;
  font-size: 30px;
  font-weight: 550;
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
`;

const SearchButton = styled.button`
  background-color: #039354;
  border: 1px solid transparent;
  margin: 15px 0;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  height: 56px;
  transition: background-color 0.2s;
  font-size: 24px;
  width: 100%

&:hover {
    background-color: #00874d;
  }
`;

const Search = () => {
    const [location, setLocation] = useState("");

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
    };

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
                    onChange={e => handleInput(e)}/>
                {location && 
                (<Dropdown location={location}/>)
                } 
            </StyledDiv>
            <SearchButton className="search-btn">Search</SearchButton>
        </SearchContainer>
    );
};

export default Search;
