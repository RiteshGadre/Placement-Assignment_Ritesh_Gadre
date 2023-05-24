import { useState } from "react";


function App() {
  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <div className="h-screen bg-yellow-400 flex flex-col items-center pt-[150px]">
        <h1 className="py-5 text-purple-500 text-5xl font-bold text-center">Counter App</h1>
        <div className="py-4 flex flex-rows justify-between gap-4">
          <button 
          className="font-bold text-white bg-green-500 round px-8 py-1 text-2xl"
          onClick={
            () => {
              setNum(num+1);
            }
          }>+</button>

          <p className=" rounded px-4 py-1 text-2xl">{num}</p>
          
          <button
          className="text-white font-bold bg-red-500 round px-8 py-1 text-2xl" 
          onClick={
            () => {
              setNum(num-1);
            }
          }>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
