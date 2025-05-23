import React, { useEffect, useState, useCallback } from 'react'
import AddCommentComp from './AddCommentComp'
import CommentListComp from './CommentListComp'

export default function CommentAreaComp({ bookId, refresh }) {
    const [reviews, setReviews] = useState([]);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchReviews = useCallback(async () => {
        if (!bookId) return;
        
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkZmJjMjFlMTQwNjAwMTUzMTRkMmEiLCJpYXQiOjE3NDM3OTM3OTQsImV4cCI6MTc0NTAwMzM5NH0.SCJoU4vAZ4U3p--sEhQSqh8md25fljKNa5pOOonGNmQ"
                }
            });
            if (response.ok) {
                const data = await response.json();
                setReviews(data);
            }
        } catch (error) {
            setShowError(true);
            setErrorMessage(
                error.message === 'Failed to fetch' 
                    ? 'Problema di connessione. Verifica la tua rete.'
                    : 'Qualcosa è andato storto. Riprova più tardi.'
            );
            console.error("Errore:", error);
        }
    }, [bookId]);

    useEffect(() => {
        fetchReviews();
    }, [fetchReviews, refresh]);

    return (
        <>
            <CommentListComp reviews={reviews}/>
            {showError && <div className="error-message">{errorMessage}</div>}
        </>
    )
}