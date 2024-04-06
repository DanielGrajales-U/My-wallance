interface Props {
  errors: string[];
}

export default function ShowError({ errors }: Props){
  return (
    <div>
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </div>
  );
}
