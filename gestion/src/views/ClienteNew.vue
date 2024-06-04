import { default } from './HomeView.vue';
<template>
  <div class="row mt-3">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">
          REGISTRAR CLIENTE
        </div>
        <div class="card-body">
          <form>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" class="form-control" v-model="nit" id="nit" placeholder="INGRESE EL NIT DE LA EMPRESA"
                required maxlength="10">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
              <input type="text" class="form-control" v-model="razon" id="razon" placeholder="INGRESE LA RAZON SOCIAL DE LA EMPRESA"
                required maxlength="10">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
              <input type="text" class="form-control" v-model="correo" id="correo" placeholder="INGRESE EL CORREO DE LA EMPRESA"
                required maxlength="10">
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa-solid fa-phone"></i></span>
              <input type="text" class="form-control" v-model="telefono" id="telefono" placeholder="INGRESE EL TELEFONO DE LA EMPRESA"
                required maxlength="10">
            </div>
            <div class="d-grid col-6 mx-auto mb-3">
              <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"> REGISTRAR</i></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      nit: '', 
      razon: '',
      correo: '',
      telefono: ''
    }
  }
}
</script>