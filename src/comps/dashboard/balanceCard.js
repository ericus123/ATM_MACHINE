import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import "./styles.scss";

const BalanceCard = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [amount, setAmount] = useState("");
  const [modal, setModal] = useState("request");

  return (
    <div className="bal-card">

      <Row>
        <Col className="" sm="8">
          <h6 className="my-acc-tit">My Account</h6>
          <br />
          <h6 className="bank-name">BAHATI Bank Ltd</h6>
          <br />
          <Row><Col>  <h6 className="card-num  mb-4">5556-6666-7777-6663</h6></Col><Col> <ArrowRight color={"green"} /></Col></Row>

          <Button className="widthdraw-btn" variant="success" onClick={() => { setShow(true); setModal("request"); }}> Widthdraw</Button>

        </Col>

        <Col>
          <h6 className="av-bal">Available Balance</h6>
          <br /><br />
          <h5 className="bal-num mt-3">1004.34 <span style={{ color: "gray" }}>RWF</span></h5>
        </Col>
        <Modal
          show={show && modal === "request"}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}

        >
          <Modal.Header >
            <Modal.Title>Widthdrawal Request</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className="for-amount" type="number" placeholder="Enter amount" onChange={({ target }) => setAmount(target.value)} />
              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={() => setModal("confirm")}>Continue</Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={show && modal === "confirm"}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}

        >
          <Modal.Header >
            <Modal.Title>Confirm Widthdrawal</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <p className="text-center">Are you sure you want to widthdraw {amount} from your account ?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={() => setModal("confirm")}>Confirm</Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </div>
  );
};
export default BalanceCard;