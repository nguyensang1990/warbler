import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewMessage } from '../store/actions';

class MessageForm extends Component{
    state= {
        message: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.postNewMessage(this.state.message);
        this.setState({ message: '' })
        this.props.history.push('/')
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} >
            {this.props.errors.message &&(
                <div className='alert alert-danger'>
                    {this.props.errors}
                </div>
            )}
                <input
                    type='text' 
                    className='form-control'
                    value={this.state.message}
                    onChange={e => this.setState({message: e.target.value})} 
                />
                <button type='submit' className='btn btn-success pull-right' >
                    Send
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps,{postNewMessage})(MessageForm);