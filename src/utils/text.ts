/**
 * Returns `true` if the text contains the query, otherwise `false`.
 */
export const matchesQuery = (text: string, query: string): boolean => {
  const queryWords = query.trim().toLowerCase().split(/\s+/);
  return queryWords.every((word) => text.toLowerCase().includes(word));
};
