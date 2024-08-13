import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS for styling

// TextEditor component for rich text editing
function TextEditor({ value, onChange }) {
  // Configuration for Quill editor's toolbar
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }], // Header options
      ['bold', 'italic', 'underline', 'strike', 'blockquote'], // Formatting options
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}], // List and indent options
      ['link', 'image'], // Link and image insertion
      ['clean'], // Clear formatting button
      ['save', 'variables'] // Custom buttons (assuming these are custom; they need to be defined elsewhere)
    ],
  };

  // Formats that are allowed in the editor
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  return (
    <ReactQuill 
      value={value} // Controlled value from parent
      onChange={onChange} // Callback for changes
      modules={modules} // Toolbar configuration
      formats={formats} // Allowed formats
    />
  );
}

export default TextEditor;
