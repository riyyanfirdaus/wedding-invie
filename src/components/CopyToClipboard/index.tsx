"use client";

import { Copy } from "lucide-react";

const CopyToClipboard = ({ content }: { content: string }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
    } catch (error) {
      console.error("Unable to copy to clipboard:", error);
    }
  };

  return (
    <button onClick={handleCopy}>
      <Copy />
    </button>
  );
};

export default CopyToClipboard;
