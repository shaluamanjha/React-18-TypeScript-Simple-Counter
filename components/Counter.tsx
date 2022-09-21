import * as React from 'react';
import { Card } from 'react-bootstrap';

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const descreaseCounter = () => {
    count && setCount(count - 1);
  };

  return (
    <div className="row">
      <div className="container p-4">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>React Counter</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Increase / Descrease as per need
            </Card.Subtitle>
            <Card.Text>
              <h1>{count}</h1>
            </Card.Text>
            <div className="row">
              <div className="col-6">
                <button className="btn btn-success" onClick={increaseCounter}>
                  + Increment
                </button>
              </div>
              <div className="col-6">
                <button className="btn btn-info" onClick={descreaseCounter}>
                  - Decrement
                </button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
