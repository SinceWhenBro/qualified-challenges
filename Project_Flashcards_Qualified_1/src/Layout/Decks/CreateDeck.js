import React, {useState} from "react";
import { Link, useHistory} from "react-router-dom";
import { createDeck } from "../../utils/api";

function CreateDeck() {
    const [deckData, setDeckData] = useState({name: "", description: ""});
    const history = useHistory();

    function handleChange({target}){
        setDeckData({...deckData, [target.name]: target.value})
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await createDeck(deckData);
        history.push(`/decks/${response.id}`)
      }
    return(
        <>
            <nav aria-label="nav">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item">Create Deck</li>
                </ol>
            </nav>
            <h1>Create Deck</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" className="form-control"  placeholder="Deck name" onChange={handleChange} value={deckData.name}/>
                    <small className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" className="form-control" placeholder="Brief description of the deck." onChange={handleChange} value={deckData.description}/>
                </div>
                <Link to="/">
                    <button type="button" className="btn btn-secondary">Cancel</button>
                </Link>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>
    )
}

export default CreateDeck;