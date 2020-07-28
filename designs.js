// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

  var html = "";
  for(var x = 0; x < height; x++){
    html += "<tr>";
    for(var z = 0; z < width; z++){
      html += "<td></td>";
    }
    html += "</tr>";
  }
  $("#pixel_canvas").html(html);
}

$(function(){
  var height, width;
  $("#sizePicker").on('submit', function(event){
     height = $("#input_height").val();
     width = $("#input_width").val();
    event.preventDefault();
    makeGrid(height, width);
  });
  $("#pixel_canvas").on('click', 'td', function(){
    var color = $("#colorPicker").val();
    if($(this).css("background-color") == "#FFFFFF" || $(this).css("background-color") == "rgba(0, 0, 0, 0)" || $(this).css("background-color") == "rgb(255, 255, 255)") {
      $(this).css("background-color", color);
    } else {
      $(this).css("background-color", "#FFFFFF");
    }
  })
});
