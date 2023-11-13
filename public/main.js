var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
var thumbDown = document.getElementsByClassName("fa-thumbs-down"); // added this

Array.from(thumbUp).forEach(function (element) {
	element.addEventListener("click", function () {
		const name = this.parentNode.parentNode.childNodes[1].innerText;
		const msg = this.parentNode.parentNode.childNodes[3].innerText;
		const thumbUp = parseFloat(
			this.parentNode.parentNode.childNodes[5].innerText
		);
		fetch("messages", {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: name,
				msg: msg,
				thumbUp: thumbUp,
				decrement: false,
			}),
		})
			.then((response) => {
				if (response.ok) return response.json();
			})
			.then((data) => {
				console.log(data);
				window.location.reload(true);
			});
	});
});

// added the code below
Array.from(thumbDown).forEach(function (element) {
	element.addEventListener("click", function () {
		const name = this.parentNode.parentNode.childNodes[1].innerText;
		const msg = this.parentNode.parentNode.childNodes[3].innerText;
		const thumbUp = parseFloat(
			this.parentNode.parentNode.childNodes[5].innerText
		); // changed this to 5 because thats the location of the button
		fetch("messages", {
			method: "put",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: name,
				msg: msg,
				thumbUp: thumbUp,
				decrement: true, // added this to fire when you press the thumbs down button and decrement the thumbsup by 1 serverside
			}),
		})
			.then((response) => {
				if (response.ok) return response.json();
			})
			.then((data) => {
				console.log(data);
				window.location.reload(true);
			});
	});
});

//^^^^

Array.from(trash).forEach(function (element) {
	element.addEventListener("click", function () {
		const name = this.parentNode.parentNode.childNodes[1].innerText;
		const msg = this.parentNode.parentNode.childNodes[3].innerText;
		fetch("messages", {
			method: "delete",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				msg: msg,
			}),
		}).then(function (response) {
			window.location.reload();
		});
	});
});
