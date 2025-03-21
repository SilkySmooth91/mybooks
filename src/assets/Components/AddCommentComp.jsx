import React from 'react'
import { Form } from 'react-bootstrap'

export default function AddCommentComp() {
  return (
    <>
        <h6>Lascia una recensione</h6>
            <Form.Label>Il tuo voto</Form.Label>
            <Form.Select aria-label="Seleziona il tuo voto da uno a cinque" size="sm" className="bg-dark text-white border-secondary">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="comment-area">
                <Form.Label>Lascia un commento</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
    </>
  )
}
