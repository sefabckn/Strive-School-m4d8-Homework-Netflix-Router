import { useState } from 'react';
import {Component} from 'react'
import CommentsModal from './CommentsModal';
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
const SingleMovie = ({src, title, id}) =>{

 /*  state = {
    selected: false
  } */
  const [selected, setSelected] = useState(false)
  const navigate = useNavigate()
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 px-1 mb-4 mb-lg-0">
          <img src={src} className="w-100 img-fluid" alt="movie"
          style={{height:'120px', objectFit:'cover', objectPosition:'50% 0%'}}
          onClick={() => setSelected( selected )}
          />
          <p>{title}</p>
          {selected && <CommentsModal/>}
          
          <Button variant='info' onClick={() => navigate("/details/:" + id)}>
           Movie Details
          </Button>
      </div>
      )
  
  
}
export default SingleMovie;