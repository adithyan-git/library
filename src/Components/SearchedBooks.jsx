import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { details } from '../Redux/homeSlice';
import { addtocart } from '../Redux/homeSlice';
import { Link } from 'react-router-dom';

const SearchedBooks = () => {
  const books = useSelector((state)=> state.homebooks.findedbooks) 
  console.log('books=',books);
  const dispatch = useDispatch()

  
  return (
    <Container fluid className='search-container'>
      <Row>
        {books.map((book)=>(
          <Col lg={6} key={book} className='search-col'  onClick={()=>dispatch(details(book))}>
     
    
      <div className='search-main'>
            <div className='search-details'>
                <h3>
                  {book.Bookname} 
                </h3>
                <h5>~{book.Author}~</h5>
                <h6>{book.Description}</h6>
                <p>${book.Price}</p> 
                <section className='search-section'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16" onClick={()=>dispatch(addtocart(book))}>
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                </section>
            </div>
            
            <div className='search-img'>
                <Link to='/details' className='search-link'>
                   <img src={book.Image} alt=""/>
                </Link>    
            </div>
           
          </div>
   
        </Col>
))}
      </Row>
    </Container>

  )
}

export default SearchedBooks