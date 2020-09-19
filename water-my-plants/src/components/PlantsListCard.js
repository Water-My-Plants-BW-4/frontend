import React from "react";
import styled from "styled-components";

const PlantsCardWrapper = styled.div`
.list {
    border: 2px solid green;
    border-radius: 50px;
    width: 500px;
    height: 350px;
    margin: 30px 368px;
    padding: -90px 0 40px 0;
}

`;

const PlantListCard = (props) => {
  return (
    <PlantsCardWrapper>
        <div className="list">
      <div>
        <p>Nickname: {props.nickname}</p>
      </div>
      <div>
        <p>Species: {props.species}</p>
      </div>
      <div>
        <p>Frequency Value: {props.frequency_value}</p>
      </div>
      <div>
        <p>Frequency Range: {props.frequency_range}</p>
      </div>
      </div>
    </PlantsCardWrapper>
  );
};

export default PlantListCard;
