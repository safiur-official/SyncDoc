import { useParams, Link } from 'react-router-dom'
import DocumentViewer from '../components/DocumentViewer'

const documents = {
  1: {
    title: 'Project Proposal',
    blocks: [
      { type: 'heading', content: 'Project Proposal' },
      {
        type: 'paragraph',
        content: 'This document contains the project proposal for SyncDoc.',
      },
      { type: 'heading', content: 'Requirements' },
      {
        type: 'paragraph',
        content: 'Build a collaborative document browsing interface.',
      },
      { type: 'code', content: 'const app = express()' },
    ],
  },

  2: {
    title: 'Technical Specification',
    blocks: [
      { type: 'heading', content: 'Technical Specification' },
      {
        type: 'paragraph',
        content: 'Technical details of the SyncDoc application.',
      },
    ],
  },

  3: {
    title: 'API Documentation',
    blocks: [
      { type: 'heading', content: 'API Documentation' },
      {
        type: 'paragraph',
        content: 'This document describes the available APIs.',
      },
    ],
  },

  4: {
    title: 'Meeting Notes',
    blocks: [
      { type: 'heading', content: 'Meeting Notes' },
      {
        type: 'paragraph',
        content: 'Notes from the SyncDoc project meeting.',
      },
    ],
  },
}

function DocumentView() {
  const { id } = useParams()
  const document = documents[id]

  if (!document) {
    return (
      <div>
        <h1>Document not found</h1>
        <Link to="/documents">Back to Documents</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/documents">← Back to Documents</Link>

      <DocumentViewer blocks={document.blocks} />
    </div>
  )
}

export default DocumentView