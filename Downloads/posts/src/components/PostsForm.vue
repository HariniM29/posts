<template>
      <div class="form">
        <form @submit.prevent="submitTask" >
        <div class="form-container">

        
        <div class="form">
            <div class="form-content">
                <div class="form-title">
                    <label>Title</label>
                </div>
                <div class="form-desc">
                    <label>Description</label>
                </div>
            </div>
            <div class="form-fields">
                <div class="form-title-input">
                    <input placeholder="Title" v-model="taskData.title">
                
                </div>
                <div class="form-desc-input">
                    <input placeholder="Description" v-model="taskData.description">
                </div>
            </div>
            
            
        </div>
        <div class="buttons">
            <button>Submit</button>
            </div>
        </div>
        
            

        </form>
      </div>

      
        
</template>
<script>
export default {
    name: 'PostsForm',
    //prop sent from parent tp child for currentTask
    props:{
        task:{
            type:Object,     
            default: ()=>({title:'',description:''})  //if the data is new 
        }

    },
    data() {
        return {
            taskData: this.task,
            
         
    
        };
    },
    watch: {
    // it watches for the change in the props if values change it assigns that to  taskData
    task: {
      immediate: true, //to watch the props immediately when the component is created
      handler(newTask) {        
        this.taskData = { ...newTask }; // Update taskData when the task prop changes
      }
    }
  },
   methods: {
        submitTask() {
      if (this.taskData.title) {
        if (this.taskData.id) {
          this.$emit('edit-task', { ...this.taskData }); // To perform edit task only if the taskData has an id and it takes the corres value
        } else {
          this.$emit('add-task', { ...this.taskData }); // Emit add-task event if it has no id
        }
        this.resetForm();
      }
    },
        
        resetForm() {
            this.taskData.title = ''; // Clear the input field
            this.taskData.description = ''; // Clear the description field
           
        },
    },



}

</script>




<style >
.form{
    display: flex;
    margin:2rem;
    justify-content: center;
}
.buttons{
    display: flex;
    justify-content: center;
}
.form-container{
    padding: 2rem;
   
    box-shadow: 0 0 2px rgba(0, 0, 0, 3);
}
.form-title{
    margin-bottom: 2rem;
   
}
.form-title-input{
    margin-bottom: 1rem;
}
.form-desc{
    margin-right: 2rem;
}

button{
    padding: 10px;
    width: 107px;
    border: none;
    border: none;
    background-color: #5ca35c;
    border-radius: 5px;
    color: white;
}
input{
    border: 1px solid grey;
    padding: 4px;
    border-radius: 3px;
}
label{
    font-size: 15px;
}
</style>


