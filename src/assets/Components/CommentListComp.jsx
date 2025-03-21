import React from 'react'
import { ListGroup, Alert } from 'react-bootstrap'

export default function CommentListComp({reviews}) {
  if (!reviews || reviews.length === 0) {
    return (
      <Alert variant="secondary" className="text-center">
        Non ci sono ancora recensioni per questo libro. Lasciane una per primo!
      </Alert>
    )
  }
  return (
    <div className='comments-container'>
      <ListGroup>
        {reviews.map((review) => (
          <ListGroup.Item key={review._id} className="bg-dark text-white">
            <p>{review.author}</p>
            <strong>Rating: {review.rate}⭐</strong>
            <p className="mb-0 text-truncate">{review.comment}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}