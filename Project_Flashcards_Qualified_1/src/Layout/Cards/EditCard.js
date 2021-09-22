import React, {useState} from "react";
import { Link, useHistory} from "react-router-dom";
import { updateCard } from "../../utils/api";

function EditCard(decks) {
    const [cardData, setCardData] = useState({front: "", back: ""});
    const history = useHistory();

    function handleChange({target}){
        setCardData({...cardData, [target.name]: target.value})
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await updateCard(cardData);
        history.push(`/decks/${response.id}`)
      }
    return(
        <>
            <nav aria-label="nav">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item">Edit Deck</li>
                </ol>
            </nav>
            <h1>Create Deck</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Front of card</label>
                    <input name="name" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={`${cardData.front}`} onChange={handleChange} value={cardData.front}/>
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Back of card</label>
                    <input name="description" type="textarea" className="form-control" id="exampleInputPassword1" placeholder={`${cardData.back}`} onChange={handleChange} value={cardData.back}/>
                </div>
                
                <Link to="/decks/:deckId">
                    <button type="submit" className="btn btn-secondary">Cancel</button>
                </Link>
                <Link to="/">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Link>
            </form>

        </>
    )
}

export default EditCard;