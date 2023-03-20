import clsx from "clsx";
import "./App.css";

function App() {
  return (
    <div className="bg-indigo-400 h-screen grid place-items-center">
      <Button
        className={clsx(
          "h-10 px-4 rounded-md bg-neutral-300 border-2 border-transparent",
          "hover:bg-neutral-200",
          "active:border-3 active:border-neutral-500/10"
        )}
      >
        Hola
      </Button>
    </div>
  );
}

export default App;

const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
