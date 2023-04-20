



function getCurrentYear()
{
    const currentYear = new Date().getFullYear();
    const currentTime = new Date().toLocaleTimeString();
    const footer = document.createElement("footer");
    const copyright = document.createTextNode("NicMic Games " + "\u00A9 " + currentYear);
    
    const time = document.createTextNode("\n" + "Loaded at: " + currentTime + " ");
    footer.appendChild(copyright);
    footer.appendChild(time);
    var a = document.createElement('a');
    var linkText = document.createTextNode(" Contact page ")
    a.appendChild(linkText);
    a.href="../html/contact.html";
    footer.appendChild(a);
    document.body.appendChild(footer);
    
      

}

function addContact()
{
    var a = document.createElement('a');
    var linkText = document.createTextNode("Contact page")
    a.appendChild(linkText);
    a.href="../html/contact.html";
    document.body.appendChild(a); 
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1657402652msha55fb8ad2a7559fp1b5a5fjsn1ec260e489e6',
		'X-RapidAPI-Host': 'random-meme-generator.p.rapidapi.com'
	}
};

fetch('https://random-meme-generator.p.rapidapi.com/random-meme', options)
    .then(response => response.blob())
    .then(blob => {
        const img = document.createElement('img');
        const imageUrl = URL.createObjectURL(blob);
        img.src = imageUrl;
        img.alt = "Meme";
        document.getElementById('meme-container').appendChild(img);
        })
    .catch(error => console.error(error));
	

