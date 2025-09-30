
// import './App.css'

function App() {

  return (
    <>
      <div className="font-poppins p-8 space-y-6">
        <h1 className='text-amber-400 text-3xl font-bold'>Testing Poppins Font</h1>
        
        {/* Font Weight Tests */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Poppins Font Weights:</h2>
          <p className="font-thin text-lg">Font Weight 100 - Thin</p>
          <p className="font-extralight text-lg">Font Weight 200 - Extra Light</p>
          <p className="font-light text-lg">Font Weight 300 - Light</p>
          <p className="font-normal text-lg">Font Weight 400 - Regular</p>
          <p className="font-medium text-lg">Font Weight 500 - Medium</p>
          <p className="font-semibold text-lg">Font Weight 600 - Semi Bold</p>
          <p className="font-bold text-lg">Font Weight 700 - Bold</p>
          <p className="font-extrabold text-lg">Font Weight 800 - Extra Bold</p>
          <p className="font-black text-lg">Font Weight 900 - Black</p>
        </div>
      </div>
    </>
  )
}

export default App
