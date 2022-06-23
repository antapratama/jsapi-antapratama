document.getElementById("getData").addEventListener("click", getData);

function getData() {
  fetch("https://feriirawan-api.herokuapp.com/list/bmkg/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.gempa[0].wilayah);
      let hasil = document.querySelector(".hasil");
      for (let i = 0; i < data.gempa.length; i++) {
        hasil.innerHTML += `<div class="card p-5 mb-5"><h2 style="margin-bottom: 15px;">Wilayah : ${data.gempa[i].wilayah}, </br> Waktu : ${data.gempa[i].waktu_gempa}</h2>
                                <h5><span class="shape">Besaran Guncangan</span> <span class="shape">${data.gempa[i].magnitudo}</span></h5>
                                </div>`;
      }
    })
    .catch((err) => console.log(err));
}
