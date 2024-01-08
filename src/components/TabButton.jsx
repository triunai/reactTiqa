export default function TabButton({buttonName, onClickOfButton, isSelected}){

    // remove this
    function clickHandler(){
        console.log("From the component itself")
    }

    return (
        <li>
            <button
            className={isSelected ? "active" : undefined} 
            onClick={onClickOfButton}>{buttonName}</button>
        </li>
    );
}