const CACHE_KEY = "your_note";

function checkStorage(){
	return typeof(Storage) !== "undefined";
}

function putNote(data){
	if(checkStorage()){
		let noteData = null
		if(localStorage.getItem(CACHE_KEY) === null){
			noteData = [];
		}else{
			noteData = JSON.parse(localStorage.getItem(CACHE_KEY));
		}
		
		noteData.unshift(data);
		
		if(noteData.length > 14){
			alert("Ah! Your board isn't big enough. Please delete or clear note.");
			return;
		}
		
		localStorage.setItem(CACHE_KEY, JSON.stringify(noteData));
		alert('Your note is succesfully posted!');
		
	}else{
		console.log("Your browser doesn't support Web Storage features");
	}
}

function showNote(){
	if(checkStorage()){
		return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
	}else{
		return [];
	}
}

function renderNote(){
	const noteData = showNote();
	let noteBoard = document.querySelector('.board');
	
	noteBoard.innerHTML = "";
	
	if(localStorage.getItem(CACHE_KEY) !== null){
		let newNote = document.createElement('div');
		newNote.classList.add('board-column');
		for(let note of noteData){
			newNote.innerHTML += '<div class="note"><h3>'+note.title+'</h3><p>'+note.content+'</p></div>';
			noteBoard.appendChild(newNote);
		}
	}else{
		noteBoard.innerHTML = "<h3>There is nothing here. Write something!</h3>"
	}
}

renderNote();

