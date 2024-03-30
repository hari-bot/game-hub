import useGenere from "../hooks/useGenere";

const GenereList = () => {
  const { generes } = useGenere();
  return (
    <ul>
      {generes.map((genere) => (
        <li key={genere.id}>{genere.name}</li>
      ))}
    </ul>
  );
};

export default GenereList;
