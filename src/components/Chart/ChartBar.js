import './ChartBar.css';

const ChartBar = props => {
  let barFill = '0%';

  if (props.max) {
    barFill = Math.round((props.value / props.max) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar_inner">
        <div classNam="chart-bar_fill" style={{ height: barFill }}></div>
      </div>
      <div className="chart-bar_label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
