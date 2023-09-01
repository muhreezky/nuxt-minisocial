export default function guest({ store, redirect }) {
	if (store.state.auth.loggedIn) 
		return redirect('/me');
}