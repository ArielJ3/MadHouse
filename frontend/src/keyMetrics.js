
import './keyMetrics.css';

const  KeyMetrics: React.VFC = () => {
  return (
    <div className="key-metrics">
      <div className="metrics-card">
        <div className="metrics-content">
            <p className="metrics-title">Population</p>
        </div>
        <div className="metrics-content">
            <p className="metrics-number">721K</p>
              <p className="metrics-change">+11.01%</p>
        </div>
      </div>

      <div className="metrics-card">
        <div className="metrics-content">
            <p className="metrics-title">Number of Houses</p>
        </div>
        <div className="metrics-content">
            <p className="metrics-number">367K</p>
              <p className="metrics-change">-0.03%</p>
        </div>
      </div>

      <div className="metrics-card">
        <div className="metrics-content">
            <p className="metrics-title">some metric</p>
        </div>
        <div className="metrics-content">
            <p className="metrics-number">1,156</p>
              <p className="metrics-change">+15.03%</p>
        </div>
      </div>
      <div className="metrics-card">
        <div className="metrics-content">
            <p className="metrics-title">Some Metric 2</p>
        </div>
        <div className="metrics-content">
            <p className="metrics-number">239K</p>
              <p className="metrics-change">+6.08%</p>
        </div>
      </div>
    </div>
  )
}

export default KeyMetrics;
