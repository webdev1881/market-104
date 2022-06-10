<template>

  <div class='help'>
    <div class="help_wrapper md:container md:mx-auto">

      <div class="help_title">
        Дізнайся першим про знижку або цікаву пропозицію!

        <ValidationProvider name="Phone" rules="required|phone" v-slot="{ errors }">
          <input v-model="phone" type="text" placeholder="Phone">
          <span class="error">{{ errors }}</span>
        </ValidationProvider>

      </div>

      <div class="help_form">
        <UIM-Input/>
      </div>
    </div>
  </div>

</template>


<script>
import { ValidationProvider } from "vee-validate";

export default {
  name: 'help',
  components: {
    ValidationProvider: ValidationProvider
  },
  data: () => ({
    phone: null,
  }),
  created() {
  },
}

</script>



<style lang='scss' scoped>
  
.help {
  background-color: $blueGray;
  padding: 30px 0;
}

.help_title {
  margin-bottom: 100px;
}

.slider {
  width: 300px!important;
}
  
</style>