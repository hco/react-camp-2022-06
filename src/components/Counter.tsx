import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Aktueller Wert: {count}</p>
      <button
        onClick={() =>
          setCount(function (prevCount) {
            return prevCount + 1;
          })
        }
      >
        Increment!
      </button>
    </div>
  );
};

export default Counter;

// const NaiveCounter = () => {
//   let count = 0;
//
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => (count = count + 1)} />
//     </div>
//   );
// };
