/**
 * Created by saurabh on 19/10/16.
 */
function query_maker(page, pageSize) {
    page = page || 1;
    pageSize = pageSize || 100;
    var from_data = (page-1) * pageSize;
    var query_for = $('#query_for').val();
    var query_term = $('#query_term').val();
    searchq = {
        "from": from_data,
        "size": pageSize,
        "sort": [{"request_time":{"order" : "asc"}}]
    };
    if (query_for != "na") {
        searchq["query"] = {
            "bool": {
                "must": [
                    {
                        "query_string": {
                            "default_field": query_for,
                            "query": query_term
                        }
                    }
                ],
                "must_not": [],
                "should": []
            }
        };
    }
    console.log(JSON.stringify(searchq));
    return searchq;


}
