import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const homeSlice = createSlice({
    
    name:"homebooks",
    initialState:{
        allbookdata:[],
        countval:0,
        items:[],
        itemdetail:[],
        grandtotalprice:0,
        bookname:'',
        authorname:'',
        pricevalue:'',
        description:'',
        category:'',
        image:'',
        id:'',
        statusvalue :'',
        color:'greenyellow',
        searchbook:'',
        findedbooks:[] 
    },
        reducers:{

            getallbooks:(state,action)=>{

                
                state.allbookdata = action.payload
            },
            showStatus:(state,action)=>{
              
                const datas = state.allbookdata
                const allBooks = JSON.parse(JSON.stringify(datas));

                if (allBooks.length > 0) {
                    console.log('dummy =', allBooks); 
                } else {
                    console.log('Data is not yet loaded');
                }

                const samebook = allBooks.find((book)=> book.id === action.payload.id)  
                console.log('samebook',samebook);
                const index = state.allbookdata.findIndex((book)=>book.id === samebook.id)
                console.log('i',index); 
    
                if(samebook){
                    state.statusvalue = false
                    const res = state.statusvalue
                    state.allbookdata[index].status = res
                  
                }
                
            },
            addtocart:(state,action)=>{

                // alert("item added to favorite")
                    state.countval +=1;
                
                    console.log("state=",state.items);
              
                    const index = state.items.findIndex((item)=> item.id === action.payload.id)                 
                    console.log('index',index);
               
                if(index === -1){
                  
                    const tempvar = {...action.payload,quantity:1,price:'0'}

                    console.log("tempprice=",tempvar.price);
                    
                    tempvar.price = tempvar.Price
                    console.log("tempprice===",tempvar.price);
                    state.items.push(tempvar)
                    console.log('temp=',tempvar);

                }else{

                  state.items[index].quantity +=1
                  const final = Number( state.items[index].price )
                  console.log("final=",final);
                  
                  state.items[index].Price = Number(state.items[index].Price ) + Number ( final )
                  console.log('price');
                 
                }

                console.log("action=",action.payload);
                console.log('state=',state.items);
  
            },
            details:(state,action)=>{
                state.itemdetail = action.payload
            },
            remove:(state,action)=>{

                const index = state.items.findIndex((item)=> item.id === action.payload.id) 
                state.items.splice(index,1)
                state.countval -=1

            },
            decrement:(state,action)=>{

                const index = state.items.findIndex((item)=> item.id === action.payload.id) 
                state.items[index].quantity -=1

                const actualprice = state.items[index].price
                console.log("decrementactualPrice=",actualprice);

                state.items[index].Price = (Number( state.items[index].Price) - Number(actualprice)).toFixed(2)

                if(state.items[index].quantity === 0){
                    state.items.splice(index,1)
                    state.countval -=1
                }
  
            },
            increment:(state,action)=>{

                const index = state.items.findIndex((item)=>item.id === action.payload.id)
                state.items[index].quantity +=1   

                const actualprice = state.items[index].price
                console.log('incrementactualprice=',actualprice);

                state.items[index].Price = (Number(state.items[index].Price) + Number( actualprice)).toFixed(2)
 
            },
            grandtotal:(state)=>{

                const finalprice  = state.items.reduce((acc,currentprice)=>{
                return acc + Number( currentprice.Price);
               
             },0)
             state.grandtotalprice =( finalprice ).toFixed(2) 
             console.log("finalprice-==",finalprice);
            },
            deleteitem:(state,action)=>{
            alert('are you sure to delete this item')
               const index =  state.allbookdata.findIndex((book)=>book.id === action.payload.id)
               console.log('deleteindex==',index);
               state.allbookdata.splice(index,1)
               
            },
            setBookname:(sate,action)=>{
                sate.bookname = action.payload
                console.log('bookname===',sate.bookname);
            },
            setAuthorname:(state,action)=>{
                state.authorname = action.payload
                console.log('authorname=',state.authorname);
                
            },
            setPrice:(state,action)=>{
                state.pricevalue = action.payload
                console.log('price=',state.pricevalue);
            },
            setDescription:(state,action)=>{
                state.description = action.payload
                console.log('description=',state.description);
            },
            setCategory:(state,action)=>{
                state.category = action.payload
                console.log('category=',state.category);
            },
            setImage:(state,action)=>{
                state.image = action.payload
                console.log('image===',state.image);
            },
            setid:(state,action)=>{
                state.id = action.payload
            },
            submit:(state,action)=>{

                const ids = uuid()
                let uniqueid = ids.slice(0,8)

                let bookName = state.bookname,
                authorName = state.authorname,
                bookPrice = state.pricevalue,
                bookDescription = state.description,
                bookCategory = state.category,
                bookImage = state.image
              
                const addbook = { id:uniqueid,
                    Bookname : bookName,
                    Author : authorName,
                    Price : bookPrice,
                    Description : bookDescription,
                    Category : bookCategory,
                    Image : bookImage  
                }
                const all = state.allbookdata
                state.allbookdata = [...all ,addbook]
                console.log('push=',state.allbookdata);
                
                if(submit){                   
                    alert('successfully added book')
                  }else{
                    alert('please add book')
                  }
            
            },
            editbook:(state,action)=>{
                const books = state.allbookdata
                const allBookitems = JSON.parse(JSON.stringify(books))
                console.log('allbooks=',allBookitems);
                
                const selectedbook = allBookitems.find((book)=>book.id === action.payload.id)
                console.log('selectedbook=',selectedbook);

                state.bookname = selectedbook.Bookname
                console.log('bookname=',state.bookname);
                state.authorname = selectedbook.Author
                console.log('authorname=',state.authorname);
                state.pricevalue = selectedbook.Price
                console.log('price=',state.pricevalue);
                state.description = selectedbook.Description
                console.log('description=',state.description);
                state.category = selectedbook.Category
                console.log('category=',state.category);
                state.image = selectedbook.Image
                console.log('image=',state.image);    
            },
            proceed:(state,action)=>{

                const books = state.allbookdata
                const allBookitems = JSON.parse(JSON.stringify(books))
                const findele = allBookitems.find((book)=>book.id === action.payload.id)
                console.log('findele=',findele);
                const index = allBookitems.findIndex((book)=> book.id === findele.id)
                console.log('index=',index);

                state.allbookdata[index].Bookname = state.bookname
                state.allbookdata[index].Author = state.authorname
                state.allbookdata[index].Price = state.pricevalue
                state.allbookdata[index].Description = state.description
                state.allbookdata[index].Category = state.category
                state.allbookdata[index].Image = state.image.files             
            },
            setSearch:(state,action)=>{
                state.searchbook = action.payload
                console.log('searchbook=',state.searchbook);
                

            },
            booksearch:(state,action)=>{
                const books = state.allbookdata
                const allBookitems = JSON.parse(JSON.stringify(books))
                const searchbook = allBookitems.filter((book)=>book.Bookname.toLowerCase().includes(state.searchbook.toLowerCase()))
                console.log('searchedbooks=',searchbook);
                state.findedbooks = searchbook
                console.log('findedbooks=',state.findedbooks);
                
                
                
            }
        }
 
});

export const {getallbooks,addtocart,details,remove,decrement,increment,grandtotal,deleteitem,setBookname,setAuthorname,setPrice,setDescription,setCategory,setImage,setid,submit,editbook,proceed,showStatus,setSearch,booksearch} = homeSlice.actions;
export default homeSlice.reducer