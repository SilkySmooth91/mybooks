import React from 'react'
import { Alert } from 'react-bootstrap'
import SingleCommentComp from './SingleCommentComp'

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
      <h4 className='mt-4 mb-3 text-white'>Recensioni degli utenti</h4>
      <SingleCommentComp reviews={reviews} />
    </div>
  )
}