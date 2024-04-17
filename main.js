const { createApp, ref, computed } = Vue;
createApp({
	setup() {
		const idSt = ref(1);
		const showStatics = ref(false);
		const showCalendar = ref(false);
		const showTable = ref(false);
		let spinner = ref(true);
		const liste = ref([]);
		const loginform = ref(true);
		const user = { username: "", password: "" };
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

		const inProgress = computed(() => {
			return liste.value.filter((task) => task.status == "InProgress");
		});
		const canceled = computed(() => {
			return liste.value.filter((task) => task.status == "Canceled");
		});

		const timeOut = computed(() => {
			return liste.value.filter((task) => task.status == "Timeout");
		});

		function uploadTodo() {
			liste.value = [
				{ id: 1, description: "Task 1", done: false, status: "inProgress" },
				{ id: 2, description: "Task 2", done: true, status: "Done" },
				{ id: 3, description: "Task 3", done: true, status: "Done" },
				{ id: 4, description: "Task 4", done: true, status: "Done" },
				{ id: 5, description: "Task 5", done: true, status: "Done" },
			];
			idSt.value = 6;
			emptyTodoItem();
		}
		function calendar() {
			showStatics.value = false;
			showTable.value = false;
			showCalendar.value = true;
			loginform.value = false;

			$("#calendar").evoCalendar({
				calendarEvents: [
					{
						name: "Task 1",
						id: "4hducye", // Event's id (required, for removing event)
						description: "Lorem ipsum dolor sit amet..", // Description of event (optional)
						badge: "1-day event", // Event badge (optional)
						date: new Date(), // Date of event
						type: "event", // Type of event (event|holiday|birthday)
						color: "#63d867", // Event custom color (optional)
					},
				],
			});
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

		function findItem(items) {
			liste.value = liste.value.filter((item) =>
				item.description.toLowerCase().includes(items.toLowerCase()),
			);
		}

		function canvas() {
			showStatics.value = true;
			showTable.value = false;
			showCalendar.value = false;
			loginform.value = false;
			setTimeout(
				() => {
					spinner.value = false;
					const ctx = document.getElementById("myChart");

					new Chart(ctx, {
						type: "doughnut",
						data: {
							labels: ["Done", "In progress", "Canceled", "Timeout"],
							datasets: [
								{
									label: "# of Votes",
									data: [12, 19, 3, 5],
									borderWidth: 1,
								},
							],
						},
						options: {
							scales: {
								y: {
									beginAtZero: true,
								},
							},
						},
					});
				},

				2000,
			);
		}
		function checkUser() {
			if (user.username == "dias" && user.password == "dd") {
				loginform.value = false;
				showTable.value = true;
			}
			else {
				Swal.fire({
				title: "Failed!",
				text: "Username or password are incorrect",
				icon: "error",
			});

			}
		}
		function logOut() {
			loginform.value = true
			user.username.valueOf = ""
			user.password.valueOf = ""


		}

		return {
			showCalendar,
			showTable,
			calendar,
			liste,
			unCompletedTasks,
			canceled,
			timeOut,
			inProgress,
			spinner,
			loginform,
			checkUser,
			logOut,
			user,
			canvas,
			todoItem,
			uploadTodo,
			completedTasks,
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
