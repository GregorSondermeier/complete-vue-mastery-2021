import { createStore } from 'vuex';

export default createStore({
  state: {
    showAuthModal: false,
  },
  mutations: {
    toggleShowAuthModal: (state) => {
      state.showAuthModal = !state.showAuthModal;
    },
  },
});
