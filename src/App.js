import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [buttonTitle, setButtonTitle] = useState('Sou um botão! =D')

  useEffect(() => {
    console.log("Testando meu useEffect")
  }, [buttonTitle]);

  const changeButtonTitle = (user) => {

    switch (user) {
      case "Gugu":
        setButtonTitle('Oiaaaaaaaaaaaaa')
        break
      
      case "Faustao":
        setButtonTitle('É essa fera, meu!')
        break

      case "Faro":
        setButtonTitle('cavalo! Ui!')
        break
        
      default:
        setButtonTitle('O amigo, passa o parametro ae.')
        break
    }
  }

  return (
    <div className="App">
      <button onClick={() => changeButtonTitle('Gugu')}>{buttonTitle}</button>
    </div>
  );
}

export default App;
