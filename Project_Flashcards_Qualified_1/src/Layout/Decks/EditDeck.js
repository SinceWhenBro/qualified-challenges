import React, {useState, useEffect} from "react";
import { Link, useHistory, useParams} from "react-router-dom";
import { updateDeck, readDeck } from "../../utils/api";


function EditDeck({decks, setDecks}) {
    const [deckData, setDeckData] = useState({name: "", description: ""});
    const history = useHistory();
    const {deckId} = useParams();
    
    useEffect(() => {
        const abortController = new AbortController();
    
        async function fetchCards() {
          const decksData = await readDeck(deckId, abortController.signal);
          console.log(decksData)
          setDeckData(decksData);
        }
        fetchCards();
      }, [deckId]);
    
    function handleChange({target}){
        setDeckData({...deckData, [target.name]: target.value})
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await updateDeck(deckData);
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
            <h1>Edit Deck</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input id="name" name="name" type="email" className="form-control"  placeholder={`${deckData.name}`} onChange={handleChange} value={deckData.name}/>
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input id="description" name="description" type="textarea" className="form-control"  placeholder={`${deckData.description}`} onChange={handleChange} value={deckData.description}/>
                </div>
                
                <Link to="/decks/:deckId">
                    <button type="button" className="btn btn-secondary">Cancel</button>
                </Link>
                <Link to="/">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Link>
            </form>

        </>
    )
}

export default EditDeck;