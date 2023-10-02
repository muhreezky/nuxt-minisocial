import { createClient } from '@supabase/supabase-js';

export default function supabase(context, inject) {
	const supabase = createClient(context.env.supabaseUrl, context.env.supabaseKey);
	inject('uploadFile', async (file) => {
		const s = file.name.split(".");
		const ext = s[s.length - 1];
		const { data, error } = await supabase.storage.from('MiniSocial Bucket').upload(`${Date.now()}.${ext}`, file, {
			upsert: false
		});
		return { data, error }
	});
}