import { useMemo } from 'react';

const ListComponent = ({ data }) => {
  const processedData = useMemo(() => {
    console.log("Calculation")
    return data.sort((a, b) => a - b);
  }, [data]);

  return (
    <ul>
      {processedData.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const UseMemoComponent = () => {

  const data = [7,8, 6, 76, 34, 85];

  return <div className="hook-component">
    <ListComponent data={data}/>
  </div>
}

export default UseMemoComponent;
