export default function TabButton({buttonName, isSelected, ...props }){

    // remove this
    function clickHandler(){
        console.log("From the component itself")
    }

    return (
        <li>
            <button
            className={isSelected ? "active" : undefined} 
            {...props }>{buttonName}</button>
        </li>
    );
}