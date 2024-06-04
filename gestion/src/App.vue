<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">GESTION DE CLIENTES</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              CLIENTE
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/">Listar Clientes</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/createCliente">Registrar Nuevo</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <router-view />
  </div>
</template>
