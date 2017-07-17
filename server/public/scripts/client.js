console.log("WORKING");

var myApp = angular.module('myApp', []);

myApp.controller('readyController', function($scope){

  // console.log('readyController');

  $scope.photography = [
    {
      src:"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/18645043_226750054491778_8207656367780003840_n.jpg",
      likes: 0,
      views: 0,
      visible: true,
      comments: [],
      description: "I make Mount Rushmore look good."

    },
    {
      src:"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/17586802_455826508088011_2946745240372903936_n.jpg",
      likes: 0,
      views: 0,
      visible: true,
      comments: [],
      description: "Minneapolis is forever be home."
    },
    {
      src:"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/19227720_482750522075745_9222022618259914752_n.jpg",
      likes: 0,
      views: 0,
      visible: true,
      comments: [],
      description: "Cali will forever be in my heart."
    },
    {
      src:"https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/18722176_439281989765126_7334059663291318272_n.jpg",
      likes: 0,
      views: 0,
      visible: true,
      comments: [],
      description: "Berlin, where I fell in love with Doner Kebabs"

    },
    {
      src:"https://scontent.cdninstagram.com/t51.2885-15/e35/13473091_1560209950950817_776953951_n.jpg",
      likes: 0,
      views: 0,
      comments: [],
      description: "My Rock", visible: true,
    },
    {
      src:"https://scontent.cdninstagram.com/t51.2885-15/e35/18723109_1837903759860045_6670657262404501504_n.jpg",
      likes: 0,
      views: 0,
      visible: true,
      comments: [],
      description: "Paris, found reassurance."
    }

  ];


  $scope.addComment = function(photo, comment){
    // var message = {comment: comment};
    photo.comments.push(comment);
    // console.log(comment);
  }//end of add comment funciton

  $scope.addLikes = function(photo, likes){
    photo.likes += 1;
  }//end of addLikes

  // $scope.addViews = function(photo, views){
  //   photo.views +=1;
  // }

  //hide and showing the description
  $scope.hideShow = function(photo, visible, description, views){

    photo.visible = !photo.visible;
    photo.description;

    console.log(photo.visible);
    console.log(photo.description);

    photo.views +=1;
  }


});
