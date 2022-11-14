import React from 'react';
import { Card, Row, Col, Ratio } from 'react-bootstrap';
const videoComponent = (props: any) => {
  const { title, videoId } = props;
  return (
    <Row xs={1} md={2} className="g-4 rr">
      <Col>
        <Card>
          <div>
            <Ratio aspectRatio="16x9">
            <iframe className="bo" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </Ratio>
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div>
              <p title="verify">
                {' '}
                <span>
                  {' '}
                  <i className="gg-check-o"></i>{' '}
                </span>{' '}
              </p>
              <span className="verify">verify</span>
              <span>{Math.floor(Math.random() * 10) + 1}M </span> view
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default videoComponent;
