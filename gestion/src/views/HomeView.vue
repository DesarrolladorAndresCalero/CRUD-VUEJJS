<template>
  <div class="row">
    <table class="table table-hover">
      <div class="col-lg-8 offset-lg-2">
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>NIT</th>
                <th>RAZON SOCIAL</th>
                <th>CORREO</th>
                <th>TELEFONO</th>
                <th>CREADO POR</th>
                <th>ESTADO</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody class="table-goup-divider" id="contenido">
              <!--<tr v-if="this.cargando">
                <td colspan="9">
                  <h3>CARGANDO INFORMACION...</h3>
                </td>
              </tr>   
              <tr v-else v-for="cli, i in this.Clientes" :key="cli.id">
                <td v-text="cli.id"></td>
                <td v-text="cli.nit"></td>
                <td v-text="cli.razon"></td>
                <td v-text="cli.correo"></td>
                <td v-text="cli.telefono"></td>
                <td v-text="cli.creado"></td>
                <td v-text="cli.estado"></td>
                <td>
                  <router-link :to="{path:'viewCliente/'+cli.id}" class="btn-btn-info"><i class="fa-solid fa-eye"></i></router-link>               
                  <router-link :to="{path:'editCliente/'+cli.id}" class="btn-btn-info"><i class="fa-solid fa-edit"></i></router-link>   
                  <button class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                  </button>            
                </td>
              </tr>-->
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>
                  <i class="fa-solid fa-eye"></i>
                  <i class="fa-solid fa-edit"></i>
                  <button class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </table>
  </div>
</template>

<script>

import { icon } from '@fortawesome/fontawesome';
import axios from 'axios'

export default {
  data() {
    return {
      Clientes: null,
      cargando: false
    }
  },
  mounted() {
    //this.getClientes();
  },
  methods: {
    /*getClientes(){
      this.cargando = true
      axios.get('http://localhost:3000/createCliente').then(
        res => {
          this.Clientes = res.data
          this.cargando = false
        }
      );
    }*/
  }
}
</script>
