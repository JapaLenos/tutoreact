function App(){
    return(
        <h1>Titre</h1>
        {
            if(true){
                (<h2>Bonjour</h2>)
            } else {
                (<h2>
                    Aurevoir</h2>)
            }
        }
    )
}
export default App