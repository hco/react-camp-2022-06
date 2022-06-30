interface Props {
  name: string;
}

const Greeting: React.FunctionComponent<Props> = ({ name }) => (
  <p>Hello, {name}!</p>
);

export default Greeting;
