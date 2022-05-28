fetch("https://www.breakingbadapi.com/api/characters")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    // character list data
    const body = document.querySelector("body");

    // Create header 1 and inner text that says Breaking Bad
    const header1 = document.createElement("h1");
    header1.innerText = "Breaking Bad Characters";
    document.body.appendChild(header1);

    // add button to change background color
    const bodyColor = document.createElement("button");
    bodyColor.setAttribute("id", "bgColor");
    bodyColor.innerText = "Random Color Change";
    // change background color when you click on button
    bodyColor.addEventListener("click", function onclick() {
      const color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)})`;
      document.body.style.backgroundColor = color;
      bodyColor.style.backgroundColor = color;
    });
    document.body.appendChild(bodyColor);

    // create a loop to display all characters
    for (let i = 0; i < data.length; i++) {
      let characterData = data[i];

      // create div wrapper for the characters
      const castList = document.createElement("div");
      castList.id = "wrapper";
      document.body.appendChild(castList);

      // create container for character
      const span = document.createElement("div");
      span.className = "character";
      castList.appendChild(span);

      // add images to div
      const images = document.createElement("img");
      images.src = characterData.img;
      span.appendChild(images);

      // add name to div
      const name = document.createElement("p");
      name.innerText = characterData.name;
      span.appendChild(name);

      // add birthday to div
      const birthDate = document.createElement("p");
      birthDate.innerText = "Born: " + characterData.birthday;
      span.appendChild(birthDate);

      // add actor name to div
      const actor = document.createElement("p");
      actor.innerText = "Portrayed by: " + characterData.portrayed;
      span.appendChild(actor);

      /* add a button */
      // first create a button element
      const myButton = document.createElement("button");
      myButton.innerText = "Status";
      castList.appendChild(myButton);

      // add event listener
      myButton.addEventListener("click", function onclick() {
        const para = document.createElement("p");
        para.innerHTML = characterData.status;
        myButton.remove();
        span.appendChild(para);
      });
    }
  });
