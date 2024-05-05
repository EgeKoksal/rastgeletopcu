const topcuVeri = [
    {
        id:1,
        name:'Osvaldo',
        img: 'https://randomplayers-test1.s3.eu-central-1.amazonaws.com/europe/seriea2010/osvaldo.jpg',
        sıkA:'Nani',
        sıkB:'Osvaldo',
        sıkC:'Pirlo',
        sıkD:'Seedorf'
    },
    {
        id:2,
        name:'Messi',
        img: 'https://iaftm.tmgrup.com.tr/a30a55/750/373/0/0/632/314?u=https://iftm.tmgrup.com.tr/2019/03/07/dunya-sokta-messi-barcelonadan-ayriliyor-1551950108348.jpg',
        sıkA:'Ronaldo',
        sıkB:'Delgado',
        sıkC:'Levandowski',
        sıkD:'Messi'
    },
    {
        id:3,
        name:'Totti',
        img: 'https://quotepark.com/media/authors/francesco-totti.300w.webp',
        sıkA:'Puyol',
        sıkB:'Zidane',
        sıkC:'Saka',
        sıkD:'Totti'
    },
];

const sıklar = document.getElementsByClassName('button-container');

function rastgeleFutbolcuSec() {
    const rastgeleIndex = Math.floor(Math.random() * topcuVeri.length);
    const secilenTopcu = topcuVeri[rastgeleIndex];
    const imgElement = document.getElementById("topcuImg");
    imgElement.src = secilenTopcu.img;
  
    return secilenTopcu;
  };

  rastgeleFutbolcuSec()

/*function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    */