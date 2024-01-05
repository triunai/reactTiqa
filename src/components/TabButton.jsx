export default function TabButton({buttonName, onClickOfButton}){

    // remove this
    function clickHandler(){
        console.log("From the component itself")
    }

    return (
        <li><button onClick={onClickOfButton}>{buttonName}</button></li>
    );
}