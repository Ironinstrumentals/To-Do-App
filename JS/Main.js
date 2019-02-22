masterList = {
    unassigned: []

};

let x = 0;

let addList = function (name) {
    masterList[name] = [];
    document.getElementById('SelectBar').innerHTML += '<option id="' + name + '">' + name + '</option>'
};


addTaskToList = function () {
    let task = document.getElementById('NewTask').value;
    let name = document.getElementById('SelectBar').value || 'unassigned';
    masterList[name].push(task);
    loadList();
};
function loadList(){
    let name = document.getElementById('SelectBar').value;
    document.getElementById('CurrentList').innerHTML = "";
    for (let i = 0; i < masterList[name].length; i++) {
        document.getElementById('CurrentList').innerHTML += "<div class='FakeDiv'><button onclick='deleteTask(this.id)' id='"+ masterList[name][i].toString() +"' style='margin-right: 3px; padding-top: 1.5px; padding-left: 3px; padding-right: 3.5px; background-color: red; color: white; border-radius: 5px;'><i class='fas fa-times'></i></button><label><input id='[Input]" + masterList[name][i] + "' value='" + masterList[name][i] + "' /></label><button onclick='' style='margin-left: 3px; padding-top: 1.5px; padding-left: 3px; padding-right: 3.5px; background-color: white; color: green; border-radius: 5px;'><i class='fas fa-check'></i></button></div>"
    }
    console.log(masterList);
}

function deleteTask(clicked_id){
    let task = clicked_id;
    let name = document.getElementById('SelectBar').value;
    if (masterList[name].indexOf(task) > 0) {
        masterList[name].splice(masterList[name].indexOf(task), 1);
        masterList[name].unshift(task);
    }
    masterList[name].shift();
    //alert(clicked_id); //- used this to ensure the value of clicked_id was the correct id.
    //masterList[name].pull(task);
    loadList();
}

function clearList(){
    let name = document.getElementById('SelectBar').value;
    for (let i = 0; i < masterList[name].length; i++) {
        let task = masterList[name][i];
        masterList[name].splice(task);
    }
    loadList();
}