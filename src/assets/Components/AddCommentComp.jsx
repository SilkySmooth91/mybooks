import React, {useState} from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

export default function AddCommentComp({bookId, onCommentAdded}) {
  const [rate, setRate] = useState("1")
  const [comment, setComment] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkZmJjMjFlMTQwNjAwMTUzMTRkMmEiLCJpYXQiOjE3NDI1ODA2NDIsImV4cCI6MTc0Mzc5MDI0Mn0.a8BdwHTz9pB4-btjBrwLz6BxrO2tq8bHLUeqdFLO2KM'
            },
            body: JSON.stringify({
                comment: comment,
                rate: parseInt(rate),
                elementId: bookId
            })
        });

        if (response.ok) {
            setShowSuccess(true);
            setShowError(false);
            setComment('');
            setRate('1');
            onCommentAdded();
            setTimeout(() => {
              setShowSuccess(false);
          }, 4000);
        } else {
          setShowError(true);
          setShowSuccess(false);
          setTimeout(() => {
              setShowError(false);
          }, 4000);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

  return (
    <>
      {showSuccess && (
        <Alert variant="success" className="mt-2">
          Recensione aggiunta!
        </Alert>
      )}
      {showError && (
        <Alert variant="danger" className="mt-2">
          Qualcosa è andato storto!
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <h6>Lascia una recensione</h6>
            <Form.Label>Il tuo voto</Form.Label>
            <Form.Select 
              value={rate} 
              onChange={(e) => setRate(e.target.value)} aria-label="Seleziona il tuo voto da uno a cinque" 
              size="sm" 
              className="bg-dark text-white border-secondary">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="comment-area">
                <Form.Label>Lascia un commento</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)} />
            </Form.Group>
            <Button type="submit" variant="secondary">
                Invia recensione
            </Button>
      </Form>
    </>
  )
}
