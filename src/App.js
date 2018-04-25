import React, { Component } from 'react';
import Note from './Note/Note';
import { Row, Col } from 'react-flexbox-grid';
import './App.scss';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [],
            newNote: '',
        }
    }

    addNote = () => {
        const { newNote } = this.state;
        if (/\S/.test(newNote)) {
            this.setState(prevState => ({
                notes: [...prevState.notes, newNote],
                newNote: '',
            }));
        }
    };

    removeNote(index) {
        this.setState(prevState => ({
            notes: prevState.notes.filter((_, i) => i !== index),
        }));
    };

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({
            newNote: value,
        });
    };

  render() {
      const { newNote } = this.state;
    return (
      <Row className="pinboard">
          <Col xs={12}>
              <span className="title" data-title="You must remember about this!">You must remember about this!</span>
          </Col>
          <Col xs={12} className="addNoteContainer">
              <div className="newNote">
                <textarea
                    value={ newNote }
                    className="text"
                    onChange={this.handleChange}
                    placeholder="Enter your note"
                    maxLength="150"
                />
                  {newNote &&
                  <div className="pinButtonContainer">
                      <button onClick={this.addNote} className="pinButton">
                          <span className="buttonText">Pin me!</span>
                      </button>
                  </div>
                  }
              </div>
          </Col>
          <Row className="notes">
          {this.state.notes.map((el, index) =>
              <Note
                key={`note${index}`}
                text={el}
                removeNote={() => this.removeNote(index)}
              />)}
          </Row>
      </Row>
    );
  }
}

export default App;
