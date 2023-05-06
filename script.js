let url = "https://gauravgitacc.github.io/postAppData/auctionData.json";
let data;
let btn = document.getElementById("getAuction");
console.log(btn);

//fetching data through given url
btn.addEventListener("click", async function fetchData() {
  let respnse = await fetch(url, { method: "GET" });

  data = await respnse.json();
  console.log(data);

  //showing the data
  showCardsDetails(data);
});
let allStatus;
let cards = document.querySelector(".cards");
function showCardsDetails(data) {
  cards.innerHTML = ``;

  data.forEach((obj) => {
    cards.innerHTML += `
    <div class="eachCard">
    <div class="upperbox">
      <div class="status">
        <h4>${obj.status}</h4>
        <p id="caseNo">${obj.caseNumber}</p>
      </div>
      <p id="date">${obj.date}</p>
    </div>
    <div class="lowerbox">
      <p><strong>${obj.fromLocation}</strong></p>
      <p>${obj.toLocation}</p>
      <p id="rs">
        ${obj.fare}
      </p>
    </div>

    
    `;
  });
  allStatus = document.getElementsByTagName("h4");
  colorToStatus();
}

//checking status and giving color to everyone
function colorToStatus() {
  console.log(allStatus);

  for (let i = 0; i < allStatus.length; i++) {
    if (allStatus[i].textContent == "APPROVED") {
      allStatus[i].style.backgroundColor = "rgb(135, 135, 217)";
    } else if (allStatus[i].textContent == "COMPLETED") {
      allStatus[i].style.backgroundColor = "#80e180";
    } else if (allStatus[i] == "CANCELLED") {
      allStatus[i].style.backgroundColor = "red";
    } else {
      allStatus[i].style.backgroundColor = "yellow";
    }
  }
}
