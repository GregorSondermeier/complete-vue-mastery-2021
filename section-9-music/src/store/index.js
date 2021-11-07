import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthModalShowing: false,
  },
  mutations: {
    toggleShowAuthModal: (state) => {
      state.isAuthModalShowing = !state.isAuthModalShowing;
    },
  },
});
