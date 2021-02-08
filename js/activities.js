$(document).ready(function () {
  $('#select td').click(function () {
    var content = $(this).text();
    var head = $(this).closest('table').find('th').eq($(this).index()).text();
    if (content != 'Not Available') {
      $(this).toggleClass('highlight');

      if ($(this).hasClass('highlight')) {
        //check if selected cell has class
        $('#displaySelected').css('visibility', 'visible'); //make display box visible
        $('#displaySelected').css('margin-top', '2em'); //add spaces above display box
        $('#result').append('<p>' + content + ' at ' + head + '</p>'); //add child element with content of cell
      } else {
        //if selected cell don't have class
        $('#result p:contains(' + content + ')').remove(); //remove child element
        if ($('#result').has('p').length == false) {
          //check if there are any child elements within parent
          $('#displaySelected').css('visibility', 'hidden');
          $('#displaySelected').css('margin-top', '0');
        }
      }
    }
  });
});
