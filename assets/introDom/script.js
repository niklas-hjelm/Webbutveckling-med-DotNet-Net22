// const lista = document.getElementById("lista");
// for (let i = 0; i < lista.children.length; i++) {
//   lista.children[i].onmouseover = mouseOver;
// }

// const eventDemo = document.createElement("h1");
// eventDemo.innerText = "Testa mig!";
// eventDemo.onmouseover = mouseOver;
// document.body.appendChild(eventDemo);

// function mouseOver() {
//   console.log("WOOP");
// }

const animals = ["Hund", "Katt", "Kanin"];

const div = document.createElement("div");
document.body.appendChild(div);

let listVisible = false;

function headerClick(element) {
  element.style.color = "red";
}

function generateList() {
  console.log(listVisible);
  if (listVisible) {
    const ul = document.getElementById("djur");
    ul.remove();
  } else {
    const ul = document.createElement("ul");
    ul.id = "djur";
    for (const animal of animals) {
      const li = document.createElement("li");
      li.innerText = animal;
      li.onmouseover = () => mouseOverLi(li);
      ul.appendChild(li);
    }

    div.appendChild(ul);
  }

  listVisible = !listVisible;
}

function mouseOverLi(li) {
  console.log(li.innerText);
}
