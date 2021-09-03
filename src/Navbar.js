import { Button, Container, Modal, Nav, Navbar } from "react-bootstrap";
import { Bank} from "react-bootstrap-icons";
import {useState} from "react";

const Navigation = () => {

    const [show,setShow] = useState(false);

return (      
<Navbar style={{background: "rgb(231, 236, 234)"}} variant="light">
    <Container>
    <Navbar.Brand href="/"><Bank style={{margin:"0px", padding:"0px", width:"5%"}}/> <span style={{fontWeight:"bolder"}} className="mt-2">AMANI Bank</span></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/account">My account</Nav.Link>
      <Nav.Link onClick={() => setShow(true)}>
          {/* <ArrowLeftCircleFill color={"gray"} style={{ padding:"0px", margin:"0px"}}/>  */}
          Logout</Nav.Link>
    </Nav>
    </Container>
    
           <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
   
      >
        <Modal.Header >
          <Modal.Title>Session Report</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <p className="text-center">Do you want session report and receipt for the entire session?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            No
          </Button>
          <Button variant="success">Confirm</Button>
        </Modal.Footer>
      </Modal>
  </Navbar>);
};
export default Navigation;