import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentsList = (props) => {
    return (
        <ListGroup>
            {
                props.comments.map(comment => (
                    <ListGroup.Item key={comment._id}>
                        <SingleComment comment={comment}/>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    )
}

export default CommentsList