var title = 'TO DO APP';
  //taskList : string[] = ["Task1","Task2","Task3"];
var taskList = JSON.parse(localStorage.getItem("list")) || []; 
  //agr localStorage m koi list hai to wo store krwado taskList me nhi hai to empty array declare krdo
var newTask;
var index;
var editFlag = false;

  function checker() { // chk for empty field and whitespace
    if(this.newTask && this.newTask !== ' ') { 
      return true;
    }
    else if(!this.newTask || this.newTask === ' ') {
      return false;
    }
  }

  function addTask() {
      if(this.editFlag === true) { //edit Task
        this.taskList.splice(this.index ,1, this.newTask);
        localStorage.setItem("list",JSON.stringify(this.taskList)); 
        this.editFlag = false;
        this.newTask = '';
      }
      else if (this.editFlag === false) { // add Task
        this.taskList.push(this.newTask);
        localStorage.setItem("list",JSON.stringify(this.taskList));
        this.newTask = '';
      }
}
  function dltTask(i) {
    this.taskList.splice(i,1); //i = index of task where dlt button was clicked
    localStorage.setItem("list",JSON.stringify(this.taskList)); 
  }

  function editTask(eTask, i) {
    this.editFlag = true;
    this.index = i;
    this.newTask = eTask; // loaded task in input field 
  }
