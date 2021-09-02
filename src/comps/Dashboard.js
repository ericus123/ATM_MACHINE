import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import BalanceCard from "./dashboard/balanceCard";
import Transactions from "./dashboard/Transactions";
import "./sass/styles.scss";
import atm_machine from "../assets/images/atm_machine.jpg";
import { useState } from "react";
import { Coin, CurrencyExchange } from "react-bootstrap-icons";

const  Dashboard = () => {
const[show,setShow] = useState(false);
const handleClose = () => setShow(false);
const [amount,setAmount] = useState("");
console.log(amount);
const [modal,setModal] = useState("request");
const [paymentType,setPaymentType] = useState("cash");
const [cashShow, setCashShow] = useState(false);
const [chequeShow, setChequeShow] = useState(false);
const [confirmShow, setConfirmShow] = useState(false);

return (    

    <div className="dashboard">
           <Row className="dash-row1">
               <Col className="dash-row1-col1">
                   <BalanceCard/>
               </Col>
                <Col className="dash-row1-col2">
                    <Container>
                <h1>Deposit</h1>
                <Row>
                    <Col sm="8"><p>
                Lorem Ipsum is simply dummy text of the
                 printing and typesetting industry. Lorem Ipsum has been
                 the standard dummy text ever since the 1500s
                </p></Col>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
</svg>
                    </Col>
                   
                </Row> <Button className="deposit-btn" variant="success" onClick={() => {setShow(true); setModal("request");}}>Deposit</Button>
                </Container>
                
               </Col>
           </Row>
           <Row className="dash-row2"> 
               <Col className="dash-row2-col1">
                   <Row><Col className="row2-col2" sm="4">
                       <img src={atm_machine}/>
                       </Col>
                       <Col>
                       
                   <Transactions/>
                   </Col>
                   </Row>
               </Col>
           </Row>
             <Modal
        show={show && modal === "request"}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
   
      >
        <Modal.Header >
          <Modal.Title>Deposit Request</Modal.Title>
        </Modal.Header>
        <Modal.Body >
  <Row>
      <Button className="method-1" onClick={() => {setPaymentType("cash"); setShow(false); setCashShow(true);}}> <Coin/>Cash</Button>
      <Button className="method-2" onClick={() => {setPaymentType("cheque"); setShow(false); setChequeShow(true);}}><CurrencyExchange/> Cheque </Button>
  </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
       <Modal
        show={cashShow && paymentType === "cash"}
        onHide={() => {setCashShow(false);}}
        backdrop="static"
        keyboard={false}
   
      >
        <Modal.Header >
          <Modal.Title>Deposit Request</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control className="for-amount" type="number" placeholder="Enter amount" onChange={({target}) => setAmount(target.value)} />
  </Form.Group>

</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setCashShow(false)}>
            Close
          </Button>
          <Button variant="success" onClick={() => {setModal("confirm"); setCashShow(false); setConfirmShow(true);}}>Continue</Button>
        </Modal.Footer>
      </Modal>
        <Modal
        show={chequeShow && paymentType === "cheque"}
        onHide={() => setChequeShow(false)}
        backdrop="static"
        keyboard={false}
   
      >
        <Modal.Header >
          <Modal.Title>Deposit Request</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Text className="text-muted">
    Cheque code is a unique cheque identifier code.
    </Form.Text>
    <Form.Control className="for-amount" type="text" placeholder="Enter cheque code" onChange={({target}) => setAmount(target.value)} />
  </Form.Group>

</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setChequeShow(false)}>
            Close
          </Button>
          <Button variant="success" onClick={() => { setModal("confirm"); setConfirmShow(true); setChequeShow(false);}}>Continue</Button>
        </Modal.Footer>
      </Modal>

           <Modal
        show={confirmShow }
        onHide={() => setConfirmShow(false)}
        backdrop="static"
        keyboard={false}
   
      >
        <Modal.Header >
          <Modal.Title>Confirm Deposit</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <p className="text-center">Are you sure you want to deposit 
                5544,443 RWF to your account?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setConfirmShow(false)}>
            Close
          </Button>
          <Button variant="success">Confirm</Button>
        </Modal.Footer>
      </Modal>
    </div>
);
};
export default Dashboard;