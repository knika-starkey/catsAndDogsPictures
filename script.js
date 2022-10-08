"use strict";
// let animal = prompt("-Hазвa тварини");
// let n = prompt("кількість зображень");
function print(animal, n = 1) {
  if (isNaN(n)) {
    alert("Це не число!");
    return;
  } else {
    let cats = [
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
      "https://i.pinimg.com/originals/d0/12/af/d012aff69e79c5f5558b0eb78167f151.jpg",
      "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
      "https://www.ukpets.com/blog/wp-content/uploads/2018/05/The-5-Cat-Breeds-That-Love-You-Best.jpg",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQMKVT_XW7x4z5P-mcCD2oxG6sCdneAHlfjpPOFLGDFT7AyCo5w",
      "https://krasivosti.pro/uploads/posts/2021-03/1616474532_24-p-kot-s-podnyatoi-lapoi-foto-koshka-25.jpg",
    ];
    let dogs = [
      "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
      "https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg",
      "https://cdn.britannica.com/49/161649-050-3F458ECF/Bernese-mountain-dog-grass.jpg",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beautiful-australian-shepherd-walking-royalty-free-image-168814214-1565190235.jpg?crop=0.66832xw:1xh;center,top&resize=480:*",
      "https://media.istockphoto.com/photos/corgi-pembroke-puppy-on-sea-coast-dog-beach-and-walking-concept-world-picture-id1302660208?b=1&k=20&m=1302660208&s=612x612&w=0&h=9J5V82fSRGb0yzFScHvnGxfqudZxB8RWNOfLhzcTAKY=",
    ];

    let str = "<table><tr>";
    let count = n;
    let check = 0;
    for (let i = 0; i < 10; i++) {
      str += `<th>${animal}</th>`;
    }
    str += "</tr>";

    for (let j = 0; j < Math.ceil(n / 10); j++) {
      str += "<tr>";
      check = count >= 10 ? 10 : count % 10;
      for (let i = 0; i < check; i++) {
        console.log(count);
        str += `<td><img src="`;
        switch (animal) {
          case "cat":
            str += cats[Math.floor(Math.random() * cats.length)];
            break;
          case "dog":
            str += dogs[Math.floor(Math.random() * dogs.length)];
            break;
          default:
            alert("Такої тварини нема у нашій бібліотеці");
            return;
        }
        str += `" alt="" height="100px" /></td>`;
      }

      str += "</tr>";
      count -= 10;
    }
    str += "</table>";
    return str;
  }
}
document.write(print(prompt("-Hазвa тварини"), prompt("кількість зображень")));
