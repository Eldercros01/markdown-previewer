import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

marked.setOptions({
  breaks: true
});

const defaultMarkdown = `# FreeCodeCamp Markdown Previewer

## Subheading Example

[Visit freeCodeCamp](https://www.freecodecamp.org)

\`Inline code example\`

\`\`\`
function exampleCode() {
  return "This is a code block";
}
\`\`\`

- List item one
- List item two
- List item three

> Block quote example

![FreeCodeCamp Logo](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)

**Bolded text example**
`;

const App = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container-fluid bg-primary text-white min-vh-100">
      <div className="text-center py-3">
        <h1>Markdown Previewer</h1>
      </div>
      <div className="row px-3">
        <div className="col-md-6 mb-3">
          <h2 className="text-center">Editor</h2>
          <textarea
            id="editor"
            className="form-control"
            rows="20"
            value={markdown}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <h2 className="text-center">Preview</h2>
          <div
            id="preview"
            className="bg-light text-dark p-3 rounded"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default App;
