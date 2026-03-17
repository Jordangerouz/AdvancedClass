$( "#datepicker" ).datepicker({
  dateFormat: "mm/dd/yy", // Customize date format
  showButtonPanel: true, // Show "Today" and "Done" buttons
  changeMonth: true,      // Allow month selection
  changeYear: true,       // Allow year selection
  onSelect: function(dateText, inst) {
    console.log("Date selected:", dateText);
    // Perform actions with the selected date
  }
});

// Setting a specific date programmatically:
$("#datepicker").datepicker("setDate", "12/25/2024");

// Disabling specific dates:
$("#datepicker").datepicker("option", "beforeShowDay", function(date) {
  let day = date.getDay();
  return [(day != 0 && day != 6), ""]; // Disable weekends (0 = Sunday, 6 = Saturday)
});

$("#accordion").accordion({
  collapsible: true, // Allow all sections to be closed
  active: false,      // Start with all sections closed
  heightStyle: "content" // Adjust height based on content
});

$("#box").animate({
  width: "300px",
  height: "200px",
  opacity: 0.8
}, 1000, "easeOutBounce", function() {  // Using "easeOutBounce"
  console.log("Animation complete!");
});