import './Card.css';
//Used for styling divs
const Card = props => {
  //Adding classNames to wrapper
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
