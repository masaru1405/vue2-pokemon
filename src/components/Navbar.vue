<template>
      <b-navbar toggleable="lg" type="dark" variant="info">
         <b-navbar-brand :to="{name:'Home'}">Pokemon</b-navbar-brand>
         
         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

         <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
               <b-nav-item :to="{name:'List'}">List</b-nav-item>
               <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!--Right aligned nav items-->
            <b-navbar-nav class="ml-auto">
               <b-nav-form>
                  <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
               </b-nav-form>

               <b-nav-item-dropdown text="Lang" right>
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">ES</b-dropdown-item>
                  <b-dropdown-item href="#">RU</b-dropdown-item>
                  <b-dropdown-item href="#">FR</b-dropdown-item>
               </b-nav-item-dropdown>
            
               <b-nav-item-dropdown text="User" right>
                  <b-dropdown-item href="#">Profile</b-dropdown-item>
                  <b-dropdown-item href="#">Sign Out</b-dropdown-item>
               </b-nav-item-dropdown>

            </b-navbar-nav>

         </b-collapse>
      </b-navbar>
</template>

<script>
export default {
  
}
</script>