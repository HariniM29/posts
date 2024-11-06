import { createRouter,createWebHistory } from "vue-router";  //sets up a router instance and handles routing like urls
import Home from "./components/Home.vue";
import PostsForm from "./components/PostsForm.vue";
import TasksList from "./components/TasksList.vue";

const routes=[
    {path:'/',component:Home},
    {path:'/posts',component:PostsForm},
    {path:'/postslist',component:TasksList},
   

]
const router=createRouter({
    history:createWebHistory(),
   
    routes,
})

export default router;