<template>
  <div>
    Hello i am new router !!!

    <div>
      DataA : {{ dataA }}
    </div>

    <div>
      DataB : {{ dataB }}
    </div>

    <div>
      DataC : {{ dataC }}
    </div>

    <div>
      getCount : {{ count }}
    </div>

    <input type="text" v-model="dataB">

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'About',
    data () {
      return {
        dataA: 'A',
        dataB: 'B'
      }
    },
    methods: {
    },
    computed: {
      ...mapGetters([
        'count'
      ]),
      dataC: function () {
        return `${this.dataA} ${this.dataB}`
      }
    },
    watch: {
      dataB: function (value) {
        console.log('New value : ', value)
      }
    }
  }
</script>

<style scoped>

</style>
