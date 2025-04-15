let points = 0;

const pointsDisplay = document.getElementById("points");

export function addPoints() {
    points++;
}

export function getPoints() {
    return points;
}

export function renderPointsCounter() {
    pointsDisplay.innerHTML = "Points: " + points;
}
