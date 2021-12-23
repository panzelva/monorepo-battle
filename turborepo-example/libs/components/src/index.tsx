type Props = {
  name: string;
};

export function HelloWorld(props: Props) {
  const { name } = props;

  return <div>hello {name}!</div>;
}
