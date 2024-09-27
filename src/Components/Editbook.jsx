import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useParams} from 'react-router-dom'
import {setBookname,setAuthorname,setPrice,setDescription,setCategory,setImage,proceed } from '../Redux/homeSlice' 
import { useDispatch, useSelector } from 'react-redux'


const Editbook = () => {

    const dispatch = useDispatch()
    const bookName = useSelector((state)=>state.homebooks.bookname)
    const authorName = useSelector((state)=>state.homebooks.authorname)
    const itemPrice = useSelector((state)=>state.homebooks.pricevalue)
    const itemDescription = useSelector((state)=>state.homebooks.description)
    const itemCategory = useSelector((state)=>state.homebooks.category)
    const itemImage = useSelector((state)=>state.homebooks.image)
    console.log('im=',itemImage);
    
    const {id} = useParams()

  return (
   <Container fluid className='edit-container'>
        <Row>
            <Col className='mx-auto edit-col' lg={6}>
                <Form>
                    <Form.Group className='mb-3' controlId='formgroup1'> 
                        <Form.Label className='label' > Bookname</Form.Label>
                        <Form.Control type='text' placeholder='enter the bookname' value={bookName} onChange={(e)=>{dispatch(setBookname(e.target.value))}}/>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formgroup2'>
                        <Form.Label className='label'>Author</Form.Label>

                        <Form.Control type='text' placeholder='author name' value={authorName} onChange={(e)=>dispatch(setAuthorname(e.target.value))}/>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formgroup3'>
                        <Form.Label className='label'>Price</Form.Label>
                        <Form.Control type='number' placeholder='enter the price' value={itemPrice} onChange={(e)=>dispatch(setPrice(e.target.value))}/>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formgroup3'>
                        <Form.Label className='label'>description</Form.Label>
                        <Form.Control type='text' placeholder='enter the description' value={itemDescription} onChange={(e)=>dispatch(setDescription(e.target.value))}/>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formgroup3'>
                        <Form.Label className='label'>Category</Form.Label>
                        <Form.Control type='text' placeholder='enter the category' value={itemCategory} onChange={(e)=>dispatch(setCategory(e.target.value))}/>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formgroup3'>
                        <Form.Label className='label'>Image</Form.Label>
                        <Form.Control type='file' onChange={(e)=>dispatch(setImage(e.target.files[0]))} />
                    </Form.Group>

                    <Link to=''><Button  onClick={(e)=>{dispatch(proceed({id,bookName,authorName,itemPrice,itemDescription,itemCategory,itemImage}))}}>proceed</Button></Link>
                </Form>
            </Col>
        </Row>
   </Container>
  )
}

export default Editbook