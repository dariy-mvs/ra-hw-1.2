import React from 'react';

export default class ItemClass {
  constructor(brand, title, description, descriptionFull, price, currency){
      this.brand = brand;
      this.title = title;
      this.description = description;
      this.descriptionFull = descriptionFull;
      this.price = price;
      this.currency = currency;
  }
}