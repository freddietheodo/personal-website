type ButtonProps = {
  text: string;
};

export function Button(props: ButtonProps) {
  return (
    <div>
      <button className="text-white text-3xl p-5">{props.text}</button>
    </div>
  );
}
