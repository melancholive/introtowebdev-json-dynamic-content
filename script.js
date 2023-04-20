AOS.init();

let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
	{	
		"title" : "lady of the flowering sun",
		"pictureURL" : "lady-of-the-flowering-sun.png",
		"colorBG" : "radial-gradient(#78849094, #030313)",
		"caption" : "03.19.2023",
	},
	{
		"title" : "the wanderer of obsidian groves",
		"pictureURL" : "the-wanderer-of-obsidian-groves.png",
		"colorBG" : "radial-gradient(#475bb487, #030313)",
		"caption" : "04.15.2023",
	},
	{
		"title" : "the three sisters of fate",
		"pictureURL" : "the-three-sisters-of-fate.png",
		"colorBG" : "radial-gradient(#3f528e9e, #030313)",
		"caption" : "01.08.2023",
	},
	{
		"title" : "lantern lit skies",
		"pictureURL" : "lantern-lit-skies.JPG",
		"colorBG" : "radial-gradient(#83518775, #030313)",
		"caption" : "12.19.2021",
	},
	{
		"title" : "blessing of light",
		"pictureURL" : "child-of-light.JPG",
		"colorBG" : "radial-gradient(#5e6e567a, #030313)",
		"caption" : "11.17.2021",
	},
	{
		"title" : "blooming despair",
		"pictureURL" : "blooming-despair.jpg",
		"colorBG" : "radial-gradient(#48509a87, #030313)",
		"caption" : "12.10.2021",
	},
];


for (var i = 0; i < jsonDatabase.length; i++) {
	createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {

	let newContentElement = document.createElement("DIV");
	newContentElement.style.background = incomingJSON['colorBG'];
	newContentElement.classList.add('contentItem');

	let newImage = document.createElement("IMG");
	newImage.classList.add("footerImage");
	newImage.src = incomingJSON['pictureURL'];
	newContentElement.appendChild(newImage);

	let newContentHeading = document.createElement("p");
	newContentHeading.classList.add('contentTitle');
	newContentHeading.innerText = incomingJSON['title'];
	newContentElement.appendChild(newContentHeading);

	let newContentCaption = document.createElement("p");
	newContentCaption.classList.add('contentCaption');
	newContentCaption.innerText = incomingJSON['caption'];
	newContentElement.appendChild(newContentCaption);

	contentGridElement.appendChild(newContentElement);

}
