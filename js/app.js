
 
array = [
  {'title':'-play', 'text':'[link or search query]', 'detail-text':'Loads your input and adds it to the queue. If there is no playing track, then it will start playing.', 'body-text':'Aliases: p, q, queue', 'button-text':'Add to Queue', 'ID':'headingOne'},
  {'title':'', 'text':'', 'detail-text':'', 'body-text':'', 'button-text':''}
]

function render(data){
  for(let x = 0; x < data.length;x++){
      console.log(data[x])
        $('#accordionExample').append(
          '<div class="card bg-light-black rounded-lg shadow-lg my-3">' +
            '<div class="card-header px-0 py-2" id="headingOne">' +
              '<h2 class="mb-0">' + 
                '<button class="btn text-white text-left w-100 p-0" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">' +
                  '<div class="row m-0 p-0 d-flex align-items-center">' +
                  '<i class="category-text h5 fas fa-angle-right icon m-0 p-3">' + '</i>' + '<p class="category-text h2 ml-2 my-0">' + data[x].title + '</p>' + '<p class="category-text h3 ml-1 my-0 text-white-50">' + data[x].text + '</p>' + 
                  '</div>' + 
                '</button>' + 
              '</h2>' + 
            '</div>'

          + '<div id="collapseOne" class="collapse container m-0" aria-labelledby="headingOne" data-parent="#accordionExample">' +
           '<div class="card-body container float-left w-100 m-0 pt-0">' +    
            '<button class="btn text-white text-left w-100 p-0" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">' + 
              '<div class="card-body-text h6">' + 
              data[x]['detail-text'] + 
              '</div>' + 
              '<div class="card-body-text h6">' + data[x]['body-text'] + '</div>' + 
              '<p class="card-body-text rounded bg-danger h6 text-white text-center col-8 col-md-4 p-2">' + data[x]['button-text'] + '</p>' + 
            '</button>' + 
            '</div>' + 
            '</div>' + 
            '</div>'
        );
  }
}


render(array);