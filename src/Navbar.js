import { Container, Nav, Navbar } from "react-bootstrap";
import { ArrowLeftCircleFill, Bank} from "react-bootstrap-icons";

const Navigation = () => {
return (      
<Navbar style={{background: "rgb(231, 236, 234)"}} variant="light">
    <Container>
    <Navbar.Brand href="#home"><Bank style={{margin:"0px", padding:"0px", width:"5%"}}/> <span style={{fontWeight:"bolder"}} className="mt-2">AMANI Bank</span></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/account">My account</Nav.Link>
      <Nav.Link href="#pricing"><ArrowLeftCircleFill color={"red"}/></Nav.Link>
    </Nav>
    </Container>
  </Navbar>);
};
export default Navigation;