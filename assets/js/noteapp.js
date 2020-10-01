const note = {
	id: 0,
	title: null,
	content: null
}

const toolsButton = document.querySelector('#tools');
const pencilButton = document.querySelector('.write');
const trashButton = document.querySelector('.clear');

const modalButton = document.querySelector('.modal-write');
const cancelButton = document.querySelector('#closebtn');
const submitButton = document.querySelector('#post');

const title = document.querySelector('#title');
const content = document.querySelector('#content');

function displayTools(){
	toolsButton.classList.add('active');
	toolsButton.innerHTML = '-';
	
	pencilButton.classList.remove('hidden');
	trashButton.classList.remove('hidden');
}

function hideTools(){
	toolsButton.classList.remove('active');
	toolsButton.innerHTML = '+';
	
	pencilButton.classList.add('hidden');
	trashButton.classList.add('hidden');
}

function displayModal(){
	modalButton.classList.remove('hidden');
}

function hideModal(){
	modalButton.classList.add('hidden');
}

function emptyForm(){
	title.value = "";
	content.value = "";
}

function emptyBoard(){
	note.id = 0;
	note.title = null;
	note.content = null;
	localStorage.removeItem(CACHE_KEY);
	renderNote();
}

function addNote(){
	if(title.value == "" || content.value == ""){
		alert("Your note isn't complete yet!");
	}else{
		note.id = note.id + 1;
		note.title = title.value;
		note.content = content.value;
		
		putNote(note);
		renderNote();
		emptyForm();
		hideModal();
		hideTools();
	}
}
	
toolsButton.addEventListener('click', function(e){
	if(pencilButton.classList.contains('hidden') && trashButton.classList.contains('hidden')){
		displayTools();
	}else{
		hideTools();
	}
})

pencilButton.addEventListener('click', function(e){
	displayModal();
})

cancelButton.addEventListener('click', function(e){
	hideModal();
})

submitButton.addEventListener('click', function(e){
	addNote();
})

trashButton.addEventListener('click', function(e){
	confirm('Your notes will completely gone. Are you sure want to clean your board?');
	emptyBoard();
	alert('Your board is succesfully cleaned. Time to take a new notes!')
})