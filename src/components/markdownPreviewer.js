import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; 

function MarkdownPreviewer() {
    const [text, setText] = useState(``);
    const [preText, setPreText] = useState(``);
    
    useEffect(() => {
        /*
        variable 'initialMarkdown' must not include 'tab' because there may be unexpected format error in markdown.
        */
        const initialMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
    }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
        setText(initialMarkdown);
        setPreText(initialMarkdown);
    }, []);

    function handleChange(event) {
        setText(event.target.value);
        setPreText(event.target.value);
    }
    
    return(
        <div className="max-h-full grid grid-rows-12">
            <div className="mx-4 row-span-4">
                <label htmlFor="editor" className="block mb-2 text-sm font-medium text-gray-900">Write here</label>
                <textarea id="editor" onChange={handleChange} value={text} rows="12" className="block w-full text-sm font-medium text-gray-900 border-double border-2 border-gray-300" placeholder="Write your text here..."></textarea>
            </div>
            
            <div className="mx-4 row-span-8 max-h-full flex flex-col">
                <label htmlFor="preview" className="block mb-2 text-sm font-medium text-gray-900">Markdown Preview</label>
                <div className="overflow-auto">
                    <ReactMarkdown id="preview" remarkPlugins={remarkGfm} children={preText} className="prose w-full max-h-max border-2 border-gray-300"></ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default MarkdownPreviewer;