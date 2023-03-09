import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import SubHeader from './SubHeader';

export function Header() {

    return (
        <Container>
            <SubHeader></SubHeader>
            <Row>
                <Col md={4}>
                    <img src={logo}></img>
                </Col>

                <Col md={8}>
                    <Nav
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Tyres Brand </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Car Brands </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-4">Cart  </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="link-4">
                                <Form.Control
                                    type="TEXT"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}