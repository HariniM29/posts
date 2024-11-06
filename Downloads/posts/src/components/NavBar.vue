<template>

 <nav class="navbar navbar-expand-sm " style="background-color: rgb(235 191 194);position:fixed;top:0;width:100%">

    <div class="container-fluid">
  
    <ul class="navbar-nav">
        <li class="nav-item">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        <!-- <li class="nav-item">
        <RouterLink class="nav-link" to="/posts">Posts</RouterLink>
        </li> -->
        <li class="nav-item">
        <RouterLink class="nav-link" to="/postslist">Posts</RouterLink>
        </li>
      
        
    </ul>
    </div>

</nav>

</template>

<script>
        export default{
            name:'Navbar'
        }
</script>

