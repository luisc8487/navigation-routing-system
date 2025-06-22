function Table({data}) {
  const rerenderedData = data.map((fruit) => {
    return (
      <tr key={fruit.name}>
        <td>{fruit.name}</td>
        <td>{fruit.color}</td>
        <td>{fruit.score}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Fruits</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{rerenderedData}</tbody>
    </table>
  );
}
export default Table;
