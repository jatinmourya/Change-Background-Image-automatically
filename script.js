      var img = [
      "images/c2.jpg",
      "images/c3.jpeg",
      "images/c4.jpeg",
      "images/c1.jpeg",
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
