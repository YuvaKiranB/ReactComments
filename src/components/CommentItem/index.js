// Write your code here

import './index.css'

import {formatDistanceToNow} from 'date-fns'

const GetComment = props => {
  const {commentData, onLike, onDelete} = props
  const date = formatDistanceToNow(new Date())
  const {id, name, comment, color, isLiked} = commentData

  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const buttonStyle = isLiked ? 'liked' : 'notLiked'

  const likeComment = () => {
    onLike(id)
  }

  const deleteComment = () => {
    onDelete(id)
  }

  return (
    <li className="main2">
      <div className="content">
        <div className={`profile ${color}`}>{name.slice(0, 1)}</div>
        <div className="text">
          <div className="header">
            <h1 className="h2">{name}</h1>
            <p className="p4">{date}</p>
          </div>
          <p className="p5">{comment}</p>
        </div>
      </div>
      <div className="buttonsContainer">
        <div className="likesContainer">
          <img className="image2" src={imageUrl} alt="isLiked" />
          <button
            onClick={likeComment}
            className={`button2 ${buttonStyle}`}
            type="button"
          >
            Like
          </button>
        </div>
        <button
          data-testid="delete"
          onClick={deleteComment}
          className="button3"
          type="button"
        >
          <img
            alt="delete"
            className="image3"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <hr className="hr2" />
    </li>
  )
}

export default GetComment
