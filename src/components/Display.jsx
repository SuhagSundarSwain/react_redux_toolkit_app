import { useSelector } from "react-redux";

export default function Display() {
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter value: {counterVal}</p>;
}
