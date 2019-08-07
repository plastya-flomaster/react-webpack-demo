import React from 'react';
import './card.css';

class Card extends React.Component {
constructor(props){
    super(props);

    this.state = {
        isMouseOver: false,
        isClicked: false
    }
  };

  onChangeCard()
  {
      this.setState(
         { isClicked: !this.state.isClicked}
      )
  }
  onMouseOver()
  {
      this.setState(
          {isHovered: !this.state.isMouseOver}         
      )
  }
  
render(){
    //не очень поняла, как это работает
    let self = this;
    function changeCard()
    {
        if (self.state.isClicked)
        {
 return 'card-body-alternate';
        }
        else return 'card-body';
    }
    return (
        <div className={changeCard()} onClick={this.onChangeCard.bind(this)} onMouseOver={this.onMouseOver.bind(this)}>
            <img className='image' src={this.props.image} alt={this.props.description}></img>
            <h1>{this.props.category}</h1>
            <h2>{this.props.text}</h2>
        </div>
    )
};
}
    
Card.defaultProps = {
    description: 'картинка',
    category: 'название рубрики',
    text: 'Заголовок'
};
export default Card;
