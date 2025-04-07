import React from 'react'
import AllTheBooksComp from './AllTheBooksComp'

export default function LeftColumnComp({ books, selectedBookId, setSelectedBookId, currentCategory }) {
    return (
        <AllTheBooksComp 
            books={books}
            currentCategory={currentCategory}
            selectedBookId={selectedBookId} 
            setSelectedBookId={setSelectedBookId} 
        />
    )
}
