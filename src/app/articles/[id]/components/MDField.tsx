import React from "react";
import ReactMarkdown from "react-markdown";

interface MDFieldProps {
  markdownString: string;
}

const MDField = ({ markdownString }: MDFieldProps) => {
  return (
    <div>
      <ReactMarkdown>{markdownString}</ReactMarkdown>
    </div>
  );
};

export default MDField;
