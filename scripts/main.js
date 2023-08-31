import book1 from '../JSONs/book1.json' assert{type: 'json'};
import book2 from '../JSONs/book2.json' assert{type: 'json'};
import book3 from '../JSONs/book3.json' assert{type: 'json'};
const arrBook = [book1, book2, book3];
const Myform = document.forms.formSearch;
const titleInput = document.querySelector('#titleBook');
const statusBook = document.querySelector('.status');
const annotationText = document.querySelector('#annota');
let flag = 0;
let library = {
    search: function searchBook(titleBook) {
        let findTitle;
        let result = arrBook.find(item => item.title == `${titleBook}`)
        if (result == undefined) { findTitle = 'такой книги нету '; statusBook.style.color = "red"; }
        if (result != undefined) { findTitle = `Книга с названием: ${result.title} есть в нашей библиотеке`; statusBook.style.color = "green"; }
        return findTitle;
    },
    annotation: function bookInfo(titleBook) {
        let AnotResult;
        let result = arrBook.find(item => item.title == `${titleBook}`)
        if (result == undefined) { AnotResult = 'такой книги нету '; }
        if (result != undefined) { AnotResult = result.Annotation; }
        return AnotResult;
    },
    sort: function bookSortYearRelise() {
        arrBook.sort(function (a, b) {
            return a.YearRelise - b.YearRelise;
        });
    }
}
Myform.addEventListener('submit', e => {
    e.preventDefault();
}
)
document.querySelector('#btnSearch').addEventListener('click', () => {
    statusBook.innerText = library.search(titleInput.value);
});

document.querySelector('#btnAnnotation').addEventListener('click', () => {
    flag++;
    if (flag % 2 != 0) {
        document.querySelector('.AnnotatonBox').style.display = 'block';
        annotationText.innerText = library.annotation(titleInput.value);
    }
    else {
        document.querySelector('.AnnotatonBox').style.display = 'none';
    }
});
//сортировка массива по дате выхода
library.sort();
console.log(arrBook);





