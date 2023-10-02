export default function guest({ store, redirect }) {
	if (store.state.auth.loggedIn) 
		return redirect(`/u/${store.state.auth.user.username}`);
}