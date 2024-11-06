
<!--Parent component-->
<template>
    <div class="postform">
        <h3 style="display: flex;align-items: center;justify-content: center;margin-right:16rem;">Create a Post</h3>
        <posts-form :task="currentTask" @add-task="addTask" @edit-task="updateTask" ></posts-form>
    </div>
   
   
        <div class="tasks-card">
            <h2 style="margin: 2rem;">Tasks List</h2>
            <div class="task-card" v-for="task in tasks" :key="task.id">
                <h4>{{ task.title }}</h4>
                <p>{{ task.description }}</p>
                <div class="task-button">
                    <button class="btn btn-secondary" @click="editPost(task)">Edit</button>
                    <button class="btn btn-danger" @click="deletePost(task.id)">Delete</button>

                </div>
                
            </div>

        </div>
    
</template>


<script>
import PostsForm from './PostsForm.vue';  //to use the postsform component first import

export default {
    name: 'TasksList',  
    data() {
        return {
            tasks: [],  //the data is stored as an array of obj
            currentTask:null,  //to keep the track of the task while editing and to pass this value as props to child
        };
    },
    components:{
        PostsForm   //to use the imported component
    },
    
    created() {   //predefined form data
        this.tasks = [
            { id: '1', title: "Task 1", description: "Description for Task 1" },
            { id: '2', title: "Task 2", description: "Description for Task 2" },
            { id: '3', title: "Task 3", description: "Description for Task 2" }
        ];
    },
    methods:{
        addTask(newTask) {
            newTask.id=Date.now();
            this.tasks.push(newTask); //to add the newtask to the array
            
        },
        editPost(task){
            this.currentTask={...task}    //the task that is selected is assigned to the currenttask 
            
            
        },
        deletePost(id){
            // this.tasks.splice(id,1);   //to remove the element with id
            // this.tasks.shift();
            this.tasks=this.tasks.filter(task=>task.id !==id);  //creates a new array with all elements that pass the test implemented
        },
        updateTask(updatedTask){
            
            this.tasks=this.tasks.map(task=>(task.id ===this.currentTask.id)? {...task,...updatedTask}:task);   //the map fun checks for any matching for the current task id with the tasks if found then it replaces that task with the updatedtask
            
            this.currentTask=null; //to again set the currenttask to track
        }
        
    }

  
}
</script>



<style scoped>
button{
    margin-right:2rem;
    margin-bottom: 2rem;
}
.tasks-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem;
    
   
    
}
.task-card{
    
    margin-bottom: 2rem;
    padding: 1rem;
    width:60rem;
    box-shadow: 0 0 2px rgb(100, 132, 148);
    /* transition: 500ms linear; */
    transition: transform 0.1s linear;

}
.task-card:hover{
    transform: scale(1.1);
}
/* .postform{
   
    position: fixed;
    top: 0;
    margin-top: 6rem;
    display: flex;
    justify-content: center;

    width: 100%;
   
} */

.postform{
    margin-top: 6rem;
}

</style>

