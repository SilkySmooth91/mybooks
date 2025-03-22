import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function SingleCommentComp({reviews}) {
  return (
    <ListGroup>
        {reviews.map((review) => (
          <ListGroup.Item key={review._id} className="bg-dark text-white">
            <p>{review.author}</p>
            <strong>Rating: {review.rate}⭐</strong>
            <p className="mb-0 text-truncate">{review.comment}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
  )
}
