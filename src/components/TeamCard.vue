<template>
  <div class="col-5">
    <p>
      <img v-bind:alt="member.nombre" v-bind:src="member.image" />
    </p>
    <div class="service-content">
      <h2>{{ member.nombre }}</h2>
      <p class="service-text memebers">
          {{ member.descripcion }}
      </p>
      <p>
        <b>Rol:</b> {{ member.rol }} <br />
        <b>Email:</b> {{ member.email }}<br />
        <b>Celular:</b> {{ member.celular }}<br />
        <b>Profesión:</b> {{ member.profesion }} 
        <br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: ["member"]
};
</script>

<style scoped>
</style>
