import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid className='ft-container'>
        <Row>
            <Col lg={12} >
                    <div className='ft-div'>
                        <h5>Library ManageMent System</h5>
                    </div>
            </Col>
        </Row>
        <Row>
            <Col>
            <div className='ft-para'>
                <p> © 2024 Library Management System. All rights reserved.
For inquiries or support, contact us at support@librarymanagementsystem.com.
Privacy Policy | Terms of Service</p>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer