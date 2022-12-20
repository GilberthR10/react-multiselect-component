import { Select, SelectOption } from "./components/Select";
import { useState } from "react";

const options = [
  { label: "First", value: 1 },
  { label: "second", value: 2 },
  { label: "third", value: 3 },
  { label: "fourth", value: 4 },
  { label: "fifth", value: 5 },
];
function App() {
  const [value, setValue] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);
  return (
    <>
      <Select
        multiple
        options={options}
        value={value}
        onChange={(opt) => setValue(opt)}
      />

      <Select
        options={options}
        value={value2}
        onChange={(opt) => setValue2(opt)}
      />
    </>
  );
}

export default App;
