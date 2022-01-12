import {Component} from 'react'
import CommentsModal from './CommentsModal';


class SingleMovie extends Component{

  state = {
    selected: false
  }

  render(){
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 px-1 mb-4 mb-lg-0">
          <img src={this.props.src} className="w-100 img-fluid" alt="movie"
          style={{height:'120px', objectFit:'cover', objectPosition:'50% 0%'}}
          onClick={() => this.setState({ selected: !this.state.selected })}
          />
          <p>{this.props.title}</p>
          {this.state.selected && <CommentsModal/>}
          {console.log(this.props.src)}
      </div>
      )
  }
  
}
export default SingleMovie;