import "./styles.scss";
import {Col, Row} from "react-bootstrap";
import Card from "./comps/card";


const Home = () => {

return (
<div className="h-page">
    <div className="home-cont">
        <Row className="hpage-container">
        <Col className="home-col-2">
      <Card/>
      
        </Col>
    </Row>
    </div>
   
</div>
 

);
};
export default Home;