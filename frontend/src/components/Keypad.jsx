import Button from "./Button";

const Keypad = ({validateSolution}) => {
  return (
    <div className="hidden lg:block w-1/3 mx-8">
      <h2 className="text-center text-xl italic font-bold my-2">Keypad</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
      </div>
      <h2 className="text-center text-xl italic font-bold">Mode</h2>
      <div className="grid grid-cols-2 my-2 gap-2">
        <Button>Normal</Button>
        <Button>Candidate</Button>
      </div>
      <Button className="w-full mt-4 bg-sky-600" onClick={validateSolution}>SUBMIT</Button>
    </div>
  );
};

export default Keypad;
