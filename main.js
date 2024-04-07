const { createApp, ref, computed } = Vue;
createApp({
	setup() {
		const idSt = ref(1);
		const showStatics = ref(false);
		const liste = ref([]);
		const searcheString = ref("");
		const todoItem = ref({
			id: idSt.value,
			description: "",
			status: "",
			done: false,
		});

		const completedTasks = computed(() => {
			return liste.value.filter((task) => task.done == true);
		});

		const unCompletedTasks = computed(() => {
			return liste.value.filter((task) => task.done == false);
		});

		function uploadTodo() {
			liste.value = [
				{ id: 1, description: "Task 1", done: false, status: "In progress" },
				{ id: 2, description: "Task 2", done: false, status: "In progress" },
				{ id: 3, description: "Task 3", done: false, status: "In progress" },
				{ id: 4, description: "Task 4", done: false, status: "In progress" },
				{ id: 5, description: "Task 5", done: false, status: "In progress" },
			];
			idSt.value = 6;
			emptyTodoItem();
		}

		function emptyData() {
			liste.value = [];
		}
		function emptyTodoItem() {
			todoItem.value = {
				id: idSt.value,
				description: "",
				done: false,
			};
		}

		function addTodo() {
			liste.value.push(todoItem.value);
			idSt.value = idSt.value + 1;
			emptyTodoItem();
			Swal.fire({
				title: "Success!",
				text: "Task added",
				icon: "success",
			});
		}

		function showTodo(todo) {
			todoItem.value = todo;
		}

		function predeleteTodo(todo) {
			todoItem.value = todo;
		}
		function deleteTodo() {
			liste.value = liste.value.filter((todo) => todo.id !== todoItem.value.id);
			emptyTodoItem();
			idSt.value = 1;
			Swal.fire({
				title: "Success!",
				text: "Task deleted",
				icon: "success",
			});
		}
		function preupdate(update) {
			todoItem.value = update;
		}
		function updateTodo() {
			liste.value = liste.value.update((todo) => todo.id != todoItem.value.id);
			liste.value.push(todoItem.value);
			emptyTodoItem();
			liste.value = liste.value.sort((a, b) => a.id - b.id);
		}

		function returnToTodo() {
			todoItem.value = {
				id: 0,
				description: "",
				done: false,
			};
		}

		function findItem() {
			liste.value = liste.value.filter((item) => item.description.includes(searcheString));
		}

		return {
			liste,
			todoItem,
			uploadTodo,
			completedTasks,
			unCompletedTasks,
			addTodo,
			returnToTodo,
			deleteTodo,
			predeleteTodo,
			preupdate,
			updateTodo,
			emptyData,
			showTodo,
			emptyTodoItem,
			idSt,
			showStatics,
			searcheString,
			findItem,
		};
	},
}).mount("#app");
