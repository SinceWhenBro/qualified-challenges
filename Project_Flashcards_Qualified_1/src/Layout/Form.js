import React from "react";
import { Link } from "react-router";

export default function Form({handleSubmit, deck, handleChange}){
 
    return(
        <>
        <nav aria-label="nav">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deck.id}`}>{`${deck.name}`}</a></li>
                    <li className="breadcrumb-item">Add Card</li>
                </ol>
            </nav>
            
            <h1>{`${deck.name}: Add Card`}</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Front side of card</label>
                    <textarea id="name "name="name" type="email" className="form-control" placeholder="Deck name" onChange={handleChange} value={deck.cards.front}/>
                    <small className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Back side of card</label>
                    <textarea id="description" name="description" type="textarea" className="form-control" placeholder="Brief description of the deck." onChange={handleChange} value={deck.cards.back}/>
                </div>
                    <Link to="/">
                        <button type="button" className="btn btn-secondary">Save</button>
                    </Link>
                    <button type="submit" className="btn btn-primary">Done</button>
            </form>
            </>
    )
}