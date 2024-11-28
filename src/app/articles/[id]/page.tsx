import React from "react";
import MDField from "./components/MDField";

interface DetailProps {
  params: {
    id: number;
  };
}

const markdownString = `
# Markdown

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
`;

const detail = ({ params }: DetailProps) => {
  return (
    <div>
      <h3>this is {params.id} detail page.</h3>
      <MDField markdownString={markdownString} />
    </div>
  );
};

export default detail;
