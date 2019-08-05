import React, {Component} from 'react';
import cardData from '../data/cards.json';
import Card from '../card/card';
import './cardList.css';

class CardList extends Component {
  render() {
    return (
        <div className="row">
         {cardData.cards.map((data, index) => {
             return <div key={index} className="column">
                 <Card
                image={data.image}
                category={data.category}
                text={data.text}>                    
                </Card>   
                </div>
    
         })}
         </div>
      )
  }
   
}

export default CardList;
