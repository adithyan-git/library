import React from 'react'
import { Carousel } from 'react-bootstrap'

const Carousels = () => {
  return (

        <Carousel  className='carousel-img'>
        <Carousel.Item>
        <img src="https://live.staticflickr.com/1907/45491294351_346e1f51c1_b.jpg" alt="" />

        <Carousel.Caption className='caption-1'>
            <h3>Empowering Libraries with Technology</h3>
            <p>Our Library Management System is designed to bring efficiency and ease to library operations. From tracking books to managing user accounts, we provide a seamless experience that transforms how libraries function in the digital age.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src="https://biblemeanings.net/wp-content/uploads/2023/10/brielle-name-meaning-in-bible.jpg" alt="" />
        <Carousel.Caption className='caption-2'>
            <h3>Streamline Your Library, Simplify Your Life</h3>
            <p>Experience the future of library management with our intuitive system. Whether you're organizing vast collections or managing user interactions, our solution offers a user-friendly interface that enhances productivity and keeps your library running smoothly</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src="https://reintech.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBalAzIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--75fa32d5c6d3d5a7ee87d90cbf7b21ab75569657/6s31tb5fo4xmmyhrmocjb5byxbxm" alt="" />

        <Carousel.Caption className='caption-3'>
            <h3>Revolutionizing Library Management for the Digital Age</h3>
            <p>
            Step into the digital era with our cutting-edge Library Management System. Designed to meet the evolving needs of modern libraries, our platform ensures that every book is accounted for, every user is connected, and every process is optimized for efficiency.
            </p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
  )
}

export default Carousels