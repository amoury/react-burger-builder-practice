import React from 'react';
import classes from "./BuildControls.css";
import BuildControl from '../BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' }
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>

  {
    controls.map(item => (
      <BuildControl 
        key={item.label}
        label={item.label}
        added={() => props.ingredientAdded(item.type)}
        removed={() => props.ingredientRemoved(item.type)}
      />
    ))
  }

  </div>
);

export default BuildControls;