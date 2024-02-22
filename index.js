var mybooks=[
    {title:'bravery not perfection',
    author:'reshma saujani',
    availability:true,
borrower:''
    },
    {title:'madame bovary',
    author:'gustave flaubert',
    availability:false,
borrower:''
    },
    {title:'pride and prejudice',
    author:'jane austen',
    availability:true,
borrower:''
    }
];
//mybooks in my library
for(let i=0;i<mybooks.length;i++){
console.log(mybooks[i]);
}
//function that adds books in library
function addbooks(booktitle,bookauthor,bookavailability){
    var addedbook={
    title:booktitle,
        author:bookauthor,
        availability:bookavailability
    };
    mybooks.push(addedbook);
}
addbooks("women who don't wait in lines",'reshma saujani',true);
//books in library after adding new book
console.log("allbooks after adding new book");
for(let i=0;i<mybooks.length;i++){
    console.log(mybooks[i]);
    }
    //function that display the list of available boo
    function display(){
        console.log("the available books are:");
        var availablebooks=[];
        for(let i=0;i<mybooks.length;i++){
            if(mybooks[i].availability===true){
            availablebooks.push(mybooks[i]);
            }
            }    
for(let i=0;i<availablebooks.length;i++){
    console.log(availablebooks[i]);
    }   
}
display();
//function to borrow books
let borrower;
let bookname;
console.log("the book you borrowed ");
function borrow(bookname,borrower){
var borrowedbook=[];
this.borrower=borrower;
this.bookname=bookname;
for(let i=0;i<mybooks.length;i++){
if(this.bookname!=bookname ||mybooks[i].availability==false){
    console.log("the book is not available")
}
}
for(let i=0;i<mybooks.length;i++){
   if(mybooks[i].availability===true &&mybooks[i].title===this.bookname){
    borrowedbook.push(mybooks[i]);
    mybooks[i].availability=false;
    mybooks[i].borrower=borrower;
    }
    } 
for(let i=0;i<borrowedbook.length;i++){
    console.log(borrowedbook[i]);
    }     
}
borrow("bravery not perfection","gogo");
//returning books
function returnbook(bookname,borrower){
    for(let i=0;i<mybooks.length;i++){
        if((mybooks[i].title===bookname )&&(mybooks[i].borrower===borrower)){
mybooks[i].availability=true;
console.log("thanks for returning book");
        }
        else
            console.log("search the book we gave to you or pay for buying new one");
        }
    }      
returnbook("bravery not perfection","gogo");
   