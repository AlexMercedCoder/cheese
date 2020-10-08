import React from "react";

const Count = (props) => {
  const [count, setCount] = React.useState(props.start);

  const addOne = () => {
    setCount(count + 1);
  };

  const above = <h1> It's 10 or above </h1>;
  const below = <h1> It's below 10 </h1>;

  let result;

  if (count < 10) {
    result = below;
  } else {
    result = above;
  }

  return (
    <>
      {result}
      <h1>{count}</h1>
      <button onClick={addOne}> Add One </button>
    </>
  );
};

export default Count;
