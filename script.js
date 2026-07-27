console.log ("NEW SCRIPT LOADED");
const button = document.querySelector("button");

const workoutNameInput = document.getElementById("workoutName");

const workoutDurationInput = document.getElementById("workoutDuration");

const workoutList = document.getElementById("workoutList");
let workouts = JSON.parse(localStorage.getItem("workouts")) || [];
function displayWorkouts() {
    workoutList.innerHTML = "";
    workouts.forEach(function (workout) {
        const newWorkout = document.createElement("li");
        newWorkout.textContent = workout.name + " - " + workout.duration + " minutes";
        workoutList.appendChild(newWorkout);
    });
}
displayWorkouts();
button.addEventListener("click", function () {

    const name = workoutNameInput.value;

    const duration = workoutDurationInput.value;
     if (name === "" || duration === "") {
     alert("Please enter both workout name and duration.");
     return;
    }
    workouts.push({
        name: name,
        duration: duration
    });
    console.log(workouts);
    localStorage.setItem("workouts", JSON.stringify(workouts));
    console.log (name);
    console.log (duration);
    const newWorkout = document.createElement("li");
    newWorkout.textContent = name + " - " + duration + " minutes";

    workoutList.appendChild(newWorkout);

    workoutNameInput.value = "";

    workoutDurationInput.value = "";

});