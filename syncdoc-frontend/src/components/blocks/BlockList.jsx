import Block from "./Block";

function BlockList({ blocks = [] }) {
  return (
    <div>
      {blocks.map((block, index) => (
        <Block
          key={block.id || index}
          block={block}
        />
      ))}
    </div>
  );
}

export default BlockList;
