import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Details = () => {

    const favoriteitemdetails = useSelector((state)=>state.homebooks.itemdetail)
    console.log('itemsf=',favoriteitemdetails);
    

  return (
    <Container fluid className='details-container'>
        <Row>
            <Col lg={6} >
                <div className='white-div'>
                    <div className='details-img-div'>
                        <img className='w-50' src={favoriteitemdetails.Image} alt="" />
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div  className='white-div'>
                       <div className='details-div'>
                        <h4>
                          
                            {favoriteitemdetails.Bookname}
                        </h4>
                        <p>
                            {favoriteitemdetails.Description}
                        </p>
                       
                        <h6>
                           $: {favoriteitemdetails.Price}
                          
                        </h6>  
                       <Link to='/'> <Button className='details-btn'>back</Button></Link>
                       </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Details