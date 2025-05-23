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
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkZmJjMjFlMTQwNjAwMTUzMTRkMmEiLCJpYXQiOjE3NDM3OTM3OTQsImV4cCI6MTc0NTAwMzM5NH0.SCJoU4vAZ4U3p--sEhQSqh8md25fljKNa5pOOonGNmQ'
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
        setShowError(true);
        setShowSuccess(false);
        
        if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
          console.error('Errore di rete:', error);
        } else if (error.response?.status === 400) {
          console.error('Errore di validazione:', error);
        } else if (error.response?.status === 401) {
          console.error('Errore di autenticazione:', error);
        } else {
          console.error('Errore generico:', error);
        }

        setTimeout(() => {
          setShowError(false);
        }, 4000);
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
        <h6 className='text-white mt-5'>Lascia una recensione</h6>
            <Form.Label className='text-white'>Il tuo voto</Form.Label>
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
                <Form.Label className='text-white mt-3'>Lascia un commento</Form.Label>
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
