/**
 * Created by saurabh on 19/10/16.
 */

function get_data(page, pageSize, searchq) {
    page = page || 1;
    pageSize = pageSize || 100;
    var from_data = (page-1) * pageSize;
    searchq = searchq || {
            "from": from_data,
            "size": pageSize,
            "sort": [{"request_time":{"order" : "asc"}}]
        };
    var url = "/partners_logs/"+$('#datetimetextbox').val() +"/_search";
    console.log(url);
    $.ajax({
        url: url,
        type: 'POST',
        data: JSON.stringify(searchq),
        success: function(data) {

            data = data['hits'];
            console.log(data);
            totalItems = data['total'];
            items = data['hits'];

        },
        async:false
    });
    console.log(items);
    return items;


}
