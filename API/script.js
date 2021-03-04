var html;
var c = [];
var count = 0;
function fetchData() {
  fetch("https://api.npoint.io/d6bd0efc05639084eb17")
    .then((resp) => {
      if (!resp.ok) {
        throw Error("err");
      }
      return resp.json();
    })
    .then((data) => {
      //console.log(data);
      html = data.playerList
        .map((user) => {
          c.push(user.PFName);
          count++;
          return `
          <div id="second" class="card col-md-3 m-2>
           <div class="card-body">
           <p><img class="card-img-top" src="${user.Id}.jpg"</p>
          <p> Name is: ${user.PFName}</p>
          <p>Skils are: ${user.SkillDesc}</p>
          <p>Value is: ${user.Value}</p>
          <p>Upcoming matches is: ${user.UpComingMatchesList.map((u) => {
            return u.CCode;
          })} vs ${user.UpComingMatchesList.map((u) => {
            return u.VsCCode;
          })}</p>
          <p>Next match in ${user.UpComingMatchesList.map((u) => {
            return u.MDate;
          })}</p>
          </div>
          </div>`;
        })
        .join(" ");
      //console.log(html);
      document.querySelector("#cardDiv").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

function myFunction() {
  var input, filter, ul, li, second, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  //ul = document.querySelectorAll("#second");
  //li = ul.getElementsByTagName("p");
  li = document.getElementById("cardDiv");
  ul = document.getElementById("second");
  second = li.getElementsByTagName("div");
  //ul = li.innerText;
  // for (i = 1; i < count; i++) {
  //   //a = li[i].innerText;
  //   //txtValue = a.textContent || a.innerText;
  //   //console.log(second[i].innerText);
  //   if (!second[i].innerText.toLocaleUpperCase().includes(filter)) {
  //     second[i].style.display = "";
  //   } else {
  //     second[i].style.display = "none";
  //   }
  // }
}

fetchData();
