const _ = require("lodash");

const milliseconds_in_second = 1000;
const milliseconds_in_minute = 60 * milliseconds_in_second;
const milliseconds_in_hour = 60 * milliseconds_in_minute;
const milliseconds_in_day = 24 * milliseconds_in_hour;


function render_duration_in_array(duration_in_milliseconds){
   let rest_duration = duration_in_milliseconds;
   let duration_in_array = new Array();

   days = (rest_duration - rest_duration % milliseconds_in_day) / milliseconds_in_day;
   duration_in_array.push(days);
   rest_duration = rest_duration % milliseconds_in_day;

   hours = (rest_duration - (rest_duration % milliseconds_in_hour)) / milliseconds_in_hour;
   duration_in_array.push(hours);
   rest_duration = rest_duration % milliseconds_in_hour;

   minutes = (rest_duration - (rest_duration % milliseconds_in_minute)) / milliseconds_in_minute;
   duration_in_array.push(minutes);
   rest_duration = rest_duration % milliseconds_in_minute;

   seconds = rest_duration / 1000;
   duration_in_array.push(seconds);

   return duration_in_array;
}

function long_full_notation(duration_in_milliseconds) {
   const duration_in_array = render_duration_in_array(duration_in_milliseconds);
   let notation_string = "";

   notation_string += duration_in_array[0] + " day";
   if (duration_in_array[0] != 1) {
      notation_string += "s";
   }
   notation_string += ", ";

   notation_string += duration_in_array[1] + " hour";
   if (duration_in_array[1] != 1) {
      notation_string += "s";
   }
   notation_string += ", ";

   notation_string += duration_in_array[2] + " minute";
   if (duration_in_array[2] != 1) {
      notation_string += "s";
   }
   notation_string += ", ";
   
   notation_string += duration_in_array[3] + " second";
   if (duration_in_array[3] != 1) {
      notation_string += "s";
   }

   return notation_string;
}

function long_valuable_notation(duration_in_milliseconds) {
   const duration_in_array = render_duration_in_array(duration_in_milliseconds);
   let notation_string = "";

   if (duration_in_array[0] > 0) {
     notation_string += duration_in_array[0] + " day";
     if(duration_in_array[0] != 1){
      notation_string += "s";
     }
     if (
       duration_in_array[1] != 0 ||
       duration_in_array[2] != 0 ||
       duration_in_array[3] != 0
     ) {
       notation_string += ", ";
     }
   }
   if (duration_in_array[1] > 0) {
      notation_string += duration_in_array[1] + " hour";
      if(duration_in_array[1] != 1){
         notation_string += "s";
      }
      if ( duration_in_array[2] != 0 || duration_in_array[3] != 0){
         notation_string += ", ";
      }
   }
   if (duration_in_array[2] > 0) {
     notation_string += duration_in_array[2] + " minute";
     if(duration_in_array[2] != 1){
      notation_string += "s";
     }
     if (
       duration_in_array[3] != 0
     ) {
       notation_string += ", ";
     }
   }
   if (duration_in_array[3] > 0) {
     notation_string += duration_in_array[3] + " second";
     if(duration_in_array[3] != 1){
      notation_string += "s";
     }
   }

   return notation_string;
}

function short_full_notation(duration_in_milliseconds) {
   const duration_in_array = render_duration_in_array(duration_in_milliseconds);
   let notation_string = "";

   notation_string += duration_in_array[0] + "d ";

   notation_string += duration_in_array[1] + "h ";

   notation_string += duration_in_array[2] + "m ";

   notation_string += duration_in_array[3] + "s";

   return notation_string;
}

function short_valuable_notation(duration_in_milliseconds) {
   const duration_in_array = render_duration_in_array(duration_in_milliseconds);
   let notation_string = "";

   if (duration_in_array[0] > 0) {
     notation_string += duration_in_array[0] + "d";

     if (
       duration_in_array[1] != 0 ||
       duration_in_array[2] != 0 ||
       duration_in_array[3] != 0
     ) {
       notation_string += " ";
     }
   }
   if (duration_in_array[1] > 0) {
     notation_string += duration_in_array[1] + "h";

     if (duration_in_array[2] != 0 || duration_in_array[3] != 0) {
       notation_string += " ";
     }
   }
   if (duration_in_array[2] > 0) {
     notation_string += duration_in_array[2] + "m";

     if (duration_in_array[3] != 0) {
       notation_string += " ";
     }
   }
   if (duration_in_array[3] > 0) {
     notation_string += duration_in_array[3] + "s";
   }

   return notation_string;
}

function time_full_notation(duration_in_milliseconds) {
   const duration_in_array = render_duration_in_array(duration_in_milliseconds);
   let notation_string = "";

   notation_string += duration_in_array[0] + " day";
   if (duration_in_array[0] != 1) {
     notation_string += "s";
   }
   notation_string += ", ";

   notation_string += duration_in_array[1] + " hour";
   if (duration_in_array[1] != 1) {
     notation_string += "s";
   }
   notation_string += ", ";

   notation_string += duration_in_array[2] + " minute";
   if (duration_in_array[2] != 1) {
     notation_string += "s";
   }
   notation_string += ", ";

   notation_string += duration_in_array[3] + " second";
   if (duration_in_array[3] != 1) {
     notation_string += "s";
   }

   return notation_string;
}

function time_valuable_notation(duration_in_milliseconds) {
   const duration_in_array = render_duration_in_array(duration_in_milliseconds);
   let notation_string = "";

   if (duration_in_array[0] > 0) {
     notation_string += duration_in_array[0] + " day";
     if (duration_in_array[0] != 1) {
       notation_string += "s";
     }
     if (
       duration_in_array[1] != 0 ||
       duration_in_array[2] != 0 ||
       duration_in_array[3] != 0
     ) {
       notation_string += ", ";
     }
   }
   if (duration_in_array[1] > 0) {
     notation_string += duration_in_array[1] + " hour";
     if (duration_in_array[1] != 1) {
       notation_string += "s";
     }
     if (duration_in_array[2] != 0 || duration_in_array[3] != 0) {
       notation_string += ", ";
     }
   }
   if (duration_in_array[2] > 0) {
     notation_string += duration_in_array[2] + " minute";
     if (duration_in_array[2] != 1) {
       notation_string += "s";
     }
     if (duration_in_array[3] != 0) {
       notation_string += ", ";
     }
   }
   if (duration_in_array[3] > 0) {
     notation_string += duration_in_array[3] + " second";
     if (duration_in_array[3] != 1) {
       notation_string += "s";
     }
   }

   return notation_string;
}

// 3 days, 3 hours, 22 minutes and 1,750 second
console.log("3, 3, 22, 1.750");
console.log(short_valuable_notation(271321750));

// 3 days, 0 hours, 22 minutes and 1,750 second
console.log("3, 3, 22, 1.750");
console.log(short_valuable_notation(260521750));

module.exports = {long_full_notation, long_valuable_notation, short_full_notation, short_valuable_notation, time_full_notation, time_valuable_notation};