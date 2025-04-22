let newdate = new Date();
console.log("Original Date Object:", newdate);

// toString() – full string representation (default)
console.log("toString():", newdate.toString());

// toDateString() – only the date portion
console.log("toDateString():", newdate.toDateString());

// toTimeString() – only the time portion
console.log("toTimeString():", newdate.toTimeString());

// toISOString() – ISO 8601 format (UTC time zone)
console.log("toISOString():", newdate.toISOString());

// toUTCString() – string in UTC format
console.log("toUTCString():", newdate.toUTCString());

// toLocaleString() – string based on local timezone & format
console.log("toLocaleString():", newdate.toLocaleString());

// toLocaleDateString() – only date part, local format
console.log("toLocaleDateString():", newdate.toLocaleDateString());

// toLocaleTimeString() – only time part, local format
console.log("toLocaleTimeString():", newdate.toLocaleTimeString());


let fixeddate=new Date(2025,3,25)
console.log(fixeddate.toDateString())

let timestamp = Date.now();
console.log("Current timestamp:", timestamp);

let date = new Date(timestamp);
console.log("Readable Date:", date.toString());

//convert into seconds

console.log(Math.round(timestamp / 1000));

//Some other methods 

let now = new Date();

console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1);
console.log("Date:", now.getDate());
console.log("Day of Week:", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Timestamp (ms):", now.getTime());


console.log(newdate.toLocaleString('default' , {
    weekday: "long\n",
    month:"long"
})
)