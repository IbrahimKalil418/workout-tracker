console.log ("NEW SCRIPT LOADED");
const button = document.querySelector("button");

const workoutNameInput = document.getElementById("workoutName");

const workoutDurationInput = document.getElementById("workoutDuration");

const workoutList = document.getElementById("workoutList");
let workouts = JSON.parse(localStorage.getItem("workouts")) || [];
function displayWorkouts() {
    workoutList.innerHTML = "";
    workouts.forEach(function (workout,index) {
        const newWorkout = document.createElement("li");
        newWorkout.textContent = workout.name + " - " + workout.duration + " minutes" + workout.date;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            workouts.splice (index, 1);
            localStorage.setItem("workouts", JSON.stringify(workouts));
            displayWorkouts();
        });
        newWorkout.appendChild(deleteButton);
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
        duration: duration,
        date: new Date().toLocaleDateString ()
    });
    console.log(workouts);
    localStorage.setItem("workouts", JSON.stringify(workouts));
    displayWorkouts();
    workoutNameInput.value = "";
    workoutDurationInput.value = "";
     });