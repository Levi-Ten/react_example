import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;


/*function App() {
  const [color, changeColor] = useState("#282c34");
  return (
    <div style={{ background: color }} id="main">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/" onClick={() => changeColor("#282c34")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" onClick={() => changeColor("#9c27b0")}>
                  Product
                </Link>
              </li>
              <li>
                <Link to="/contacts" onClick={() => changeColor("#007bff")}>
                  contacts
                </Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/contacts" component={Contacts} />
        </div>
      </Router>
    </div>
  );
}*/