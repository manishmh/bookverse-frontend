export const extractUserAgent = () => {
  if (typeof window !== 'undefined') {
    const userAgentString = navigator.userAgent;
    const endIndex = userAgentString.indexOf(')');
    const extractedUserAgent = userAgentString.slice(0, endIndex + 1);
    return extractedUserAgent;
  }
  return "User agent not available";
};

  