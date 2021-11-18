nose_x = 0;
nose_y = 0;



function preload(){
   Lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(400,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);



}





function draw(){

    image( video, 0, 0, 400, 350 );

   
    
    image(Lipstick, nose_x, nose_y, 60, 40);


}

function take_photo(){
    save('My_Lipstick_Filter_Image.png');

}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses( results ){
    if( results.length > 0 ){
        console.log(results);

        console.log( " x coordinate is " + results[0].pose.nose.x);
        console.log("y coordinate is" + results[0].pose.nose.y);

        nose_x = results[0].pose.nose.x-30;
      nose_y = results[0].pose.nose.y+10;
console.log("nose x=" + nose_x);
console.log("nose y=" + nose_y);





    }

}