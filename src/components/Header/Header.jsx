import etiqaImage from '../../assets/etiqa.svg'
import './Header.css'


export default function Header(){
    return (
        <header>
          <img src={etiqaImage}
          alt="Stylized atom" />
          <h1>E T I Q A N </h1>
          <p>
            What does it mean to be an <span className="etiqanWriting">ETIQAN?</span>  🤔💭
          </p>
        </header>
    );
}
