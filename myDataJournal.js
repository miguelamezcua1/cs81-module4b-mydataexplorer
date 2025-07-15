// GitHub URL: https://github.com/miguelamezcua1/cs81-module4b-mydataexplorer

// Weekly personal data journal
const weekData = [
  { day: "Monday", sleepHours: 6.5, screenTime: 7, mood: "tired", caffeineIntake: 2, focusLevel: 5 },
  { day: "Tuesday", sleepHours: 7, screenTime: 6, mood: "focused", caffeineIntake: 1, focusLevel: 7 },
  { day: "Wednesday", sleepHours: 5.5, screenTime: 8, mood: "distracted", caffeineIntake: 3, focusLevel: 4 },
  { day: "Thursday", sleepHours: 7.5, screenTime: 5, mood: "productive", caffeineIntake: 1, focusLevel: 8 },
  { day: "Friday", sleepHours: 6, screenTime: 6.5, mood: "okay", caffeineIntake: 2, focusLevel: 6 },
  { day: "Saturday", sleepHours: 8, screenTime: 4, mood: "relaxed", caffeineIntake: 0, focusLevel: 7 },
  { day: "Sunday", sleepHours: 7.5, screenTime: 3, mood: "relaxed", caffeineIntake: 0, focusLevel: 6 }
];

//  PREDICTIONS 

// I think Wednesday had the most screen time (I was on YouTube a lot).
// Best focus day is probably Thursday. I remember getting a lot done.
// I don’t think more caffeine helped my focus, maybe the opposite.

// --- My Functions ---

// Try to find which day had the most screen time
function findHighestScreenTime(data) {
  let most = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].screenTime > most.screenTime) {
      most = data[i];
    }
  }
  return most.day + " (" + most.screenTime + " hrs)";
}

// This finds the average sleep over the week
function averageSleep(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].sleepHours;
  }
  let avg = total / data.length;
  return avg.toFixed(1); // round to 1 decimal
}

// This counts moods and tells which one showed up most
function mostFrequentMood(data) {
  let moodCounts = {};

  for (let i = 0; i < data.length; i++) {
    let mood = data[i].mood;
    if (moodCounts[mood]) {
      moodCounts[mood]++;
    } else {
      moodCounts[mood] = 1;
    }
  }

  let most = "";
  let count = 0;
  for (let mood in moodCounts) {
    if (moodCounts[mood] > count) {
      most = mood;
      count = moodCounts[mood];
    }
  }

  return '"' + most + '"';
}

// This compares caffeine to focus levels
function correlateCaffeineToFocus(data) {
  let lowFocus = 0;
  let lowCount = 0;
  let highFocus = 0;
  let highCount = 0;

  for (let i = 0; i < data.length; i++) {
    let entry = data[i];
    if (entry.caffeineIntake >= 2) {
      highFocus += entry.focusLevel;
      highCount++;
    } else {
      lowFocus += entry.focusLevel;
      lowCount++;
    }
  }

  let highAvg = (highFocus / highCount).toFixed(1);
  let lowAvg = (lowFocus / lowCount).toFixed(1);

  return "High caffeine avg: " + highAvg + ", Low caffeine avg: " + lowAvg;
}

// --- Print Results ---

console.log("Analyzing My Data Journal...\n");
console.log("Most screen time:", findHighestScreenTime(weekData));
console.log("Average sleep:", averageSleep(weekData), "hrs");
console.log("Most frequent mood:", mostFrequentMood(weekData));
console.log("Does more caffeine mean better focus? →", correlateCaffeineToFocus(weekData));
