import Button from 'react-bootstrap/Button';
import { Row, Col } from "react-bootstrap";
import { SUB_HEADER_TEXT } from "../../constants/constants";
import './subHeader.css';

export default function SubHeader() {
    return <Row className={"sub-header-container"}>
        <Col md={10} >
            {SUB_HEADER_TEXT}
        </Col>
        <Col md={2}>
            <Button variant="light">Login</Button>{' '}
            <Button variant="light">Register</Button>{' '}
        </Col>
    </Row>
}