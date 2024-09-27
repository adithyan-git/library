import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown,Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearch } from '../Redux/homeSlice'
import { booksearch } from '../Redux/homeSlice'

const Header = () => {

  const Count = useSelector((state)=>state?.homebooks?.countval?? '')
  console.log('countt',Count);
  const dispatch = useDispatch()
  const serchresult = useSelector((state)=> state.homebooks.serchbook)
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav-color">
    <Container className='c-fluid' fluid>
      <Navbar.Brand href="#">ShelfSmart</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link  to="/"   className='link'><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
</svg>
         </Link>
        
          <NavDropdown title="category" id="navbarScrollingDropdown"> 
          <NavDropdown.Item href="/fantasy" >Fantasy</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/sciencefiction">
            Science Fiction
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/historicalfiction">
             Historical Fiction
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/romance">
            Romance
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/mystery">
            Mystery 
            </NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="/thriller">
            Thriller
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/horror">
            Horror
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/litereryficton">
            Literary Fiction
            </NavDropdown.Item>
            <NavDropdown.Divider />
        
            <NavDropdown.Item href="/advanture">
            Adventure
            </NavDropdown.Item>
       
          
          </NavDropdown>  
          <Link  to="/availablebooks" className='link-books'>
          Books
         </Link>  
        </Nav>

        <Link  to="/addtofavorite" className='link'>
        <span className='Count-span'>{Count}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
      </svg>
      </Link> 

    <Nav.Link>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
    </Nav.Link>
        <Form className="d-flex ">
          <Form.Control 
            type="text"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={serchresult}
            onChange={(e)=>dispatch(setSearch(e.target.value))}
          />
         <Link to='/search'> <Button variant="outline-success" onClick={()=>dispatch(booksearch())}>Search</Button></Link>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default Header