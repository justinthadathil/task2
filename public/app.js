$(document).ready(function() {
    
  $("#sortable").sortable({
      update: function(event, ui) {
          var proEntry = $(this).sortable('toArray', { attribute: 'name' });
          console.log(proEntry);
          localStorage.setItem('proEntry', JSON.stringify(proEntry));  
          var retrievedProduct = localStorage.getItem('proEntry');
          console.log('retrievedProduct: ', JSON.parse(retrievedProduct));
        }
  });

  $("#draggable li").draggable({
      connectToSortable: "#sortable",
      helper: "clone"
  });
});