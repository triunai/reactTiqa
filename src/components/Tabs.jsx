export default function Tabs({ childrenContent, buttons }){
    return <>
        <menu>

            {buttons}
        </menu>
        {/* Content goes here */}
        {childrenContent}
    </>
} 