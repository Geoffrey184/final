const content =document.querySelector('.chambre');
fetch('http://localhost:1337/api/chambres/?populate=*')

 .then(response => response.json())
 .then(data=> {
  console.log(data);
  data.data.forEach(element => {
    const imgurl = element.attributes.Photo.data.attributes.url
    const nom = element.attributes.Nom
    const prix = element.attributes.prix
    const div =document.createElement('div2');
    const titre =document.createElement('h5');
    const montant =document.createElement('h2');
    titre.innerHTML = nom;
    montant.innerHTML = prix; 
    
    let img = new Image();
    img.src = 'http://localhost:1337' + imgurl

   
    div.append(titre,img,montant)
    content.append(div)
    console.log(nom);
    
  });

})


