import "./Search.css"
function Search(){
    return(
        <div className="search-wrapper">
            <input
                id="search"
                type="text"
                placeholder="pokemon name...."
            />
        </div>
    )
}
export default Search;