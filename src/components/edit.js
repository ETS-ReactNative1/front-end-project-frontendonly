import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editNote} from '../actions';
import {getNotes} from '../actions';
class Edit extends Component {

    //need to reference redux state here to change.


  state = {
        redirect: false,
        title: this.props.notes[this.props.match.params.id].title,
        content: this.props.notes[this.props.match.params.id].content,
        id: this.props.match.params.id,
        mdbid: this.props.notes[this.props.match.params.id]._id
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }
    handleButton = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.editNote(this.state)
        this.setState({title: '', content:'', id: '', mdbid: ''});
        this.props.getNotes()
        this.props.history.push('/');
    }
    
    //this.props.match.params.id

render() {
    return(
        <form className="form" onSubmit={this.handleButton} >
        <input className="form-title" name="title" value={this.state.title} onChange={this.handleChange} />
        <textarea className="form-body" rows="25" name="content" value={this.state.content} onChange={this.handleChange}></textarea>
        <button type="submit" className="submit"   >Edit</button>
        
        
        </form>


    )
}

}








const mapStateToProps = (state) => {
    console.log(state.notesReducer)
    return {
        notes: state.notesReducer.notes,
    }
}
export default connect(mapStateToProps, {editNote, getNotes})(Edit)