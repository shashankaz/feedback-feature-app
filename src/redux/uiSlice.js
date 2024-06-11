import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  navVertical: false,
  navHorizontal: false,
  issueForm: false,
  feedbackForm: false,
  suggestionForm: false,
  contactForm: false,
  isLoggedIn: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.open = !state.open;
      state.navVertical = !state.navVertical;
      if (state.navHorizontal || !state.navVertical) {
        state.navHorizontal = false;
        state.navVertical = false;
      }
      if (
        state.issueForm ||
        state.feedbackForm ||
        state.suggestionForm ||
        state.contactForm
      ) {
        state.issueForm = false;
        state.feedbackForm = false;
        state.suggestionForm = false;
        state.contactForm = false;
      }
    },
    toggleNavHorizontal: (state) => {
      state.navHorizontal = !state.navHorizontal;
      state.navVertical = false;
    },
    showIssueForm: (state) => {
      state.issueForm = true;
      state.feedbackForm = false;
      state.suggestionForm = false;
      state.contactForm = false;
    },
    showFeedbackForm: (state) => {
      state.feedbackForm = true;
      state.issueForm = false;
      state.suggestionForm = false;
      state.contactForm = false;
    },
    showSuggestionForm: (state) => {
      state.suggestionForm = true;
      state.issueForm = false;
      state.feedbackForm = false;
      state.contactForm = false;
    },
    showContactForm: (state) => {
      state.contactForm = true;
      state.issueForm = false;
      state.feedbackForm = false;
      state.suggestionForm = false;
    },
    toggleLogin: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    toggleFab: (state) => {
      state.open = !state.open;
    },
  },
});

export const {
  toggleOpen,
  toggleNavHorizontal,
  showIssueForm,
  showFeedbackForm,
  showSuggestionForm,
  showContactForm,
  toggleLogin,
  toggleFab,
} = uiSlice.actions;

export default uiSlice.reducer;
