function DocumentViewer({ blocks }) {
  return (
    <div>
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return <h1 key={index}>{block.content}</h1>
        }

        if (block.type === 'paragraph') {
          return <p key={index}>{block.content}</p>
        }

        if (block.type === 'code') {
          return <pre key={index}>{block.content}</pre>
        }

        return null
      })}
    </div>
  )
}

export default DocumentViewer