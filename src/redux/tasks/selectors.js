// import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = state => state.tasks.items;
// export const selectFilter = state => state.filter.value;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;
export const getTasks = state => state.tasks.items;

// export const selectVisibleContacts = createSelector (
//     [selectCards], (cards, filter) => {
// return cards.filter(card => card.name.toLowerCase().includes(filter.toLowerCase()))
//     }
// ) 