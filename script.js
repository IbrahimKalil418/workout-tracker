const button = document.querySelector("button");

const workoutNameInput = document.getElementById("workoutName");

const workoutDurationInput = document.getElementById("workoutDuration");

const workoutList = document.getElementById("workoutList");

button.addEventListener("click", function () {

    const name = workoutNameInput.value;

    const duration = workoutDurationInput.value;

    console.log(name);

    console.log(duration);

    if (name === "" || duration === "") {

        alert("Please enter both workout name and duration.");

        return;

    }

    const newWorkout = document.createElement("li");
    newWorkout.textContent = name + " - " + duration + " minutes";

    workoutList.appendChild(newWorkout);

    workoutNameInput.value = "";

    workoutDurationInput.value = "";

});