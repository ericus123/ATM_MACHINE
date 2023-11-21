import { useEffect, useState } from "react";
import { Button, Container, Modal, Nav, Navbar } from "react-bootstrap";
import { Bank } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { logout } from "./redux/actions/authSlice";


const Navigation = () => {

  const [show, setShow] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const history = useHistory();

  const dispatch = useDispatch();


  useEffect(() => {
    if (isLoggedIn) {
      history.push("/account");
    } else {
      history.push("/");
    }
  }, [isLoggedIn]);


  const handleLogout = () => {
    dispatch(logout());
    setShow(false);
  };
  return (
    <Navbar style={{ background: "rgb(231, 236, 234)" }} variant="light">
      <Container>
        <Navbar.Brand><Link to={"/"} className="text-decoration-none"><Bank style={{ margin: "0px", padding: "0px" }} /> <span style={{ fontWeight: "bolder" }} className="mt-2">BAHATI Bank</span></Link></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link to={"/account"} className="text-decoration-none"> My account</Link></Nav.Link>
          <Nav.Link onClick={() => setShow(true)}>
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
          <Button variant="success" onClick={handleLogout}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </Navbar>);
};
export default Navigation;