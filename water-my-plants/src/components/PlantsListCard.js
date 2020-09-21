import React from "react";
import styled from "styled-components";
import img from "../img/cardBg.jpg";
const PlantsCardWrapper = styled.div`

.list {
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
    border: 2px solid green;
    border-radius: 80px;
    width: 500px;
    height: 300px;
    margin: 30px 368px;
    padding: -90px 0 40px 0;
}
.child{
  backdrop-filter: blur(5px);  
  -webkit-backdrop-filter: blur(5px);
  margin: 0px 70px 0 70px;
}

`;

const PlantListCard = (props) => {
  return (
    <>
    <PlantsCardWrapper>
       <h1>#{props.i}</h1>
        <div className="list">
       
      <div className="child">
        <p>Nickname: {props.nickname}</p>
      </div>
      <div  className="child">
        <p>Species: {props.species}</p>
      </div>
      <div  className="child">
        <p>Frequency Value: {props.frequency_value}</p>
      </div>
      <div  className="child">
        <p>Frequency Range: {props.frequency_range}</p>
      </div>
      </div>
    </PlantsCardWrapper>
     <button>Update</button>
     <button>Delete</button>
     </>
  );
};

export default PlantListCard;
