"use client";

import { Copy } from "lucide-react";
import { toast } from "sonner";

const CopyToClipboard = ({ content }: { content: string }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      toast("Berhasil disalin");
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
