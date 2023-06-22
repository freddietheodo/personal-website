import { Button } from "./components/atoms/Button/Button";

export const Navbar = () => {
  return (
    <div className="inline-flex justify-center">
      <div>
        <Button text={"Navbar"} />
      </div>
      <div className="inline-flex justify-center">
        <Button text={"Home"} />
        <Button text={"Features"} />
        <Button text={"Pricing"} />
      </div>
    </div>
  );
};
