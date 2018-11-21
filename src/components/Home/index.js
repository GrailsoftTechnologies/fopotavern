import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import FBEmbedFrame from '../FBEmbedFrame';


export default function Home (props) {
  return (
    <Container className="Home">
      <Row>
        <Col>
          <h1><span role="img" aria-label="thunderbolt">&#x26A1;</span> Thunderbird <span role="img" aria-label="thunderbolt">&#x26A1;</span></h1>
          <h4>is the latest from the Lightning Bar Collective</h4>
          <h3>Open 4pm-2am every day of the week</h3>
        </Col>
      </Row>
    </Container>
  );
};
