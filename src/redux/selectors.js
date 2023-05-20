export const getFilter = state => state.filter;
export const isLoading = state => state.isLoading;
export const error = state => state.error;
export const items = state => state.items;

export const getSortedContacts = state => {
  const filter = state.filter.toLowerCase();
  return state.items
    .filter(contact => contact.name.toLowerCase().includes(filter))
    .sort((a, b) => a.name.localeCompare(b.name));
};
