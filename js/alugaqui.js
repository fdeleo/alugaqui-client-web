

// 1 - Event from the form submit | 2 - Selection of the ids.value | 3 - Transform to JSON string 

$( "#myId" ); 

function formJSON() {
  // Test with 1 input only
  //var jsonString;
  var input1 = $("input").eq(0).val();
  var input2 = $("input").eq(1).val();
  var input3 = $("input").eq(2).val();
  // Testing to validate response
  console.log(input1 , input2 , input3);
};

