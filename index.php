<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Partners Portal Logs</title>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.4/css/bootstrap-datepicker.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.4/js/bootstrap-datepicker.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css" rel="stylesheet">
    <style>
        .navbar {
            border-radius: 0;
        }
        .json-data {
            display: none;
        }
        .fa-bars:hover {
            cursor: pointer;
        }
    </style>
</head>
<body>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Partners Log</a>
        </div>
    </div><!-- /.container-fluid -->
</nav>
<div class="container" ng-app="app" ng-controller="ExampleController as vm">
    <div class="row" style="text-align: center">

        <?php include ('searchbox.html'); ?>

        <div class="col-md-12">
            <ul class="pagination" id="pagination-js-navigation" align="center"></ul>
        </div>



    </div>

    <div class="panel panel-default" ng-repeat="item in vm.items | orderBy:sortType:sortReverse" ng-show="([item] | filter:searchId).length > 0">
        <div class="panel-body">
            <h5 ng-switch on="item._source.code">
                <p style="color: green" ng-switch-when="item._source.code == 200" ng-bind="item._source.code"></p>
                <p style="color: red"   ng-switch-default ng-bind="item._source.code"></p>
            </h5>
            <h5><b>[ {{ item._source.method }} ]</b> : {{ item._source.endpoint }}</h5>
            <h5><b>Ip Address</b> : {{ item._source.ip }}</h5>
            <h5><b>User Name</b> : {{ item._source.user_name }}</h5>
            <h5><b>User Phoneno</b> : {{ item._source.user_phoneno }}</h5>
            <h5><b>User Id</b> : {{ item._source.user_user_id }}</h5>
            <h5><b>Request Time</b> : {{ item._source.response_time }}, <b>Response Time</b> : {{ item._source.request_time }}</h5>
            <div class="row">
                <div class="col-md-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-md-10">Request Data</div>
                                <div class="col-md-2"><i class="fa fa-bars fa-1x" aria-hidden="true" id="{{item._id}}-request" onclick="slidertoggel_requests(this.id)"></i></div>
                            </div>
                        </div>
                        <div class="panel-body json-data" id="{{item._id}}-request-data-request"><pre>{{item._source.request_data | json}}</pre></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-md-10">Response Data</div>
                                <div class="col-md-2"><i class="fa fa-bars fa-1x" aria-hidden="true" id="{{item._id}}-response" onclick="slidertoggel_response(this.id)"></i></div>
                            </div>
                        </div>
                        <div class="panel-body json-data" id="{{item._id}}-response-data-response"><pre>{{item._source.response_data | json}}</pre></div>
                    </div>
                </div>
            </div>
        </div>


    </div>


</div>
</div>
</body>
<script src="jquery-pagination.js"></script>

<script src="script.js"></script>
<script src="datetimescript.js"></script>
<script src="querymaker.js"></script>
<script src="getdata.js"></script>

</html>