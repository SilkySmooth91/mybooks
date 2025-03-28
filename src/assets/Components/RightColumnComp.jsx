import React from 'react'
import CommentAreaComp from './CommentAreaComp'
import { Alert } from 'react-bootstrap'

export default function RightColumnComp({ selectedBook, selectedBookId }) {
  return (
    <>
      {selectedBook ? (
        <CommentAreaComp 
          book={selectedBook} 
          bookId={selectedBookId} 
        />
      ) : (
        <Alert variant="warning" className="mt-3">
          Seleziona un libro per visualizzare le recensioni
        </Alert>
      )}
    </>
  )
}
