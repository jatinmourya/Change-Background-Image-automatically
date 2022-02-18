      var img = [
      "/HTML/coffee/images/c2.jpg",
      "/HTML/coffee/images/c3.jpeg",
      "/HTML/coffee/images/c4.jpeg",
      "/HTML/coffee/images/c1.jpeg",
      ];
      var counter = 0;
      changeImage = ()=> {
        document.body.style.backgroundImage = "url(" + img[counter] + ")";
        counter++;
        if (counter == 4) {
          counter = 0;
        }
      }
      setInterval(changeImage, 2000);
