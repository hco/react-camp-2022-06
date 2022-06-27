export type SimpleFunctionComponent<Props extends {} = {}> = (
  props: Props
) => JSX.Element;

const GenericExample: SimpleFunctionComponent = () => {
  return <div>Hallo Sarah!</div>;
};

export default GenericExample;
