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
        newWorkout.textContent = workout.name + " - " + workout.duration + " minutes - " + workout.date;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
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


function updateDashboard() {
    const totalWorkouts = workouts.length;

    const totalMinutes = workouts.reduce(function(total, workout) {
        return total + Number(workout.duration);
    }, 0);

    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(now.getDate() - now.getDay());

    const weeklyWorkouts = workouts.filter(function(workout) {
        const workoutDate = new Date(workout.date);
        return workoutDate >= startOfWeek && workoutDate <= now;
    }).length;

    document.getElementById("totalWorkouts").textContent = totalWorkouts;
    document.getElementById("totalMinutes").textContent = totalMinutes;
    document.getElementById("weeklyWorkouts").textContent = weeklyWorkouts;
}
