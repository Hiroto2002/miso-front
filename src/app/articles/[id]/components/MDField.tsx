import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MDFieldProps {
  markdownString: string;
}

const MDField = ({ markdownString }: MDFieldProps) => {
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownString}
      </ReactMarkdown>
    </div>
  );
};

export default MDField;
