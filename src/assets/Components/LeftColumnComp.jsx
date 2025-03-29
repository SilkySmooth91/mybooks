import React from 'react'
import AllTheBooksComp from './AllTheBooksComp'

export default function LeftColumnComp({ books, selectedBookId, setSelectedBookId }) {
    return (
        <AllTheBooksComp 
            books={books}
            selectedBookId={selectedBookId} 
            setSelectedBookId={setSelectedBookId} 
        />
    )
}
