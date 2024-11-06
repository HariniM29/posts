<template>
  
    <div class="home-content">
        <div class="home-text">
            <p>Task Management</p>
            <!-- <button><RouterLink to="/postslist" style="text-decoration: none;color: black;">View Tasks</RouterLink></button> -->
             <button @click="goToTasks">View Tasks</button>
        </div>
        <div class="home-image">
            <!-- <img src="../assets/home-logo.jpg"> -->
             <img src="../assets/home-logo.jpg">
            
        </div>
        
    </div>

</template>

<script>
import { useRouter } from 'vue-router';

const router = useRouter()
export default{
    name: 'Home',
    methods:{
        goToTasks() {
            this.$router.push('/postslist');
            }
    }
}
</script>

<style scoped>
        img{
            width:50rem;
            height:30rem;
        }
        .home-content{
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 10rem;
        }
        .home-text p{
            font-size:30px;
            font-weight: 600;
        }
        button{
            padding: 10px;
            width: 100px;
            border: none;
            background-color: #94add6;
            /* color: white; */
            border-radius: 9px;
            text-decoration: none;
        }
</style>

