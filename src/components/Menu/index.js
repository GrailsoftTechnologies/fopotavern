import React from 'react';
import { Container, Col, Row } from 'reactstrap';

export default function Menu (props) {
  return(
    <Container className="Menu">
      <Row>
        <Col>
          <h1>Eats</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xl="6">
          <h3>Foster Burger - $7</h3>
          <p>Lettuce, onion, house made pickles and thundersauce</p>
        </Col>
        <Col xl="6">
          <h3>Thunderburger (V) - $8</h3>
          <p>Vegan patty, lettuce, onion, house made pickles, thundersauce</p>
        </Col>
        <Col xl="6">
          <h3>Smoke Stack - $11</h3>
          <p>Double foster with smoked cheddar cheese, house cured prok belly, onion ring, and chiptole bbq sauce</p>
        </Col>
        <Col xl="6">
          <h3>Old Reliable (V) -$11</h3>
          <p>Homegrown smoker seitan patty, chao cheese, giatn onion ring, chiptole bbq sauce, and a big side of pickled jalapenos</p>
        </Col>
        <Col xl="6">
          <h3>Willamette Valley Veggie (V) - $11</h3>
          <p>Braised portobello mushroom, grilled seasonal squash, mama lil's peppers, beets, miso cheese spread</p>
        </Col>
        <Col xl="6">
          <h3>BBQ Bowl(V) (GF) - $9</h3>
          <p>Brown rice, homegrown smoker bbq tempeh ribs, tequila jalapeno slaw, avocado</p>
        </Col>
        <Col xl="6">
          <h3>Eat Your Greens (V) - $5</h3>
          <p>Baby greens, beets, cucumbers, croutons and other seasonal vegetables, vegan ranch</p>
        </Col>
        <Col xl="6">
          <h3>Wedge Salad - $9</h3>
          <p>Iceberg lettuce with green goddess, house cured pork belly, blue cheese, chopped hard egg, cucumber, radishes, oil-cured sun dried tomatoes, and croutons</p>
        </Col>
        <Col xl="6">
          <h3>House Cut Fries (V)</h3>
          <p>Small - $3.50</p>
          <p>Large - $5.50</p>
        </Col>
        <Col xl="6">
          <h3>Onion Rings (V)</h3>
          <p>Small - $5</p>
          <p>Large - $7</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Cocktails</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xl="6">
          <h3>Gorgeous George - $9</h3>
          <p>Burnside marionberry bourbon, lemon, peychaud's, angostura, float champagne</p>
        </Col>
        <Col xl="6">
          <h3>The Margarita - $7</h3>
          <p>Lunazul blanco, lime, agave, orange liquor, salted rim</p>
        </Col>
        <Col xl="6">
          <h3>Salem, OR - $9</h3>
          <p>Whiskey, elderflower liquer, lemon, cucumber, sugar</p>
        </Col>
        <Col xl="6">
          <h3>The Dutchman Toddy - $8</h3>
          <p>Evan Williams bourbon, smoked vanilla bean, lemon, cinnamon, cloves, served hot</p>
        </Col>
        <Col xl="6">
          <h3>The Shipwreck - $7</h3>
          <p>Rum, lime, peach, peychaud's, agave</p>
        </Col>
        <Col xl="6">
          <h3>The 6AM to Iceland - $7</h3>
          <p>Reyka vodka, lime, orange bitters, cock n bull</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Combos</h1>
        </Col>
      </Row>
      <Row>
        <Col xl="6">
          <h3>#1 Tullamore Dew + Olympia - $8</h3>
        </Col>
        <Col xl="6">
          <h3>#2 Milagro Silver + Tecate - $9</h3>
        </Col>
        <Col xl="6">
          <h3>#3 Jack Daniels + Bud Bottle - $8</h3>
        </Col>
        <Col xl="6">
          <h3>#4 Monkey Shoulder + Cider Back - $9</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Beer & Wine</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xl="6">
          <h3>Cans</h3>
          <p>Tecate $3</p>
          <p>PBR $3</p>
          <p>Olympia $2</p>
          <p>Montucky $3</p>
          <p>Stiegl Raddler $5</p>
          <p>2 Towns Bright Cider $5</p>
        </Col>
        <Col xl="6">
          <h3>Bottles</h3>
          <p>Budweiser $3</p>
          <p>Dos XX $3</p>
          <p>Stella $5</p>
        </Col>
        <Col xl="6">
          <h3>Wine</h3>
          <p>Firesteed Pinot Noir - $7</p>
          <p>Cooper Hill Pinot Gris - $7</p>
          <p>Acrobat Rose $8</p>
        </Col>
      </Row>
    </Container>
  );
};
