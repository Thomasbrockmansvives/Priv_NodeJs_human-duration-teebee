const hd = require("./index");

console.log("TEST");
console.log("==========================================");

console.log("1. Test with random full valuable numbers");
console.log("------------------------------------------");
let test1count = 0;
let test1passed = 0;
let test1failed = 0;

test1count++;
if (
  hd.long_full_notation(184933750) ==
  "2 days, 3 hours, 22 minutes, 13.75 seconds"
) {
  test1passed++;
} else {
  test1failed++;
}

test1count++;
if (
  hd.long_valuable_notation(184933750) ==
  "2 days, 3 hours, 22 minutes, 13.75 seconds"
) {
  test1passed++;
} else {
  test1failed++;
}

test1count++;
if (hd.short_full_notation(184933750) == "2d 3h 22m 13.75s") {
  test1passed++;
} else {
  test1failed++;
}

test1count++;
if (hd.short_valuable_notation(184933750) == "2d 3h 22m 13.75s") {
  test1passed++;
} else {
  test1failed++;
}

test1count++;
if (hd.time_full_notation(184933750) == "2d 3:22:13.75") {
  test1passed++;
} else {
  test1failed++;
}

test1count++;
if (hd.time_valuable_notation(184933750) == "2d 3:22:13.75") {
  test1passed++;
} else {
  test1failed++;
}

console.log("tests: " + test1count);
console.log("passed: " + test1passed);
console.log("failed: " + test1failed);

console.log("------------------------------------------");

console.log("2. Test with all 1");
console.log("------------------------------------------");
let test2count = 0;
let test2passed = 0;
let test2failed = 0;

test2count++;
if (
  hd.long_full_notation(90061000) ==
  "1 day, 1 hour, 1 minute, 1 second"
) {
  test2passed++;
} else {
  test2failed++;
}

test2count++;
if (
  hd.long_valuable_notation(90061000) ==
  "1 day, 1 hour, 1 minute, 1 second"
) {
  test2passed++;
} else {
  test2failed++;
}

test2count++;
if (hd.short_full_notation(90061000) == "1d 1h 1m 1s") {
  test2passed++;
} else {
  test2failed++;
}

test2count++;
if (hd.short_valuable_notation(90061000) == "1d 1h 1m 1s") {
  test2passed++;
} else {
  test2failed++;
}

test2count++;
if (hd.time_full_notation(90061000) == "1d 1:1:1") {
  test2passed++;
} else {
  test2failed++;
}

test2count++;
if (hd.time_valuable_notation(90061000) == "1d 1:1:1") {
  test2passed++;
} else {
  test2failed++;
}

console.log("tests: " + test2count);
console.log("passed: " + test2passed);
console.log("failed: " + test2failed);

console.log("------------------------------------------");