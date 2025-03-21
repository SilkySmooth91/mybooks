import React, { useEffect, useState } from 'react'
import AddCommentComp from './AddCommentComp'
import CommentListComp from './CommentListComp'

export default function CommentAreaComp({ book, bookId }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!bookId) return;

        fetchReviews();
        async function fetchReviews() {
            try {
                let response = await fetch("https://striveschool-api.herokuapp.com/api/books/" + book.asin + "/comments/", {
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkZmJjMjFlMTQwNjAwMTUzMTRkMmEiLCJpYXQiOjE3NDI1ODA2NDIsImV4cCI6MTc0Mzc5MDI0Mn0.a8BdwHTz9pB4-btjBrwLz6BxrO2tq8bHLUeqdFLO2KM"
                    }
                });
                if (response.ok) {
                    try {
                        const data = await response.json();
                        console.log(data);
                        setReviews(data);
                    } catch (parseError) {
                        console.error('Errore nel parsing JSON:', parseError);
                    }
                } else {
                    console.error('Errore nella risposta:', response.status);
                }
            } catch (networkError) {
                console.error("Errore di rete:", networkError);
            }
        }
    }, [book]);

    return (
        <>
            <AddCommentComp bookId={book.asin}/>
            <CommentListComp reviews={reviews}/>
        </>
    )
}