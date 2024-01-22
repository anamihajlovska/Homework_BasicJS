let book = {
   title: prompt("Enter the title of the book:"),
   author: prompt("Enter the author of the book:"),
   readingStatus: prompt("Read or not? (true/false)"),
   
    checkStatus: function(){
        let isRead = this.readingStatus === "true";
        if (isRead){
            console.log(`Already read ${this.title} by ${this.author}!`);
        } else{
            console.log(`You still need to read ${this.title} by ${this.author}!`);
        }
    }
}

book.checkStatus();


