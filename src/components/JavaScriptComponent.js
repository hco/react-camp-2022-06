import Counter from "./Counter";

const JavaScriptComponent = ({ name }) => {
  return (
    <div>
      Hallo {name.toUpperCase()}!<Counter />
    </div>
  );
};

export default JavaScriptComponent;
