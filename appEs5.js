function Book(name, author, type) {
    this.Name = name;
    this.Author = author;
    this.Type = type;
}

function Display() {

}

Display.prototype.validate = function (bookDetail) {
    if (bookDetail.Name != '' && bookDetail.Author != '' && bookDetail.Type != '') {
        return true;
    } else {
        return false;
    }
}

Display.prototype.show = function (bookDetail) {
    myHtml = `<tr>
                <th>${bookDetail.Name}</th>
                <th>${bookDetail.Author}</th>
                <th>${bookDetail.Type}</th>
            </tr>`
    let tbody = document.getElementById('tbody');
    tbody.innerHTML += myHtml
}

Display.prototype.clearInputs = function () {
    document.getElementById('addBook').reset();
}

Display.prototype.message = function (query,message) {
    let mssg=document.getElementById('messege');
    mssg.innerHTML=`<div class="alert alert-${query} alert-dismissible fade show" role="alert">
                        <strong>${query.toUpperCase()}..!</strong> ${message}.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>`;
    setTimeout(()=>{
        mssg.innerHTML=''

    },2000)
}


let addBook = document.getElementById('addBook');
addBook.addEventListener('submit', getDetails);



function getDetails(e) {
    e.preventDefault();
    let name = document.getElementById('book').value;
    let author = document.getElementById('author').value;

    let type;
    gridRadios1 = document.getElementById('gridRadios1');
    gridRadios2 = document.getElementById('gridRadios2');
    gridRadios3 = document.getElementById('gridRadios3');

    if (gridRadios1.checked) {
        type = gridRadios1.value
    } else if (gridRadios2.checked) {
        type = gridRadios2.value
    } else {
        type = gridRadios3.value
    }

    let bookDetail = new Book(name, author, type);
    console.log(bookDetail)

    let displayBook = new Display;
    if (displayBook.validate(bookDetail)) {
        displayBook.show(bookDetail);
        displayBook.clearInputs()
        displayBook.message('success','ur bookDetail have been added')

    } else {
        displayBook.message('danger','ur bookDetail have not been added')
    }
}




