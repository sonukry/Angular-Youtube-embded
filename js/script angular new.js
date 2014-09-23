
//===================================Angular js====================================//

//==================== work with angular 1.2.xxx====================// 
//var Main = function($scope, $sce){
//        $scope.embedUrl = $sce.trustAsResourceUrl("http://www.youtube.com/embed/S1Q9bAochC0?rel=0&showinfo=0&modestbranding=1&theme=light");
//        $scope.downUrl = $sce.trustAsResourceUrl("http://en.savefrom.net/?url=http://www.youtube.com/embed/S1Q9bAochC0");
//        $scope.Name ="Toy Story - Hawaiian Vacation";
//
//        $scope.setVideo = function(id){
//			var url = "http://www.youtube.com/embed/" + id+"?rel=0&showinfo=0&modestbranding=1&theme=light";
//            $scope.embedUrl = $sce.trustAsResourceUrl(url);
//            var dwnurl = "http://en.savefrom.net/?url=http://www.youtube.com/embed/" + id ;
//            $scope.downUrl = $sce.trustAsResourceUrl(dwnurl);
//            console.log(dwnurl);
//             }
//        $scope.setTitle = function(id){
//            var Title = "" + id;
//            $scope.Name = Title;  
//        }
//        $scope.videos = [
//            {
//                name:"meharban",
//                url:"BHPaDY735GU"
//            },
//            {
//                name: "manba lage",
//                url:"52jQMfVAEEU"
//            }
//        ];
//    };