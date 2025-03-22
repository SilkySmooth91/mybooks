import React, { useEffect, useState, useCallback } from 'react'
import AddCommentComp from './AddCommentComp'
import CommentListComp from './CommentListComp'

export default function CommentAreaComp({ book, bookId }) {
    const [reviews, setReviews] = useState([]);

    const fetchReviews = useCallback(async () => {
        if (!bookId) return;
        
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/books/" + book.asin + "/comments/", {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkZmJjMjFlMTQwNjAwMTUzMTRkMmEiLCJpYXQiOjE3NDI1ODA2NDIsImV4cCI6MTc0Mzc5MDI0Mn0.a8BdwHTz9pB4-btjBrwLz6BxrO2tq8bHLUeqdFLO2KM"
                }
            });
            if (response.ok) {
                const data = await response.json();
                setReviews(data);
            }
        } catch (error) {
            console.error("Errore:", error);
        }
    }, [bookId, book?.asin]);

    useEffect(() => {
        fetchReviews();
    }, [fetchReviews]);

    return (
        <>
            <AddCommentComp bookId={book.asin} onCommentAdded={fetchReviews}/>
            <CommentListComp reviews={reviews}/>
        </>
    )
}