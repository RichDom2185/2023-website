import { Component } from "solid-js";

type Props = {
  label: string;
  onClick: () => void;
};

const Button: Component<Props> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
