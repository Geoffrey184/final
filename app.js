const content =document.querySelector('.chambre');
fetch('http://localhost:1337/api/chambres/?populate=*')

 .then(response => response.json())
 .then(data=> {
  console.log(data);
  data.data.forEach(element => {
    const imgurl = element.attributes.Photo.data.attributes.url
    const nom = element.attributes.Nom
    const prix = element.attributes.prix
    const taille = element.attributes.taille
    const personne = element.attributes.personne
    const categorie =element.attributes.categorie_de_chambre.data.attributes.categorie
    const div =document.createElement('div2');
    const theme =document.createElement('div3');
    const titre =document.createElement('h2');
    const montant =document.createElement('h5');
    const superficie =document.createElement('h6');
    const personnes =document.createElement('h6')
    titre.innerHTML = nom;
    montant.innerHTML = prix; 
    superficie.innerHTML = taille;
    personnes.innerHTML = personne;
    
    let img = new Image();
    img.src = 'http://localhost:1337' + imgurl

   
    div.append(titre,img,montant,superficie,personnes)
    content.append(categorie,div)
    console.log(categorie);
    
  });

})





