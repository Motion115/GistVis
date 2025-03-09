import React from 'react'

export interface GistViewerProps {
  text?: string
}

export const GistViewer: React.FC<GistViewerProps> = ({ text = "Hello from gist-wsv!" }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '4px' }}>
      {text}
    </div>
  )
}

export default GistViewer
