import { Button, Container, Form, Modal } from "react-bootstrap";
import "./styles.scss";
import { useState } from "react";

const Transactions = () => {

    const[show,setShow] = useState(false);
const handleClose = () => setShow(false);
    return (
        <Container>
          
            <Form>  <h1 className="tra-tit mb-5">Transfer</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Receivers Account Number</Form.Label>
    <Form.Control type="number" name="number" placeholder="Enter Account Number" />
    <Form.Text className="text-muted">
        Make sure that the number is correct
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Amount</Form.Label>
    <Form.Control type="number" placeholder="amount" />
  </Form.Group><Button variant="success" onClick={() => setShow(true)}>Continue</Button>
</Form>
           <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
   
      >
        <Modal.Header >
          <Modal.Title>Confirm Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <p className="text-center">Are you sure you want to send <b> 
                5544,443 RWF
            </b> to <b>JOHN Doe</b>?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Understood</Button>
        </Modal.Footer>
      </Modal>
        </Container>
    );

};

export default Transactions;