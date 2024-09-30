import React from 'react'
import { Col, Container, Row ,Form, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setBookname,setAuthorname,setPrice,setDescription,setCategory,setImage, submit } from '../Redux/homeSlice' 
import { Link } from 'react-router-dom'


const Addbook = () => {

    const dispatch = useDispatch()
  return (
    <Container fluid className='addbook-container'>
        <Row>
            <Col  lg={6} className='mx-auto add-col'>
            <Form className='form-add'>
                <Form.Group className='mb-3' controlId='formgroup1' >
                    <Form.Label className='label' >BookName</Form.Label>
                    <Form.Control className='input'  type='text' placeholder='Enter The Bookname' required  onChange={(e)=>{dispatch(setBookname(e.target.value))}}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formgroup2'>
                    <Form.Label className='label' >Author</Form.Label>
                    <Form.Control className='input' type='text' placeholder='Enter The AuthorName' required  onChange={(e)=>{dispatch(setAuthorname(e.target.value))}}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formgroup3'>
                    <Form.Label className='label'>Price</Form.Label>
                    <Form.Control className='input' type='number' placeholder='Enter The Price' required  onChange={(e)=>{dispatch(setPrice(e.target.value))}}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formgroup4'>
                    <Form.Label className='label'>Description</Form.Label>
                    <Form.Control className='input' type='text' placeholder='Enter The Description' required  onChange={(e)=>{dispatch(setDescription(e.target.value))}}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formgroup5'>
                    <Form.Label className='label' >Category</Form.Label>
                    <Form.Control className='input' type='text' placeholder='Enter The Category' required onChange={(e)=>{dispatch(setCategory(e.target.value))}}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formgroup6'>
                    <Form.Label className='label'>Image</Form.Label>
                    <Form.Control className='input' type='file' required  onChange={(e)=>{setImage(e.target.files[0])}} />
                </Form.Group>
              <div className='sub-div'>
                <Link to='/availablebooks'><Button onClick={(e)=>dispatch(submit(e))} className='submit-btn'>Submit</Button></Link>
              </div>
             </Form>
            </Col>
            
        </Row>
    </Container>
  )
}
export default Addbook