export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.isLoading;
export const selectError = state => state.error;
export const selectItems = state => state.items;
export const selectSortedContacts = state => {
  const filter = state.filter.toLowerCase();
  return state.items
    .filter(contact => contact.name.toLowerCase().includes(filter))
    .sort((a, b) => a.name.localeCompare(b.name));
};
