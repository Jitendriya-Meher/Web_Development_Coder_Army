import { useState } from "react"

const App = () => {

  const [count,setCount] = useState(0);
  const [input, setInput] = useState("");

  const counter = ( amount ) => {

    setCount((prev) => {
      return prev+amount;
    });
    
  }

  return (
    <div className=" min-h-screen flex flex-col gap-10 bg-linear-to-r from-cyan-500 to-blue-500 flex-wrap relative">

      <div className=" pt-5 sm:pt-10 md:pt-20 xl:pt-24">
        <h1 className=" text-7xl text-center">
          Counter
        </h1>
        <p className=" text-9xl text-center p-2">
          {count}
        </p>
      </div>

      <div className=" pt-5 font-sans flex in-checked: justify-center gap-5 flex-wrap">

        <button
        onClick={() => {
          counter(-1);
        }}
        className=" px-3 py-2 bg-white rounded-xl border border-black text-lg font-semibold "
        >
          Decrement By 1
        </button>

        <button
        onClick={() => {
          counter(1);
        }}
        className=" px-3 py-2 bg-white rounded-xl border border-black text-lg font-semibold "
        >
          Increament By 1
        </button>

      </div>

      <div className=" flex items-center justify-center gap-5 flex-wrap">

        <input type="number"
        className=" px-3 py-2 bg-white rounded-xl border border-black text-lg font-semibold"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        />

        <button
        onClick={() => {
          counter(Number(input));
        }}
        className=" px-3 py-2 bg-white rounded-xl border border-black text-lg font-semibold "
        >
          Add
        </button>

      </div>

      <p className=" absolute bottom-2 right-2 text-sm">
        Created By Jitendriya Meher
      </p>

    </div>
  )
}

export default App