import React, { useState } from "react";
import { marked } from "marked";
import './App.css';

const initialMarkdown = `
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bolded text**
`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}

export default App;
