const imgWrap = document.querySelector(".img-wrap")

const Url = "https://jsonplaceholder.typicode.com/photos?_limit=30"

fetch(Url).then((res) => res.json())
  .then((data) => {
    data.map((value) => {
      key = value.id;
      let img = document.createElement("img");
      img.src = `https://picsum.photos/200/300?random=${value.id}`;
      imgWrap.appendChild(img)
    })
  })