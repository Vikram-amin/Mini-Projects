function slideShow() {
    const arr = [
      "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/19/44/44389320548611e98e25a9c9e08858e3_1554216313856_l_medium.jpg",
      "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/46/56/4a027df0b58311e78b4551a8b8dbe7c2_1508747532161_l_medium.jpg",
      //   "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/87/26/4dc6f9005a1511eab7d3a9ed1377d4a5_1583125402959_l_medium.jpg",
      "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1300/-/0/96/15/5f6c7660eac611eb901ec5c97a856714_1627652836749_tv_high.jpg",
      "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/17/25/0_dfleeb7d_1515568618253_l_medium.jpg",
      "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/1/56/54099cc0f74d11ea83dae732a5171ccd_1600335210287_l_medium.jpg",
      "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/15/49/0b79798176b411e6b879b77c8bf4d3fc_1582111739744_l_medium.jpg",
      "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/47/45/b079df40ab2811eabf6303252e2a03b3_1619360281661_l_medium.jpg",
    ];

    let div = document.getElementById("slideShow");
    let img = document.createElement("img");
    img.src = arr[0];
    div.append(img);

    let i = 0;
    setInterval(function () {
        if (i == arr.length) {
            i = 0;
        } 
            img.src = arr[i];
            i++;
    },2000)
}

slideShow();
 

const movies = [
  {
    name: "BHUJ",
    date: "20-08-2021",
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5762/1045762-h-3317e62b75fc",
    rating: 7,
  },
  {
    name: "TANHAJI",
    date: "10-03-2021",
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v",
    rating: 8,
  },
  {
    name: "CHHICHHORE",
    date: "06-04-2021",
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
    rating: 9,
  },
  {
    name: "BAAGHI 3",
    date: "20-08-2020",
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
    rating: 6,
  },
  {
    name: "MISSION MANGAL",
    date: "06-07-2021",
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v",
    rating: 8.5,
  },
  {
    name: "DIL BECHARA",
    date: "10-02-2021",
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3085/723085-v",
    rating: 9,
  },
  {
    name: "ARJUN REDDY",
    date: "02-08-2019",
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/701/600701-v",
    rating: 7,
  },
  {
    name: "NEERJA",
    date: "20-08-2021",
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/704/1000090704/1000090704-v",
    rating: 5,
  },
  {
    name: "DRISHYAM",
    date: "20-08-2021",
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4189/1000074189/1000074189-v",
    rating: 8,
  },
];


// console.log(movies)

if (localStorage.getItem("movies") == null) {
localStorage.setItem("movies", JSON.stringify(movies))
}



function showMovies(d) {

  let moviesList = d;
  movie_div = document.getElementById("data")
  movie_div.innerHTML = null;

  moviesList.forEach(function (el) {

    let div = document.createElement('div');

    let p_name = document.createElement('p');
    p_name.innerText = el.name;

    let p_date = document.createElement("p");
    p_date.innerText = el.date;

    let p_rating = document.createElement("p");
    p_rating.innerText = "Rating - "+el.rating;

    let image=document.createElement('img');
    image.src = el.img;

    div.append(image, p_name, p_date, p_rating);
    movie_div.append(div);
    
  }) 
}
 showMovies(JSON.parse(localStorage.getItem("movies")));


function sortLH() {
  let data = JSON.parse(localStorage.getItem('movies'));
   data.sort(function (a, b) {
     return a.rating - b.rating;
   });
//  console.log(data)
  showMovies(data);
 
}

function sortHL() {
  let data = JSON.parse(localStorage.getItem("movies"));
  data.sort(function (a, b) {
    return b.rating - a.rating;
  });
  //  console.log(data)
  showMovies(data);
}















// const moviesJSON = JSON.stringify(movies);
//  console.log(moviesJSON)
// localStorage.setItem("movies", moviesJSON);

// ///display on webpage;

// let mymovies = localStorage.getItem("movies");
// mymovies = JSON.parse(mymovies);
// //console.log(mymovies)

// function showProduct() {
//   let dataDiv = document.getElementById("data");
//   mymovies.forEach(function (product) {
//     //console.log(product)

//     let div = document.createElement("div");

//     let p_name = document.createElement("p");
//     p_name.innerText = product.name;

//     let p_date = document.createElement("p");
//       p_date.innerText = product.date;

//      let p_rating = document.createElement("p");
//        p_rating.innerText = product.rating;

//     let image = document.createElement("img");
//     image.src = product.img;

  

//     div.append(image, p_name, p_date,p_rating);
//     dataDiv.append(div);
//   });
// }
// showProduct();



// function sortLH() {
//   let rating = JSON.parse(localStorage.getItem("movies"));
//   console.log(rating)

//   students = students.sort(function (a, b) {
//     return a.attendence - b.attendence;
//   });
//   // console.log(students)
//   showStudents(students); //sorted studrnt show
// }

// function sortHL() {
//   let students = JSON.parse(localStorage.getItem("movies"));

//   students = students.sort(function (a, b) {
//     return b.attendence - a.attendence;
//   });
//   // console.log(students);
//   showStudents(students); //sorted studrnt show
// }
