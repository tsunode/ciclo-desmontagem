import { useEffect, useState } from 'react'
// import './App.css'
import { Modal } from './components/Modal'

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    console.log('Componente montado')

    return () => {
      console.log('Estou sendo desmontado');
    }
  }, [])

  return (
    <div className="App">
        <button onClick={() => setIsOpen(true)}>
          Abrir modal
        </button>

        {
          isOpen &&
            <Modal setIsOpen={setIsOpen}>
              Teste
            </Modal>
        }
    </div>
  )
}
