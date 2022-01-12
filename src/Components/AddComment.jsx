import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class AddComment extends Component {
    state = {
        comment: {
            comment: "",
            rate: 1,
            author: "",
            elementId: this.props.asin
        }
    }

    submitComment = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch ("https://striveschool-api.herokuapp.com/api/comments/", {
                method: 'POST',
                body: JSON.stringify(this.state.comment),
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2Mzk3NDk4NzMsImV4cCI6MTY0MDk1OTQ3M30.9HxkVc1F8bw315NS43bmQ-Dz29tRsKzF7c2XS2WjYS8"
                }
            })
            if(response.ok){
                alert('Comment posted successfully!')
            } else {
                alert('Something went wrong!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return (
            <>
            <Form onSubmit={this.submitComment}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label><b>Author:</b></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your name"
                        value={this.state.comment.author}
                        onChange={e => this.setState({
                            comment: {
                                ...this.state.comment,
                                author: e.target.value
                            }
                        })}
                    />
                </Form.Group>
                <Form.Label><b>Rating:</b></Form.Label><br/>
                <Form.Select
                    size="sm"
                    value={this.state.comment.rate}
                    onChange={e => this.setState({
                        comment: {
                            ...this.state.comment,
                            rate: e.target.value
                        }
                    })}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Select>
                <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label><b>Comment:</b></Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3} 
                        value={this.state.comment.comment}
                        onChange={e => this.setState({
                            comment: {
                                ...this.state.comment,
                                comment: e.target.value
                            }
                        })}
                    />
                </Form.Group>
                <div className="text-right">
                    <Button variant="success" type="submit">
                        Post
                    </Button>
                </div>
            </Form>
            </>
        )
    }
}

export default AddComment