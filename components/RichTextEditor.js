import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const RichTextEditor = ({setDetails, config}) => {

    const editor = useRef(null);

  return (
        <JoditEditor 
          ref={editor} 
          onChange={(content) => setDetails(content)}
          config={config}
        />
         
    );
};

export default RichTextEditor;