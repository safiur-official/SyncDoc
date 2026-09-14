import TableRow from "./TableRow";

function TableBlock({ rows = [] }) {
  return (
    <table>
      <tbody>
        {rows.map((row, index) => (
          <TableRow
            key={row.id || index}
            cells={row.cells || row}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TableBlock;
