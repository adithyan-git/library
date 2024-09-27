import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { remove,decrement,increment,grandtotal, showStatus} from '../Redux/homeSlice';
import { Link } from 'react-router-dom';


const Addtofavorite = () => {

  const books = useSelector((state)=> state?.homebooks?.items ?? [] )
  const TotalPrice = useSelector((state)=>state.homebooks.grandtotalprice)

  console.log("totalprice==",TotalPrice);
  

  console.log("singleboook=",books);
 
  const dispatch = useDispatch()

  dispatch(grandtotal())

 

  return (

   <Container fluid className='table-container'>
    <Row>

      <Col lg={12}>
         <div className='fav-head' >
            <h3>Favorite-Items </h3>
         </div>
      </Col>

      <Col lg={12}>
          <div className='fav-total'>
             <label> Total-items :- {books.length}</label>
          </div>
      </Col>
      <Col>
      <div className='favorite-table'>
     <Table striped bordered hover >
    <thead>
      <tr >
       <th>No</th>
        <th className='img-head'>BookImage</th>
        <th>BookName</th>
        <th>Author</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity</th>
        <th></th>
        <th></th>
      </tr>
    </thead>

    <tbody >
    {books.map((book,index) => (
  <tr key={book.id}>
    <td>{index+1}</td>
    <td>
      <img className="w-100" src={book.Image} alt="" />
    </td>
    <td className='bookname'>{book.Bookname}</td>
    <td className='bookname'>{book.Author}</td>
    <td className='bookname'>{book.Description}</td>
    <td className='bookname'>{book.Price}</td>
    <td className='bookname-quantity'><span className='span-increment'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-square svg1" viewBox="0 0 16 16" onClick={()=>dispatch(decrement(book))}>
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>{book.quantity}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square svg2" viewBox="0 0 16 16" onClick={()=>{dispatch(increment(book))}}>
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></span></td>
   
  
    <td><Link to='/availablebooks'><Button className='buy-btn' onClick={()=>dispatch(showStatus(book))} >Buy Now</Button></Link></td>
    <td>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash delete" viewBox="0 0 16 16"  onClick={() => dispatch(remove(book))}>
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
    </td>
  </tr>
))}

<tr >
  <td className='totalprice-data' colSpan={5}></td>
 
  <td colSpan={4}> Totalprice {TotalPrice}</td>
</tr>
    </tbody>
    </Table>
   </div>
      </Col>
    </Row>
   </Container>
  )
}
export default Addtofavorite