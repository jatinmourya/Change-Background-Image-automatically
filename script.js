      var img = [
      "https://raw.githubusercontent.com/jatinmourya07798/Change-Background-Image-automatically/main/images/c2.jpg",
      "https://raw.githubusercontent.com/jatinmourya07798/Change-Background-Image-automatically/main/images/c3.jpeg",
      "https://raw.githubusercontent.com/jatinmourya07798/Change-Background-Image-automatically/main/images/c4.jpeg",
      "https://raw.githubusercontent.com/jatinmourya07798/Change-Background-Image-automatically/main/images/c1.jpeg",
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
