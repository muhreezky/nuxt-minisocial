<template>
	<div ref="example-element">
		{{ property }}
	</div>
</template>

<script>
export default {
	name: 'LifeCycle',
	data() {
		return {
			property: 'Example Property',
			counter: 0
		}
	},
	beforeCreate() {
		console.log('Data diinisialisasi');
	},
	created() {
		console.log('Property dapat diaksses');
		this.property = 'Example Property updated';
	},
	beforeMount() {
		console.log('vm.$el belum bisa diakses');
	},
	mounted() {
		console.log('vm.$el sudah bisa diakses');
		console.log(this.$el.textContent);
		setInterval(() => this.counter++, 1000);
	},
	updated() {
		console.log('Komponent diupdate');
		console.log(this.counter);
	}
}
</script>
