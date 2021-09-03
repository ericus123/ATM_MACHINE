import "./styles.scss";
import {Col, Row} from "react-bootstrap";
import atm_machine from "../../assets/images/atm_machine.jpg";
import Card from "../dashboard/Card";

const Home = () => {
return (
<div className="h-page">
    <div className="home-cont">
        <Row className="hpage-container">
        <Col className="home-col-1" sm="4">
            <br/>
     <img src={atm_machine}/>
        </Col>
        <Col className="home-col-2">
      <Card/>
        </Col>
    </Row>
    </div>
   
</div>
 

);
};
export default Home;