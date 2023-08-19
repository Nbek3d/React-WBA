import React from 'react';
import Card from './card'; 
import  './index.css';

class App extends React.Component {
  render() {
    const fruits = [
      {
        name: 'Apple',
        img: 'https://cdn.pixabay.com/photo/2016/11/14/04/08/apple-1822444_1280.jpg'
      },
      {
        name: 'Banana' ,
        img: 'https://cdn.pixabay.com/photo/2018/03/10/17/51/bananas-3219469_1280.jpg'
      },
      {
        name: 'Orange',
        img: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/orange-1995056_1280.jpg'
      },
      {
        name: 'Grapes',
        img: 'https://cdn.pixabay.com/photo/2016/11/23/15/24/grapes-1854193_1280.jpg'
      },
      {
        name: 'Strawberry',
        img: 'https://cdn.pixabay.com/photo/2016/02/19/11/30/strawberries-1209239_1280.jpg'
      },
      {
        name: 'Watermelon',
        img: 'https://cdn.pixabay.com/photo/2016/08/10/15/10/watermelon-1589867_1280.jpg'
      },
      {
        name: 'Pineapple',
        img: 'https://cdn.pixabay.com/photo/2016/08/03/09/19/pineapple-1563988_1280.jpg'
      },
      {
        name: 'Mango',
        img: 'https://cdn.pixabay.com/photo/2016/03/27/18/20/mango-1283330_1280.jpg'
      },
      {
        name: 'Pear',
        img: 'https://cdn.pixabay.com/photo/2016/03/27/22/42/pear-1283951_1280.jpg'
      },
      {
        name: 'Cherry',
        img: 'https://cdn.pixabay.com/photo/2017/06/27/00/10/cherry-2445285_1280.jpg'
      },
      {
        name: 'Kiwi',
        img: 'https://cdn.pixabay.com/photo/2015/03/26/09/58/kiwi-690558_1280.jpg'
      },
      {
        name: 'Peach',
        img: 'https://cdn.pixabay.com/photo/2018/07/09/10/41/peach-3523649_1280.jpg'
      },
      {
        name: 'Plum',
        img: 'https://cdn.pixabay.com/photo/2014/09/18/20/17/plum-452340_1280.jpg'
      },
      {
        name: 'Lemon',
        img: 'https://cdn.pixabay.com/photo/2016/03/05/20/34/lemon-1231124_1280.jpg'
      },
      {
        name: 'Raspberry',
        img: 'https://cdn.pixabay.com/photo/2016/07/13/16/05/raspberries-1511771_1280.jpg'
      }
      
    ];

    return (
      <div className='container'>
        <div className="card-container">
        {fruits.map((card, index) => (
          <Card key={index} fruitName={card.name} imageUrl={card.img} />
        ))}
      </div>
      </div>
    );
  }
}

export default App;
