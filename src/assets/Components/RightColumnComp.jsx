import React, { useState } from 'react'
import CommentAreaComp from './CommentAreaComp'
import AddCommentComp from './AddCommentComp'
import { Alert } from 'react-bootstrap'

export default function RightColumnComp({ selectedBook, bookId }) {
  const [refresh, setRefresh] = useState(false)

  return (
    <>
      {selectedBook ? (
        <>
          <CommentAreaComp 
            bookId={bookId} 
            refresh={refresh}
          />
          <AddCommentComp 
            bookId={bookId} 
            onCommentAdded={() => setRefresh(prev => !prev)} 
          />
        </>
      ) : (
        <Alert variant="warning" className="mt-3">
          Seleziona un libro per visualizzare le recensioni
        </Alert>
      )}
    </>
  )
}
