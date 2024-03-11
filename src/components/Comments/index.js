import './index.css'

import {Component} from 'react'

import {v4} from 'uuid'

import GetComment from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {commentsList: [], name: '', comment: '', count: 0}

  nameUpdate = event => {
    this.setState({name: event.target.value})
  }

  commentUpdate = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment, count} = this.state

    const newComment = {
      id: v4(),
      name,
      comment,
      isLiked: false,
      color: initialContainerBackgroundClassNames[count % 7],
    }

    this.setState(previousState => ({
      commentsList: [...previousState.commentsList, newComment],
      name: '',
      comment: '',
      count: previousState.count + 1,
    }))
  }

  updateLike = id => {
    this.setState(previousState => ({
      commentsList: previousState.commentsList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  updateDelete = id => {
    this.setState(previousState => ({
      commentsList: previousState.commentsList.filter(eachItem => {
        if (id === eachItem.id) {
          return false
        }
        return true
      }),
      count: previousState.count - 1,
    }))
  }

  render() {
    const {count} = this.state
    const {name} = this.state
    const {comment} = this.state
    const {commentsList} = this.state
    return (
      <div className="main">
        <h1 className="h1">Comments</h1>
        <div className="inputContainer">
          <form id="commentForm" className="form" onSubmit={this.submitted}>
            <p className="p1">Say Something about 4.0 Technologies</p>
            <input
              onChange={this.nameUpdate}
              placeholder="Your Name"
              className="input"
              type="text"
              value={name}
            />
            <textarea
              onChange={this.commentUpdate}
              placeholder="Your Comment"
              className="textArea"
              value={comment}
            />
            <button onClick={this.addComment} type="submit" className="button">
              Add Comment
            </button>
          </form>
          <img
            className="image1"
            alt="comments"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
        </div>
        <hr className="hr" />
        <div className="count">
          <p className="p2">{count}</p>
          <p className="p3">Comments</p>
        </div>

        <ul className="ul">
          {commentsList.map(eachItem => (
            <GetComment
              onDelete={this.updateDelete}
              onLike={this.updateLike}
              commentData={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
