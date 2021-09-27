import React from "react";


export default function Form({handleSubmit, cardData, handleChange}){
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="front">Front side of card</label>
                    <textarea id="front "name="front" type="text" className="form-control" placeholder="Front side of card" onChange={handleChange} value={cardData.front}/>
                    <small className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="back">Back side of card</label>
                    <textarea id="back" name="back" type="text" className="form-control" placeholder="Back side of card" onChange={handleChange} value={cardData.back}/>
                </div>
                    
                    <button type="button" className="btn btn-secondary">Save</button>
                    <button type="submit" className="btn btn-primary">Done</button>
            </form>
        </>
    )
}