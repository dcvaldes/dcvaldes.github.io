
const app = {};
   app.key = '19383992-be14128076b1bdd5df11ebd3e' // given from site
    app.getImages = function(query){
        $.ajax({
            url:"https://pixabay.com/api/?key="+app.key+"&q="+encodeURIComponent(`${query}`), // this is how the site requests
            method: 'GET',
            dataType: 'JSON', 
        }).then(function(result){
            //clear the table, remove any previous images
            $('.results').empty();
            app.displayImages(result.hits) 
        });
    }; 
    
    app.displayImages = function(pixabayData){ //pixabayData represents results.hits [ {}, {}]
        pixabayData.forEach(function(pixabay){ 
            //create a variable called html and store some pre-built html
            const html = ` 
            <div class="gif-box">
                <div class="img-box">
                    <img src=${pixabay.largeImageURL} alt=${pixabay.tags}/> 
                </div>
            </div>
        `
        //lageImageURL previews better images
        // add the variable to the class of results "append" to our html
        $('.results').append(html);
        })
    } 
    
    
    app.init = function(){
        $('form').on('submit', function(event){ 
            event.preventDefault();
            const userInput = $('#search-input').val(); //refers to the value from the form
            app.getImages(userInput); 
            // pass an argument that i s= the the value from the form
        })
    }
    
    $(document).ready(function(){
        app.init();
    });

