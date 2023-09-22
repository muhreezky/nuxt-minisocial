export const state = () => ({
	posts: []
});

export const getters = {
	isAuthenticated(state) {
		return state.auth.loggedIn
	},
	loggedInUser(state) {
		return state.auth.user
	},
	getPosts(state) {
		return state.posts;
	}
}

export const mutations = {
	addToPosts(state, data) {
		state.posts.push(...data);
	}
};

// export const actions = {
// 	async fetchPosts({ state, commit }, { username, after }) {
// 		const { data } = await this.$axios.$get(`/u/${username}/posts${after ? `?before=${after}` : ''}`);
// 		commit('addToPosts', data.posts);
// 	}
// }