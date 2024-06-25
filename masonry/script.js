let limit = 10;
let skip = 0;

var totalRows = 4,
  itemCol = 0;
for (var rowCount = 0; rowCount < totalRows; rowCount++) {
  let div = `<div class="col"> </div>`;

  document.getElementsByClassName("container")[0].innerHTML += div;
}
// console.log(document.getElementsByClassName('col')[3]);
async function getdata() {
  const data = await fetch(
    `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
  );
  const jsonData = await data.json();
  console.log(jsonData.posts);
  let postData = jsonData.posts;
  console.log(postData);

  for (var itemCount = 0; itemCount < postData.length; itemCount++) {
    let div = `<div class="box"> <h2>${postData[itemCount].title} --  ${itemCount}</h2> <p> ${postData[itemCount].body} </p> </div>`;
    document.getElementsByClassName("col")[itemCol].innerHTML += div;
    console.log(div);
    console.log(document.getElementsByClassName("col"));

    if (itemCol < totalRows - 1) {
      itemCol++;
    } else {
      itemCol = 0;
    }
    console.log(div);
  }
  // console.log(container)
}
getdata();

function handleSubmit() {
  skip += 10;
  getdata();
}

function adjustFontSize() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenWidth <= 375) {
    totalRows = 1;
  } else if (screenWidth <= 425) {
    totalRows = 2;
  } else if (screenWidth <= 768) {
    totalRows = 3;
  }
}
window.onload = window.onresize = adjustFontSize;
