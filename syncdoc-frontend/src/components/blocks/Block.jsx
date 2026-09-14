import Paragraph from "./Paragraph";
import Heading from "./Heading";
import CodeBlock from "./CodeBlock";
import ListBlock from "./ListBlock";
import ListItem from "./ListItem";
import TableBlock from "./TableBlock";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import Quote from "./Quote";
import Embed from "./Embed";

function Block({ block }) {
  if (!block || !block.type) {
    return null;
  }

  switch (block.type) {
    case "paragraph":
      return <Paragraph content={block.content} />;
    case "heading":
      return <Heading content={block.content} />;
    case "codeBlock":
      return <CodeBlock content={block.content} />;
    case "list":
      return <ListBlock items={block.items} />;
    case "listItem":
      return <ListItem content={block.content} />;
    case "table":
      return <TableBlock rows={block.rows} />;
    case "tableRow":
      return <TableRow cells={block.cells} />;
    case "tableCell":
      return <TableCell content={block.content} />;
    case "quote":
      return <Quote content={block.content} />;
    case "embed":
      return <Embed content={block.content} />;
    default:
      return (
        <div>
          Unsupported block type: <strong>{block.type}</strong>
        </div>
      );
  }
}

export default Block;
