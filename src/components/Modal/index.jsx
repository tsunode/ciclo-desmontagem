import { useEffect, useRef } from "react"
import { Container } from "./styles"

export const Modal = ({setIsOpen, children}) => {
    const modalRef = useRef();

    useEffect(() => {
        console.log('Modal montado')

        function handleOutClick(event) {
            console.log(event)
            console.log('Clicou na tela')

            if(!modalRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleOutClick)

        return () => {
            console.log('Modal desmontado');
            document.removeEventListener('mousedown', handleOutClick)
        }
    }, [])

    return(
        <Container>
           <div ref={modalRef} className="modal-box">
                <button 
                    type="button" 
                    className="close-button"
                    onClick={() => setIsOpen(false)}
                >
                    X
                </button>
                {children}
           </div>
        </Container>
    )
}