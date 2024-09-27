import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import "./All.css" 
import { useEffect } from 'react';
import { getallbooks } from './Redux/homeSlice';
import { useDispatch } from 'react-redux';
import Addtofavorite from './Components/Addtofavorite';
import Details from './Components/Details';
import Fantasybooks from './Components/Fantasybooks';
import ScienceFictionbooks from './Components/ScienceFictionbooks';
import Historicalfictionbook from './Components/Historicalfictionbook';
import Romance from './Components/Romance';
import Mystery from './Components/Mystery';
import Thriller from './Components/Thriller';
import Horror from './Components/Horror';
import Litereryfictionbooks from './Components/Litereryfictionbooks';
import Advanture from './Components/Advanture';
import Availablebooks from './Components/Availablebooks';
import Addbook from './Components/Addbook';
import Editbook from './Components/Editbook';
import SearchedBooks from './Components/SearchedBooks';
function App() {


// const  a = [1,2,3,4];



// a.push(4)
// console.log("a",a);


  const dispatch = useDispatch()

  useEffect(() => {
    const allbooksdata = async () => {
        try {
            const res = await fetch("/books.json");
            const allbooks = await res.json();
            dispatch(getallbooks(allbooks)); // Dispatch action to store fetched data
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };
    
    allbooksdata(); // Call the fetch function

}, [dispatch]);


  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path = '/addtofavorite' element={<Addtofavorite/>}/>
      <Route path = '/details' element={<Details/>}/>
      <Route path='/fantasy' element={<Fantasybooks/>}/>
      <Route path='/sciencefiction' element={<ScienceFictionbooks/>}/>
      <Route path='/historicalfiction' element={<Historicalfictionbook/>}/>
      <Route path='/romance' element={<Romance/>}/>
      <Route path='/mystery' element={<Mystery/>}/>
      <Route path='/thriller' element={<Thriller/>}/>
      <Route path='/horror' element={<Horror/>}/>
      <Route path='/litereryficton' element={<Litereryfictionbooks/>}/>
      <Route path='/advanture' element={<Advanture/>}/>
      <Route path='/availablebooks' element={<Availablebooks/>}/>
      <Route path='/addbook' element={<Addbook/>}/>
      <Route path='/edit/:id' element={<Editbook/>}/>
      <Route path='/search' element={<SearchedBooks/>}/>
    </Routes>
   </Router>
  );
}

export default App;
