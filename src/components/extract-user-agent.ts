export const extractUserAgent = () => {
  const userAgentString = navigator.userAgent;
  const startIndex = userAgentString.indexOf('Mozilla/5.0');
  const endIndex = userAgentString.indexOf(')');
  const extractedUserAgent = userAgentString.slice(startIndex, endIndex + 1);
  return extractedUserAgent;
};

  