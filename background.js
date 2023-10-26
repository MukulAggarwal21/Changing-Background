document.getElementById('changing').addEventListener('click' , function(){
    const body = document.querySelector('body');
    const currentBackground = body.style.backgroundImage;
    if(currentBackground === 'url("https://cdn.wallpapersafari.com/20/82/y9oL4N.jpg")'){
       body.style.backgroundImage = 'url("https://wallpapercave.com/wp/wp2665219.jpg")';
    }
    else if(currentBackground === 'url("https://wallpapercave.com/wp/wp2665219.jpg")'){
         body.style.backgroundImage ='url("https://wallpaperaccess.com/full/393735.jpg")';
     }
     else if(currentBackground === 'url("https://wallpaperaccess.com/full/393735.jpg")'){
        body.style.backgroundImage = 'url("https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
     }
      
     else if(currentBackground === 'url("https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'){
        body.style.backgroundImage ='url("https://wallpapercave.com/wp/uUqxVHp.jpg")';
     }
     else if(currentBackground === 'url("https://wallpapercave.com/wp/uUqxVHp.jpg")'){
        body.style.backgroundImage = 'url("https://wallpaperaccess.com/full/1871775.jpg")';
     }
     else if(currentBackground === 'url("https://wallpaperaccess.com/full/1871775.jpg")'){
        body.style.backgroundImage = 'url("https://hdqwalls.com/wallpapers/beautiful-sea-coast-hd.jpg")';
     }
    else {
       body.style.backgroundImage ='url("https://cdn.wallpapersafari.com/20/82/y9oL4N.jpg")';
    }
});













