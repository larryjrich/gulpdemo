var quotes = generateQuotes();

// get 5 random bob ross quotes. requires bob-ross-quotes.js
function addQuote(new_quote) {
    quotes.push(new_quote);
    $("#br-quote-table tbody").append(' \
        <tr> \
            <td>' + quotes.length + '</td> \
            <td><p>' + quotes[quotes.length-1] + '</p></td> \
        </tr> \
    ');
}

$(document).ready( function() {
    // populate table with quotes
    $.each(quotes, function(index, value){
        $('#br-quote-table tbody').append(' \
          <tr> \
              <td>' + (index+1) + '</td> \
              <td><p>' + value + '</p></td> \
          </tr> \
        ');
    });

    // save new quote handler
    $("#save-quote").click(function(event){
        event.preventDefault();
        var new_quote = $('#quote-field');
        addQuote(new_quote.val());
        new_quote.val(''); // reset text
        return false;
    });
});
