import React from 'react';
import { Col } from 'react-flexbox-grid';
import './Note.scss';

const Note = ({
    text,
    removeNote,
}) => {
    return(
        <Col xs={12} sm={4} md={3} lg={2} className="noteContainer">
            <div className="noteText">
                {text}
            </div>
            <button onClick={() => removeNote()} className="removeButton">
                <div className="removeHere">Remove me!</div>
            </button>
        </Col>
    )
};

export default Note;
