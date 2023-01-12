import "./Button.css";
export function Button({ children, color, size }) {
  return <button className={`Button ${color} ${size}`}>{children}</button>;
  //color: white, red
  //size: small, large
}
