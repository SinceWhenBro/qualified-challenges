import React, {useState} from "react";
import { Link, useHistory} from "react-router-dom";
import { createDeck } from "../../utils/api";

function CreateDeck(decks) {
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
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input name="name" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Deck name" onChange={handleChange} value={deckData.name}/>
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input name="description" type="textarea" className="form-control" id="exampleInputPassword1" placeholder="Brief description of the deck." onChange={handleChange} value={deckData.description}/>
                </div>
                
                    <button type="submit" className="btn btn-secondary">Cancel</button>
                <Link to="/">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Link>
            </form>

        </>
    )
}

export default CreateDeck;