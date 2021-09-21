import React, { Component } from 'react';
import './css/main.css';
import PropTypes from 'prop-types';
import ItemClass from './ItemClass';


export default class ShopItemClass extends Component {
  constructor(props) {
    super(props);
    const item = props.item;
    this.title = item.title;
    this.description = item.description;
    this.brand = item.brand;
    this.currency = item.currency;
    this.descriptionFull = item.descriptionFull;
    this.price = item.price
  }

  render() {
    
    return (
      <div>
        <div className="main-content">
        <h2>{this.brand}</h2>
        <h1>{this.title}</h1>
        <h3>{this.description}</h3>
        <div className="description">{this.descriptionFull}</div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{this.currency}, {this.price}</div>
          <button>Добавить в корзину</button>
        </div>
        </div>
      </div>
    )
  }
}

ShopItemClass.propTypes={
  item:PropTypes.instanceOf(ItemClass).isRequired
}