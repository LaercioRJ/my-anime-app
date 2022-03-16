<template>
    <div>
      <b-navbar toggleable="lg" type="dark" class="bg-dark" variant="info">
        <b-navbar-brand href="/">
            <img src="../assets/logoTitulo.png" class="titleLogo d-inline-block align-top" alt="Kitten">
            <span class="title">Discovering Anime</span>
        </b-navbar-brand>

        <b-navbar-nav>
            <b-nav-item>
                My List
            </b-nav-item>

            <b-nav-item>
                Top Anime
            </b-nav-item>

            <b-nav-item-dropdown text="Cartegories" left>
              <b-dropdown-item href="#">Romance</b-dropdown-item>
              <b-dropdown-item href="#">Action</b-dropdown-item>
              <b-dropdown-item href="#">Adventure</b-dropdown-item>
              <b-dropdown-item href="#">Seinen</b-dropdown-item>
              <b-dropdown-item href="#">Horror</b-dropdown-item>
              <b-dropdown-item href="#">Drama</b-dropdown-item>
              <b-dropdown-item href="#">Historical</b-dropdown-item>
              <b-dropdown-item href="#">Harem</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto mr-auto">
            <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
            <b-icon-person-circle class="userIcon"></b-icon-person-circle>
        </b-navbar-nav>
      </b-navbar>
    </div>
</template>

<script>
</script>

<style>
    .titleLogo{
        width: 35px;
        height: 35px;
        margin-right: 4px;
    }
    .title{
        font-size: x-large;
        color: red;
        transition: 1s;
    }
    .title:hover{
        color: rgb(206, 206, 206);
        transition: 1s;
    }
    .userIcon{
        color: white;
        font-size: xx-large;
    }
    .userIcon:hover{
        color: rgb(206, 206, 206);
        cursor: pointer;
    }
</style>