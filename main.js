// This is gonna be the OOP implementing of this project




const { createApp, ref } = Vue;

createApp({
	setup() {
		/* List containing all our todos */

		/* todoItem to hold info */
		const todoItem = {}

		// Class representing the list
		class List {
			/* Class representing a lists
			 * Attrs:
			 * 		data -> list of objs (items | todos)
			 * 		numOfItems -> integer holding the length
			 * 		todoItemId -> integer to hold id
			 * 		todoItemDesc -> integer to hold description
			* */
			static data = []
			static numOfItems = 0
			static todoItemId = 0
			static todoItemDesc = ''

		static createNew() {

			List.data.push(new Item(todoItem.id, todoItem.desc))
			for (let ele of List.data) {
				console.log(ele.id)
				console.log(ele.description)
			}
		}
		}


		// Creating the item class
		class Item {
			/* This is the class for items
			 * id -> integer
			 * description -> string
			* */

			constructor(id, description) {
				/* Constructor for our class
				takinf two params (instance attributes) */
				this.id = id
				this.description = description
			}
		}


		console.log(todoItem.id)
		console.log(todoItem.description)
		return {
			Item,
			todoItem,
			List,
		}
	}
}).mount("#app")
