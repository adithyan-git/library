import React from 'react'
import {  Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addtocart,details ,editbook, deleteitem} from '../Redux/homeSlice'

const Availablebooks = () => {
    const allbooks = useSelector((state)=>state.homebooks.allbookdata)
    const statuscolor = useSelector((state)=>state.homebooks.color)
    const dispatch = useDispatch() 
  return (

    <Container fluid className='available-container'>
        <Row>
          <Col  lg={12}>
            <div className='add-btn'>
               <Link to='/addbook'> <Button>+AddBook+</Button></Link>
            </div>
          </Col>

          {allbooks.map((book)=>(
              <Col sm={6} md={3} lg={2} key={book.id}> 
              <div className='available-main-div'>
                  <div className='available-img-div'>
                        <Link to='/details'>  <img src={book.Image} alt="" onClick={()=>dispatch(details(book))} /></Link>
                  </div>
                  <div className='available-content-div'>
                          <h5>
                          {book.Bookname}
                          </h5>

                          <h6>
                           ~~{book.Author}
                          </h6>

                          <p>
                          {book.Description}
                          </p>

                          <span className='price-span'>
                            ${book.Price}
                          </span>

                          <span className='status' style={{color:statuscolor}}>{book.status? 'Available':'notAvailable'}</span>
                  </div>
                  <div className='action-div'>


                  <span className='span-color'>
                        <Link to={`/edit/${book.id}`} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill pen" viewBox="0 0 16 16" onClick={()=>{dispatch(editbook(book))}}>
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
                        </svg>
                        </Link>
                  </span>

                  <span  className='span-color'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3 cart" viewBox="0 0 16 16" onClick={()=>{dispatch(addtocart(book))}}>
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                      </svg>
                  </span>

                 <span  className='span-color'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash trash" viewBox="0 0 16 16" onClick={()=>{dispatch(deleteitem(book))}}>
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                      </svg>
                </span>

                </div>
                  

              </div>
          </Col>
          ))}
        </Row>
    </Container>

  )
}

export default Availablebooks