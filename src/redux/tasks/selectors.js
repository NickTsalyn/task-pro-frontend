import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = state => state.tasks.tasks;
export const selectFilter = state => state.filter.value;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectError = state => state.tasks.error;


export const selectVisibleTasks = createSelector(
  [selectTasks],
  (tasks, filter) => {
    return tasks.filter(tasks =>
      tasks.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
