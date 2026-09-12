import { Link } from 'react-router-dom'

const documents = [
  { id: 1, title: 'Project Proposal' },
  { id: 2, title: 'Technical Specification' },
  { id: 3, title: 'API Documentation' },
  { id: 4, title: 'Meeting Notes' },
]

function DocumentList() {
  return (
    <div>
      <h2>Documents</h2>

      {documents.map((doc) => (
        <div key={doc.id}>
          <h3>{doc.title}</h3>

          <Link to={`/documents/${doc.id}`}>
            Open Document
          </Link>
        </div>
      ))}
    </div>
  )
}

export default DocumentList