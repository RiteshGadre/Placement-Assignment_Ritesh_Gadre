import { useState } from "react";


function App() {
  const [value, setValue] = useState('');

  return (
    <div className="h-screen flex justify-center items-center bg-gray-500">
      <div className="calculator flex flex-col gap-8 p-8 bg-black text-white rounded-md">
        <form action="">
          <div className="py-4">
            <input className="text-md font-bold text-right text-black py-2 px-3 rounded-lg" value={value} />
          </div>

          <div className="flex justify-center gap-2 py-1">
            <input className="border-white border-[1px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="AC" onClick={e => setValue('')}/>
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="C" onClick={e => setValue(value.slice(0, -1))} />
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="%" />
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="/" />
          </div>

          <div className="flex justify-center gap-2 py-1">
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="7" onClick={e => setValue(value + e.target.value)} />
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="8" onClick={e => setValue(value + e.target.value)} />
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="9" onClick={e => setValue(value + e.target.value)} />
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="*" onClick={e => setValue(value + e.target.value)} />
          </div>

          <div className="flex justify-center gap-2 py-1">
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="4" onClick={e => setValue(value + e.target.value)} />
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="5" onClick={e => setValue(value + e.target.value)} />
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="6" onClick={e => setValue(value + e.target.value)} />
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="+" onClick={e => setValue(value + e.target.value)} />
          </div>

          <div className="flex justify-center gap-2 py-1">
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="1" onClick={e => setValue(value + e.target.value)} />
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="2" onClick={e => setValue(value + e.target.value)} />
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="3" onClick={e => setValue(value + e.target.value)} />
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="-" onClick={e => setValue(value + e.target.value)} />
          </div>

          <div className="flex justify-center gap-2 py-1">
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="00" onClick={e => setValue(value + e.target.value)} />
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="0" onClick={e => setValue(value + e.target.value)} />
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="." onClick={e => setValue(value + e.target.value)} />
            <input className="border-white border-[2px] w-[40px] h-[40px] text-lg rounded-full" type="button" value="=" onClick={e => setValue(eval(value))} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
