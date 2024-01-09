export default function Tabs({ childrenContent, buttons, buttonsContainer }){
    
    // added or for best practice
    const ButtonsContainer = buttonsContainer || 'div';
    return <>
        <ButtonsContainer>
        {buttons}
        </ButtonsContainer>

        {/* Content goes here */}
        {childrenContent}
    </>
} 