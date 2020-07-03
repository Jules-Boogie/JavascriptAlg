// Fibonacci Sequence


// In this activity, we're creating a function that generates
// the first few elements of the fibonacci sequence

// -------------------------------------------------------
//                 Generate Fibonacci Sequence
// -------------------------------------------------------
function fibonacci(num) {
  // -------------------- Your Code Here --------------------
  const arr = [0, 1]

  for (var i = 2; i < num; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }

  return arr;

  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `fibonacci` function with the user input
$(function () {
  $(document).on("click", "button[type=submit]", function (event) {
    event.preventDefault();

    num = $("input").val().trim();
    $("#output-area").text(fibonacci(num));

  });
})