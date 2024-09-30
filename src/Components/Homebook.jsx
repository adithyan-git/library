import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../Redux/homeSlice'
import { details } from '../Redux/homeSlice'
import { Link } from 'react-router-dom';


const Homebook = () => {

    const allbooksitems = useSelector((state)=>state.homebooks.allbookdata)

    console.log("all=",allbooksitems);
    const dispatch = useDispatch()
     

  return (
  <Container fluid className='top-container'>
    <Row>
        <Col lg={12} >
               <div className='topbook-div'>
               <h1>
                Top Picks for You
                </h1>
               </div>
        </Col>
    </Row>
    <Row className='home-row'>
        {allbooksitems.map((singlebookitem,index)=>(

           index < 10 && (
                    <Col sm={6} md={4} lg={3} className='top-col ' key={singlebookitem.id}>
               
                    <div className='top-list'>
                    <div className='top-btn-div'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bag-heart-fill" viewBox="0 0 16 16"  onClick={()=>dispatch(addtocart(singlebookitem))}>
  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
                        
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16" >
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg> */}
               
                    </div>
                    <li>
                       <Link to="/details"><img src={singlebookitem.Image} alt=""  onClick={()=>dispatch(details(singlebookitem))} /></Link>
                       <div className='hombook-content'>
                       <h6>
                            {singlebookitem.Bookname}
                        </h6>
                        <p>$ {singlebookitem.Price}</p>
                       </div>
                    </li>

                   
                   
                    
                    </div>
                
            </Col>
                
           )
            
            
))}
    </Row>
  </Container>
  )
}

export default Homebook