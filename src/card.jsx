import React from 'react';
import './index.css'; 

class Card extends React.Component {
  render() {
    const { fruitName, imageUrl } = this.props; // Props to receive fruit data

    return (
      <div className="card">
        <img className="card-img" src={imageUrl} alt={fruitName} />
        <h3 className="card-title">{fruitName}</h3>
      </div>
    );
  }
}

export default Card;
