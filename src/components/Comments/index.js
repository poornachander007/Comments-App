import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentsList = [
  {
    id: uuidv4(),
    name: 'Manisha',
    comment: 'Nxtwave is a good platform.....',
    initial: 'M',
    initialBgClr: 'light-blue',
    commentTime: formatDistanceToNow(new Date(2001, 10, 28)),
    isLiked: true,
  },
  {
    id: uuidv4(),
    name: 'Poorna',
    comment: 'Nxtwave is a super platform.....',
    initial: 'P',
    initialBgClr: 'orange',
    commentTime: formatDistanceToNow(new Date(1996, 8, 18)),
    isLiked: false,
  },
]

class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentsList: []}

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  onDelete = id => {
    const {commentsList} = this.state
    const filteredCommentsList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: filteredCommentsList})
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const randomColor =
      initialContainerBackgroundClassNames[Math.ceil(Math.random() * 7)]
    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      initial: nameInput[0].toUpperCase(),
      initialBgClr: randomColor,
      commentTime: formatDistanceToNow(new Date()),
      isLiked: false,
    }
    this.setState(preState => ({
      commentsList: [...preState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeLike = id => {
    this.setState(preState => ({
      commentsList: preState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    console.log(formatDistanceToNow(new Date(2001, 10, 28)))

    const {nameInput, commentInput, commentsList} = this.state
    const count = commentsList.length
    return (
      <div className="app_container">
        <h1 className="heading">Comments</h1>
        <div className="formAndImage_container">
          <form className="userInputs_container" onSubmit={this.onClickSubmit}>
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              value={nameInput}
              type="text"
              placeholder="Your name"
              className="name_input"
              onChange={this.onChangeNameInput}
            />
            <br />
            <textarea
              rows="8"
              cols="15"
              placeholder="Your comment"
              className="comment_input"
              value={commentInput}
              onChange={this.onChangeCommentInput}
            >
              mmm
            </textarea>
            <br />
            <div>
              <button type="submit" className="add_button">
                Add Comment
              </button>
            </div>
          </form>
          <div className="img_container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
        </div>
        <hr className="new1" />
        <div>
          <p>
            <span className="comments_count">{count}</span> Comments
          </p>
        </div>
        <ul className="comments_container">
          {commentsList.map(eachCommentDetails => (
            <CommentItem
              commentDetails={eachCommentDetails}
              key={eachCommentDetails.id}
              onDelete={this.onDelete}
              onChangeLike={this.onChangeLike}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
