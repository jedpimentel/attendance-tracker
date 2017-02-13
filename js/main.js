var dataArr = [];
$("#add").on("click", function() {
  dataArr.push($("#input").val());
  $("#input").val("");
});
$("#list").on("click", function() {
  dataArr.forEach(function(entry, index) {
    $("ol").append("<li>" + dataArr[index] + "</li>");
  })
});
