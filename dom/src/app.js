let addReminderBtn = document.getElementById("addReminderBtn");
let remindersArray = [];
allRemindersBtn = document.getElementById("allRemindersBtn");

addReminderBtn.addEventListener("click", function(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let priority = document.getElementById("priority").value;
    let color = document.getElementById("color").value;
    let description = document.getElementById("description").value;

    let newReminder = {
        title: title,
        priority: priority,
        color: color,
        description: description
    };

    remindersArray.push(newReminder);
    console.log(newReminder);

    console.log(remindersArray)

    // remindersArray.push(newReminder);
});

allRemindersBtn.addEventListener("click", function(event){
    event.preventDefault();
    displayTable();
})

function displayTable(){
        let table = document.getElementById("table");
        let tableHTML = "<table><tr><th>Title</th><th>Priority</th><th>Description</th></tr>";
        
        for(let i = 0; i < remindersArray.length; i++){
            let reminder = remindersArray[i];
            tableHTML += `<tr><td>${reminder.title}</td><td>${reminder.priority}</td><td>${reminder.description}</td></tr>`;
        }
        tableHTML += "</table>";
        table.innerHTML = tableHTML;
        
    }









