import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function SingleCommentComp({reviews}) {
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }
    return new Date(dateString).toLocaleDateString('it-IT', options)
  }
  return (
    <ListGroup>
        {reviews.map((review) => (
          <ListGroup.Item key={review._id} className="bg-dark text-white">
            <p>{review.author} <span> - {formatDate(review.createdAt)}</span></p>
            <strong>Rating: {review.rate}⭐</strong>
            <p className="mb-0 text-truncate">{review.comment}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
  )
}
