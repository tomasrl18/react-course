import './App.css'

const TURNS = {
  RED: '🔴',
  YELLOW: '🟡'
}

const board = Array(16).fill(null)
const Square = ({ children, updateBoard, index }) => {
  return (
    <div className="square">
      {children}
    </div>
  )
} 

function App() {
  return (
    <>
      <main className='board'>
        <h1>Connect 4</h1>
        <section className='game'>
          {
            board.map((_, index) => {
              return (
                <Square key={index} index={index}></Square>
              )
            })
          }
        </section>
      </main>
    </>
  )
}

export default App
