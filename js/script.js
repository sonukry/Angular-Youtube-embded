
var Main = function($scope, $http){
        $scope.Name ="Toy Story - Hawaiian Vacation";
        $scope.embedUrl = "http://www.youtube.com/embed/S1Q9bAochC0?rel=0&showinfo=0&modestbranding=1&autohide=1&theme=light";
        $scope.downUrl = "http://en.savefrom.net/?url=http://www.youtube.com/embed/S1Q9bAochC0";
        $scope.downUrl2 = "http://keepvid.com/?url=http://www.youtube.com/embed/S1Q9bAochC0";
        
        $scope.setVideo = function(id){
			var url = "http://www.youtube.com/embed/" + id+"?rel=0&showinfo=0&modestbranding=1&autohide=1&theme=light";
              $scope.embedUrl = url;
            var dwnurl = "http://en.savefrom.net/?url=http://www.youtube.com/embed/" + id ;
              $scope.downUrl = dwnurl;
            var dwnurl2 = "http://keepvid.com/?url=http://www.youtube.com/embed/" + id;
              $scope.downUrl2 = dwnurl2;
              console.log(dwnurl);
             }
        $scope.setTitle = function(id){
            var Title = "" + id;
            $scope.Name = Title;  
        }
        $scope.videos = [
            {name:"meharban",url:"BHPaDY735GU"},
            {name:"manba lage",url:"52jQMfVAEEU"},
            {name:"Photo - Gippy Grewal",url:"WJ1OEUGNlGM"},
            {name: "Saree Wali Girl",url:"YXe-0BOgNBU"},
            {name: "teri yaadein",url:"RlS6u5h84FU"},
            {name:"Kabhi Toh Paas Mere",url:"Og9eAho7OJQ"},
            {name:"Kuch Is Tarah",url:"1rwTGDmD0LY"},
            {name:"Tune Maari Entriyaan",url:"j0TnkGXX2LE"},
            {name:"kamli", url:"cPgz1p4AJFY"},
            {name:"thug le", url:"LEYXdZ_rVbo"},{name:"lynda", url:"tiTGpH0Y_Zo"}
        ];
    
    };
//=========================JQuery====================================================//
$(document).ready(function(){
    $(".video").fitVids();
  });

