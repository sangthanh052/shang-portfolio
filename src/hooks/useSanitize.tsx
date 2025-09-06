import DOMPurify from "dompurify";
import { useMemo } from "react";

// tiện ích sanitize
const useSanitize = (content: string) =>
  useMemo(() => ({ __html: DOMPurify.sanitize(content || "") }), [content]);

export default useSanitize;
