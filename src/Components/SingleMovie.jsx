import { useState } from 'react';
import {Component} from 'react'
import CommentsModal from './CommentsModal';


const SingleMovie = ({src, title}) =>{

 /*  state = {
    selected: false
  } */
  const [selected, setSelected] = useState(false)

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 px-1 mb-4 mb-lg-0">
          <img src={src} className="w-100 img-fluid" alt="movie"
          style={{height:'120px', objectFit:'cover', objectPosition:'50% 0%'}}
          onClick={() => setSelected( !selected )}
          />
          <p>{title}</p>
          {selected && <CommentsModal/>}
          {console.log(src)}
      </div>
      )
  
  
}
export default SingleMovie;