import { Component } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

class CommentsSection extends Component {
    state = {
        comments: []
    }

    componentDidMount = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.elementId, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2Mzk3NDk4NzMsImV4cCI6MTY0MDk1OTQ3M30.9HxkVc1F8bw315NS43bmQ-Dz29tRsKzF7c2XS2WjYS8"
                }
            })
            console.log(response)
            let comments = await response.json()
            this.setState({
                comments: comments
            })
            console.log(this.state.comments)
        }

        catch(error) {console.log(error)}
    }

    render() {
        return (
            <>
            <AddComment />
            <CommentsList comments={this.state.comments}/>
            </>
        )
    }
}

export default CommentsSection