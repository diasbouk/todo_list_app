// This is gonna be the OOP implementing of this project




const { createApp, ref } = Vue;

createApp({
	setup() {
		const count = ref(0)
		class Item {
			id = 0
			description = ''
		}
		return {
			count,
			Item,
		}
	}
}).mount("#app")








