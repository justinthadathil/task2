$( function() {
    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();

    $('#sortable1').sortable({
      update: function(event, ui) {
        var proEntry = $(this).sortable('toArray');
        /* console.log(proEntry); */
        localStorage.setItem('proEntry', JSON.stringify(proEntry));  
        var retrievedProduct = localStorage.getItem('proEntry');
        console.log('retrievedProduct: ', JSON.parse(retrievedProduct));
      }
   });
});