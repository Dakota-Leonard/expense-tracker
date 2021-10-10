//Used for styling divs
import './Card.css';
function Card(props) {
  //Adding classNames to wrapper
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
