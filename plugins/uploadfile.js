export default function supabase({ env }, inject) {
	inject('uploadFile', async (file) => {
		const s = file.name.split('.');
		const ext = s[s.length - 1];
		const filename = `${Date.now()}-${s[0]}.${ext}`;
		const formData = new FormData();
		formData.append('image', file);
		const res = await fetch(`${env.bucketUrl}/${filename}`, {
			method: 'POST',
			headers: {
				authorization: `Bearer ${env.supabaseKey}`,
			},
			body: formData
		});
		const data = await res.json();
		console.log(formData);
		console.log(data);
		return data;
	});
}