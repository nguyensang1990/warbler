import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMessages, removeMessage } from '../store/actions';
import MessageItem from '../components/MessageItem';

class MessageList extends Component {
  componentDidMount () {
    this.props.fetchMessages()
      .then(() => console.log(this.props.messages));
  }

  messagesDisplay = () => {
    return this.props.messages.map(item => (
      <MessageItem
        key={item._id}
        date={item.createAt}
        text={item.text}
        username={item.user.username}
        userImage={item.user.userImage}
        removeMessage={() => this.props.removeMessage(item.user._id, item._id)}
        userId={this.props.userId}
        messageUserId={item.user._id}
      />
    ));
  }

  render () {
    return (
      <div className='row col-sm-8'>
        <div className='offset-1 col-sm-10'>
          <ul className='list-group' id='messages'>
            {this.messagesDisplay()}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  userId: state.currentUser.user.id
});

export default connect(mapStateToProps, {fetchMessages, removeMessage})(MessageList);
