import { parseISO, format } from 'date-fns'

const SingleComment = (props) => {
    return (
        <>
        <b>Comment:</b> {props.comment.comment}<br/>
        <b>Author:</b> {props.comment.author}<br/>
        <b>Created at:</b> {format(parseISO(props.comment.createdAt), 'dd/mm/yyy HH:mm')}
        </>
    )
}

export default SingleComment