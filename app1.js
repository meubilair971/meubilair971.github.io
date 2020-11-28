window.addEventListener("DOMContentLoaded", () => {
    const pesan_penting = document.querySelector(".pesan-penting")
    const counter = document.getElementById("detik")
    let count = 15
    var timer = setInterval(() => {
        counter.innerHTML = ""
        counter.innerHTML = parseInt(count);
        count -= 1;
    }, 1000)
    setTimeout(() => {
        clearInterval(timer)
        pesan_penting.remove()
    }, 15000);
})
var myFullpage = new fullpage('#fullpag', {
    verticalCentered: false,
    css3: false
});



const arrow = document.getElementById("bottom")
const arrowBox = document.querySelector(".arrow")
const section3 = document.getElementById("section3")
const testing = document.getElementById("tes")



$(arrow).on("click", function (e) {
    if (arrow.classList.contains("moveSectionDown")) {
        myFullpage.moveSectionDown();
    } else {
        myFullpage.moveSectionUp();
    }
});

const navbar = document.getElementById("navbar")
const control_arrow = document.querySelectorAll(".fp-controlArrow");
setInterval(() => {
    const slide22 = document.getElementById("slide22");
    const slide21 = document.getElementById("slide21");
    const section2 = document.getElementById("section2")
    if (slide22.classList.contains("active") && section2.classList.contains("active")) {
        control_arrow.forEach(arr => { arr.style.zIndex = "-2" }
        )
        testing.style.zIndex = "-3"
        navbar.style.display = "none"
    } else if (slide21.classList.contains("active") && section2.classList.contains("active")) {
        testing.style.zIndex = "-3";
        control_arrow.forEach(arr => { arr.style.zIndex = "40" });
        navbar.style.display = "flex"
    }

    else {
        control_arrow.forEach(arr => { arr.style.zIndex = "40" })
        testing.style.zIndex = "1000";
        navbar.style.display = "flex"
    }
}, 500)

const panah = document.querySelectorAll(".panah")
$(panah).first().on("click", (e) => {
    console.log("ok")
    console.log(control_arrow)
    $(control_arrow[2]).trigger("click")
    e.stopPropagation()
})

lorem = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum temporibus illo debitis maiores deserunt voluptates odit officiis. Blanditiis, quia libero."
const show_room = [
    {
        furniture: ["kursi.jpg", "kursi2.jpg", "kursi3.jpg", "kursi4.jpg", "kursi.jpg", "kursi.jpg"],
        nama: ["Show 1 Item 0", "Show 1 Item 1", "Show 1 Item 2", "Show 1 Item 3", "Show 1 Item 4", "Show 1 Item 5"],
        harga: ["100.000", "110.000", "120.000", "130.000", "140.000", "150.000"],
        deskripsi: [lorem, lorem, lorem, lorem, lorem, lorem]
    },
    {
        furniture: ["kursi2.jpg", "kursi3.jpg", "kursi4.jpg", "kursi4.jpg", "kursi.jpg", "kursi4.jpg"],
        nama: ["Show 2 Item 0", "Show 2 Item 1", "Show 2 Item 2", "Show 2 Item 3", "Show 2 Item 4", "Show 2 Item 5"],
        harga: ["200.000", "210.000", "220.000", "230.000", "240.000", "250.000"],
        deskripsi: [lorem, lorem, lorem, lorem, lorem, lorem]
    },
    {
        furniture: ["kursi3.jpg", "kursi2.jpg", "kursi3.jpg", "kursi4.jpg", "kursi.jpg", "kursi4.jpg"],
        nama: ["Show 3 Item 0", "Show 3 Item 1", "Show 3 Item 2", "Show 3 Item 3", "Show 3 Item 4", "Show 3 Item 5"],
        harga: ["300.000", "310.000", "320.000", "330.000", "340.000", "350.000"],
        deskripsi: [lorem, lorem, lorem, lorem, lorem, lorem]
    },
    {
        furniture: ["kursi4.jpg", "kursi3.jpg", "kursi.jpg", "kursi.jpg", "kursi2.jpg", "kursi2.jpg"],
        nama: ["Show 4 Item 0", "Show 4 Item 1", "Show 4 Item 2", "Show 4 Item 3", "Show 4 Item 4", "Show 4 Item 5"],
        harga: ["400.000", "410.000", "420.000", "430.000", "440.000", "450.000"],
        deskripsi: [lorem, lorem, lorem, lorem, lorem, lorem]
    },
    {
        furniture: ["kursi.jpg", "kursi2.jpg", "kursi4.jpg", "kursi3.jpg", "kursi3.jpg", "kursi4.jpg"],
        nama: ["Show 5 Item 0", "5how 4 Item51", "Show 45Item 2", "S5ow 4 Item 5", "Show 4 Item 4", "Show 4 Item 5"],
        harga: ["500.000", "510.000", "520.000", "530.000", "540.000", "550.000"],
        deskripsi: [lorem, lorem, lorem, lorem, lorem, lorem]
    }
]

const item_furniture = document.querySelectorAll(".item")
const gambar_furniture = document.querySelectorAll(".gambar")
const nama_furniture = document.querySelectorAll(".nama")
const harga_furniture = document.querySelectorAll(".harga")
const deskripsi_furniture = document.querySelectorAll(".deskripsi")
const viewer = document.getElementById("iframe")

const viewer_sources = ["https://momento360.com/e/u/ba81df75d4a84e4d89e62dcb2b0b6694?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
    "https://momento360.com/e/u/815ae9e3535c45359286637e38a0859b?utm_campaign=embed&utm_source=other&heading=327.05&pitch=-22.95&field-of-view=75&size=medium",
    "https://momento360.com/e/u/a29d3b1c3c6f40b29b499bb9c7f729d9?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
    "https://momento360.com/e/u/e38d87a933b846b0ab03d3a9c29fa2d8?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
    "https://momento360.com/e/u/be7b0c0e8f3f4fd2ac4a7078aa76ce6f?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium"]

function ganti_show(showIdx) {
    viewer.setAttribute("src", viewer_sources[showIdx])
    item_furniture.forEach((el, idx) => {
        el.childNodes[1].style.backgroundImage = "url(imgs/" + show_room[showIdx].furniture[idx] + ")";
        el.childNodes[3].innerHTML = show_room[showIdx].nama[idx]
        el.childNodes[5].innerHTML = "Rp " + show_room[showIdx].harga[idx]
        el.addEventListener("wheel", (e) => {
            e.stopPropagation()
        })
        el.childNodes[7].childNodes[1].addEventListener("click", (e) => {
            // e.stopPropagation()
            const dropdown = document.getElementById('showMenu');
            showIdx = parseInt(dropdown.options[dropdown.selectedIndex].getAttribute('id'))
            const index = parseInt(e.target.getAttribute("id"))
            document.getElementById("nama_modal").innerHTML = "<h4>" + show_room[showIdx].nama[index] + "</h4>"
            document.getElementById("harga_modal").innerHTML = "<h6>Rp" + show_room[showIdx].harga[index] + "</h6>"
            document.getElementById("deskripsi_modal").innerHTML = "<p>" + show_room[showIdx].deskripsi[index] + "</p>"
            document.getElementById("gambar_modal").innerHTML = "<img src=\"imgs/" + show_room[showIdx].furniture[index] + "\">"

            $("#aktifkan_modal").trigger("click")
        })
        console.log(el.childNodes[7].childNodes)
    })
}
console.log(document.getElementsByClassName("kategori"))

ganti_show(0)
const background_image = ["imgs/kmr.png", "imgs/rngtamu.jpg", "imgs/sofa1.jpg", "imgs/sidekix-media-I_QC1JICzA0-unsplash.jpg", "imgs/curology-6CJg-fOTYs4-unsplash.jpg", "imgs/kmrmandi.png"]
const list_kategori = [
    {
        judul_kategori: "Ruang Tidur",
        furniture: ["kursi.jpg", "kursi2.jpg", "kursi4.jpg", "kursi3.jpg", "kursi3.jpg", "kursi4.jpg"],
        nama: ["Show 5 Item 0", "5how 4 Item51", "Show 45Item 2", "S5ow 4 Item 5", "Show 4 Item 4", "Show 4 Item 5"],
        harga: ["500.000", "510.000", "520.000", "530.000", "540.000", "550.000"],
        deskripsi: [lorem, lorem, lorem, lorem, lorem, lorem]
    },
    {
        judul_kategori: "Ruang Tamu",
        furniture: ["kursi.jpg", "kursi2.jpg", "kursi4.jpg", "kursi3.jpg", "kursi3.jpg", "kursi4.jpg"],
        nama: ["Show 5 Item 0", "5how 4 Item51", "Show 45Item 2", "S5ow 4 Item 5", "Show 4 Item 4", "Show 4 Item 5"],
        harga: ["500.000", "510.000", "520.000", "530.000", "540.000", "550.000"],
        deskripsi: [lorem, lorem, lorem, lorem, lorem, lorem]
    },
    {
        judul_kategori: "Ruang Keluarga",
        furniture: ["kursi.jpg", "kursi2.jpg", "kursi4.jpg", "kursi3.jpg", "kursi3.jpg", "kursi4.jpg"],
        nama: ["Show 5 Item 0", "5how 4 Item51", "Show 45Item 2", "S5ow 4 Item 5", "Show 4 Item 4", "Show 4 Item 5"],
        harga: ["500.000", "510.000", "520.000", "530.000", "540.000", "550.000"],
        deskripsi: [lorem, lorem, lorem, lorem, lorem, lorem]
    },
    {
        judul_kategori: "Dapur",
        furniture: ["kursi.jpg", "kursi2.jpg", "kursi4.jpg", "kursi3.jpg", "kursi3.jpg", "kursi4.jpg"],
        nama: ["Show 5 Item 0", "5how 4 Item51", "Show 45Item 2", "S5ow 4 Item 5", "Show 4 Item 4", "Show 4 Item 5"],
        harga: ["500.000", "510.000", "520.000", "530.000", "540.000", "550.000"],
        deskripsi: [lorem, lorem, lorem, lorem, lorem, lorem]
    },
    {
        judul_kategori: "Ruang Makan",
        furniture: ["kursi.jpg", "kursi2.jpg", "kursi4.jpg", "kursi3.jpg", "kursi3.jpg", "kursi4.jpg"],
        nama: ["Show 5 Item 0", "5how 4 Item51", "Show 45Item 2", "S5ow 4 Item 5", "Show 4 Item 4", "Show 4 Item 5"],
        harga: ["500.000", "510.000", "520.000", "530.000", "540.000", "550.000"],
        deskripsi: [lorem, lorem, lorem, lorem, lorem, lorem]
    },
    {
        judul_kategori: "Kamar Mandi",
        furniture: ["kursi.jpg", "kursi2.jpg", "kursi4.jpg", "kursi3.jpg", "kursi3.jpg", "kursi4.jpg"],
        nama: ["Show 5 Item 0", "5how 4 Item51", "Show 45Item 2", "S5ow 4 Item 5", "Show 4 Item 4", "Show 4 Item 5"],
        harga: ["500.000", "510.000", "520.000", "530.000", "540.000", "550.000"],
        deskripsi: [lorem, lorem, lorem, lorem, lorem, lorem]
    },
]

document.querySelectorAll(".kategori").forEach((el, idx) => {
    el.style.backgroundImage = "url(" + background_image[idx] + ")";
    el.innerHTML = "<h3 class=\"judul_kategori\">" + list_kategori[idx].judul_kategori + "</h3>"
    el.addEventListener("click", () => {
        document.getElementById("modal_kategori").innerHTML = ""
        // Di bawah ini untuk memasukan data barang ke modal
        for (var x = 0; x < 6; x++) {
            var newObject = document.createElement("div");
            newObject.className = "barang"
            var divImage = document.createElement("div");
            divImage.className = "div_gambar_barang"
            var divKeterangan = document.createElement("div")
            divKeterangan.className = "div_keterangan_barang"
            var h4 = document.createElement("h4")
            var h6 = document.createElement("h6")
            var p = document.createElement("p")
            // 
            divImage.innerHTML = "<img class=\"gambar_barang\" src=\"imgs/" + list_kategori[idx].furniture[x] + "\">"
            h4.innerHTML = list_kategori[idx].nama[x]
            h6.innerHTML = "Rp " + list_kategori[idx].harga[x]
            p.innerHTML = list_kategori[idx].deskripsi[x]
            // 
            divKeterangan.appendChild(h4);
            divKeterangan.appendChild(h6)
            divKeterangan.appendChild(p)
            // 
            newObject.appendChild(divImage)
            newObject.appendChild(divKeterangan)
            // 
            document.getElementById("modal_kategori").appendChild(newObject)
        }
        // trigger button
        $("#aktifkan_modal_").trigger("click")
    })
})
document.getElementById("modal_kategori").addEventListener("wheel", (e) => {
    e.stopPropagation()
})

document.getElementById('showMenu').addEventListener('change', function (e) {
    var dropdown = document.getElementById('showMenu');
    showId = dropdown.options[dropdown.selectedIndex].getAttribute('id')
    showIdx = parseInt(showId)
    ganti_show(showIdx)
}
);
// Get all buttons as a NodeList
var btns = document.querySelectorAll('button');

// Convert buttons NodeList to an array
var btnsArr = Array.from(btns);

var myObj = Array.from(document.querySelectorAll('.modal'))
console.log(myObj)
var myObj1 = Array.from(document.querySelectorAll("form"))
var myObj2 = Array.from(document.querySelectorAll(".jasa_desain"))
myObj1.forEach(obj => {
    myObj.push(obj)
})
myObj2.forEach(obj => {
    myObj.push(obj)
})


myObj.forEach(obj => {
    for (var key in obj) {
        if (key.search('on') === 0) {
            obj.addEventListener(key.slice(2), (e) => {
                e.stopPropagation()
            })
        }
    }
})
const buatJanji = document.querySelector(".janji")
console.log(buatJanji)
// const aktifkan_modal_section3 = document.getElementById("aktifkan_modal_section3")
buatJanji.addEventListener("click", () => {
    // console.log(aktifkan_modal_section3)
    $("#aktifkan_modal_section3").trigger("click")
})
const pesanKustom = document.querySelector(".custom")
pesanKustom.addEventListener("click", () => {
    $("#aktifkan_modal_section4").trigger("click")
})

setTimeout(function () {

}
    , 3000)

