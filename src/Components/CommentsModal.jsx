import { Component } from "react";
import { Modal, Button, Badge } from "react-bootstrap";
import CommentsSection from "./CommentsSection";

class CommentsModal extends Component {
    state = {
        isOpen: false
    };

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() {
        return (
            <>
                <div>
                    <h5><Badge bg="info" className="text-white" onClick={this.openModal}>Comments</Badge></h5>
                </div>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header>
                        <Modal.Title>Comments Section</Modal.Title>
                        <Button variant="danger" className="btn-sm" onClick={this.closeModal}>
                        X
                        </Button>
                    </Modal.Header>
                    <Modal.Body><CommentsSection id={this.props.elementId}/></Modal.Body>
                    <Modal.Footer></Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default CommentsModal