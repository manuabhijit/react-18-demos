import { useState } from "react";
import { useMemo } from "react";

const ListComponent = ({ data }) => {
  const processedData = useMemo(() => {
    console.log("Calculation");
    return data.sort((a, b) => a - b);
  }, [data]);

  return (
    <ul>
      {processedData.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const UseMemoComponent = () => {
  const [data, setDate] = useState([7, 8, 6, 76, 34, 85]);

  return (
    <div className="hook-component">
      <button
        onClick={() => {
          console.log("i clicked");
          setDate((prev) => {
            const nextValue = [...prev];
            nextValue.push(34);
            return nextValue;
          });
        }}
      >
        change
      </button>

      {JSON.stringify(data)}

      <ListComponent data={data} />
    </div>
  );
};

export default UseMemoComponent;
