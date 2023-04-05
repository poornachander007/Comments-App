import './index.css'

const likeImageUrl =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
const likedImgUrl =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

const CommentItem = props => {
  const {commentDetails, onDelete, onChangeLike} = props

  const {
    id,
    name,
    comment,
    initial,
    initialBgClr,
    isLiked,
    commentTime,
  } = commentDetails

  const likeUrl = isLiked ? likedImgUrl : likeImageUrl
  const likeTextClass = isLiked ? 'ActiveLike' : 'like'
  const deleteComment = () => {
    onDelete(id)
  }

  const ChangeLike = () => {
    onChangeLike(id)
  }

  return (
    <li className="comment_container">
      <div className="initialAndName_cont">
        <p className={`initialStyle ${initialBgClr}`}>{initial}</p>
        <div className="comment_details_cont">
          <p className="name">
            {name} <span className="comment_time">{commentTime}</span>
          </p>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="likeAndDelete_container">
        <div className="like_container">
          <button
            type="button"
            onClick={ChangeLike}
            className="btn"
            data-testid="like"
          >
            <img className="like_icon" src={likeUrl} alt="like" />
          </button>
          <p className={likeTextClass}>Like</p>
        </div>
        <button
          onClick={deleteComment}
          className="deleteButton"
          data-testid="delete"
          type="button"
        >
          <img
            className="delete_icon"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="hrLine" />
    </li>
  )
}

export default CommentItem
