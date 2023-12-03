import logo from './logo.svg';
import './keyMetrics.css';

const  KeyMetrics: React.VFC = () => {
  return (
    <div className="key-metrics">
      <div className="metrics-card">
        <div className="metrics-content">
          <div className="metrics-text">
            <p className="text-1">Population</p>
          </div>
        </div>
        <div className="content">
          <div className="text">
            <p className="text-2">721K</p>
          </div>
          <div className="icon-text">
            <div className="text">
              <p className="text-3">+11.01%</p>
            </div>
            <div className="icon-set">
              <img src="" />
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <div className="text">
            <p className="text-5">Number of Houses</p>
          </div>
        </div>
        <div className="content">
          <div className="text">
            <p className="text-6">367K</p>
          </div>
          <div className="icon-text">
            <div className="text">
              <p className="text-7">-0.03%</p>
            </div>
            <div className="icon-set">
              <img src="" />
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <div className="text">
            <p className="text-9">some metric</p>
          </div>
        </div>
        <div className="content">
          <div className="text">
            <p className="text-1-0">1,156</p>
          </div>
          <div className="icon-text">
            <div className="text">
              <p className="text-1-1">+15.03%</p>
            </div>
            <div className="icon-set">
              <img src="" />
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <div className="text">
            <p className="text-1-3">Some Metric 2</p>
          </div>
        </div>
        <div className="content">
          <div className="text">
            <p className="text-1-4">239K</p>
          </div>
          <div className="icon-text">
            <div className="text">
              <p className="text-1-5">+6.08%</p>
            </div>
            <div className="icon-set">
              <img src="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyMetrics;
