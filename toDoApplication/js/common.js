$(".all-task-section").show();
$(".add-task-section").hide();
$(".task-due-section").hide();

let taksList = [

    {
         id    : "1",
         name  : "task1",
         status: "complete",
         schedule:"today"
     },
     {
         id    : "2",
         name  : "task2",
         status: "pending",
         schedule:"tommorow"
     },
     {
         id    : "3",
         name  : "task3",
         status: "complete",
         schedule:"today"
     },
     {
         id    : "4",
         name  : "task4",
         status: "pending",
         schedule:"upcomming"
     },
     {
         id    : "5",
         name  : "task5",
         status: "pending",
         schedule:"tommorow"
     },
    
    ];
    

    $(".allTaskLink").click(function(){
        console.log("all");
        $(".all-task-section").show();
        $(".add-task-section").hide();
        $(".task-due-section").hide();
    });

    $(".addTaskLink").click(function(){
        console.log("all");
        $(".all-task-section").hide();
        $(".add-task-section").show();
        $(".task-due-section").hide();
    });

    $(".taskDueLink").click(function(){
        console.log("all");
        $(".all-task-section").hide();
        $(".add-task-section").hide();
        $(".task-due-section").show();
    });


    //function to reda task
    function readTask(){
    
    $(".all-task-section").show();
    $(".add-task-section").hide();
    $(".task-due-section").hide();
    
     let trHTML = "";
    
     for(let index in taksList){
    
        if(taksList[index].status=="complete"){
         trHTML += "<tr class='table-success'>";
        }
        if(taksList[index].status=="pending" && taksList[index].schedule=="tommorow"){
         trHTML += "<tr  class='table-warning'>";
        }
        if(taksList[index].status=="pending" && taksList[index].schedule=="upcomming"){
         trHTML += "<tr class='table-danger'>";
        }
         trHTML += "<td>"+taksList[index].id+"</td>";
         trHTML += "<td>"+taksList[index].name+"</td>";
         trHTML += "<td>"+taksList[index].status+"</td>";
         trHTML += "<td>"+taksList[index].schedule+"</td>";
         trHTML += "</tr>";
     }
    
     $(".tblTaskList tbody").html(trHTML);
    }


    //to add task
    function addTask(){

        console.log("add button clicked");

        let code = taksList.length;
        let name = txtTaskName.value;

        if(name != ""){

            let newtask = {
                id : code,
                name : name,
                status : "Pending",
                schedule : "Today"
            }

            console.log(newtask);

            taksList.push(newtask);

            $("#errormassege").prop("hidden",true);
            $("#successmassege").prop("hidden",false);

        }else{
            $("#successmassege").prop("hidden",true);
            $("#errormassege").prop("hidden",false);
        } 

        readTask();

    }
    
    