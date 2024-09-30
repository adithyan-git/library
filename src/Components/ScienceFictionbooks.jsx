import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { details } from '../Redux/homeSlice';
import { addtocart } from '../Redux/homeSlice';
import { Link } from 'react-router-dom';

const ScienceFictionbooks = () => {

  const allbooks = useSelector((state)=>state.homebooks.allbookdata)
  const dispatch = useDispatch()

  console.log('allbookdata=',allbooks);
  
  const sciencefictionbooks = allbooks.filter((book)=>book.Category === "Science Fiction")

  console.log('sciencefictionbooks=',sciencefictionbooks);
  

  return (

   <Container fluid className='fiction-container'>
    <Row>
     {sciencefictionbooks.map((sciencefictionbook)=>(
       <Col sm={6} md={3} lg={2}>
          <div className='sciencefiction-maindiv'>
            <div className='fiction-img'>
             <Link to="/details"> <img src={sciencefictionbook.Image} alt=""  onClick={()=>{dispatch(details(sciencefictionbook))}}/></Link>
            </div>
            <div className='fiction-content'>

              <h6>
                  {sciencefictionbook.Bookname}
              </h6>

              <p>
                  {sciencefictionbook.Description}
              </p>
              <p>
                 $ {sciencefictionbook.Price}<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16" onClick={()=>{dispatch(addtocart(sciencefictionbook))}}>
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></span>
              </p>  
            
            </div>
          </div>
       </Col> 
     ))}
    </Row>
   </Container>
    
  )

}

export default ScienceFictionbooks