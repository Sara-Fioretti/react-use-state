import { useState } from 'react'
import './App.css'
import languages from './languages'

import Button from './assets/components/Button'
import Card from './assets/components/Card'
function App() {
  const [linguaggio, setLinguaggio] = useState(languages[0])
  const printCard = (elementoSelezionato) => {
    setLinguaggio(elementoSelezionato)
  }

  return (
    <>
      <h1>Learn Web development</h1>
      <nav className="nav justify-content-around ">
        {languages.map((language) =>
          <Button
            id={language.id}
            title={language.title}
            description={language.description}
            printCard={() => printCard(language)}
          >
          </Button>
        )}

      </nav>
      <Card
        title={linguaggio.title}
        description={linguaggio.description}
        >
        </Card>
      </>
    
  )
}

export default App
