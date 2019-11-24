import React, { Component } from "react";
import OneCard from './OneCard'
// import { Card, CardGroup, Button,CardDeck,CardColumns } from "react-bootstrap"

export default class MainCont extends Component {
  render() {
    //map the card elm
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
         <OneCard> </OneCard>
         <OneCard> </OneCard>
         <OneCard> </OneCard>
         <OneCard> </OneCard>

         </div>
      
    );
  }
}
