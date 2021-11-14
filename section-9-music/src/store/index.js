import { createStore } from 'vuex';

export const store = createStore({
  state: {
    isAuthModalShowing: false,
  },
  mutations: {
    toggleShowAuthModal: (state) => {
      state.isAuthModalShowing = !state.isAuthModalShowing;
    },
  },
});
