import TableCell from "./TableCell";

function TableRow({ cells = [] }) {
  return (
    <tr>
      {cells.map((cell, index) => (
        <TableCell
          key={cell.id || index}
          content={cell.content || cell}
        />
      ))}
    </tr>
  );
}

export default TableRow;
