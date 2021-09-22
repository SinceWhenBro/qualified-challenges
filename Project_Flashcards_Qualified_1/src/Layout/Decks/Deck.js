export default function Deck(){
    return(
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Deck</a></li>
                <li className="breadcrumb-item active" aria-current="page">Study</li>
            </ol>
        </nav>
    )
}