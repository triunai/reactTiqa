export default function TabContent( {example} ) {
    // remember to always add your relevant tabs and ids here
  return (
    <div id="tab-content"> 
      <h3> {example.title} </h3>
      <ul>
        {example.actionPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <p>{example.keyPractices}</p>
    </div>
  );
}
