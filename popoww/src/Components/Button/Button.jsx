function Button({tile, wendy, popow}){
    const setText = () => {
        console.log(wendy)
    }
   return(<button onClick={setText}>{wendy}</button>)
    //Logique JS
}
export default Button;