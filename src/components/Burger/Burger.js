import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
    })
  });

  console.log(transformedIngredients);
  

  return (
    <div className={classes.Burger}>
      <h1>Hello</h1>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default Burger;