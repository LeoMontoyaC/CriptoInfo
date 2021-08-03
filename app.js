Vue.component('CoinDetail',{
  props:['coin'],
  data(){
      return{
          showPrices:false,
          value:0
      }
  },
  methods:{
    toggleShowPrices(){
      this.showPrices =!this.showPrices
      this.$emit('change-color',
        this.showPrices ? 'FF96C8' : '3D3D3D')
      }
  },
  computed:{
    title(){
        return `${this.coin.name} - ${this.coin.symbol}`;
    },
    convertedValue(){
        if(!this.value){
            return 0;
        }
        return this.value / this.coin.price
    }
  },
  created () {
    console.log('Created...')
  },
  mounted() {
    console.log('Mounted...')
  },
  template: `
  <div>
      <img 
          :src="coin.img" alt="" 
          @mouseover="toggleShowPrices"
          @mouseout="toggleShowPrices"
      >
      <h1 :class="coin.changePercent > 0 ? 'green' : 'red' ">
          {{title}}
          <span v-if="coin.changePercent > 0">🥵</span>
          <span v-else-if="coin.changePercent < 0">🥶</span>
          <span v-else>🤨</span>
          <span @click="toggleShowPrices">
              {{showPrices ? '🙈' : '🐵'}}
          </span>
          </br>
          <input type="number" v-model="value">
          </br>
          <span>{{convertedValue}}</span>
          </br>
          <slot name="text"></slot>
          <slot name="link"></slot>
          
          <ul v-show="showPrices">
              <li
              class="uppercase"
              :class="{orange: item.value == coin.price, red: item.value < coin.price, green: item.value > coin.price }"
              v-for="(item, index) in coin.pricesWithDays"
              :key="item.day">
                  {{index}} - {{item.day}} - {{item.value}}
              </li>
          </ul>
      </h1>
  </div>
  `
});

Vue.config.devtools = true

new Vue({
  el:'#app',
  data() {
      return {
          btc:{
              name:'Bitcoin',
              symbol:'BTC',
              img:'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
              changePercent:-10,
              price:8400,
              pricesWithDays: [
                  { day: 'Lunes', value: 8400 },
                  { day: 'Martes', value: 7900 },
                  { day: 'Miercoles', value: 8200 },
                  { day: 'Jueves', value: 9000 },
                  { day: 'Viernes', value: 9400 },
                  { day: 'Sabado', value: 10000 },
                  { day: 'Domingo', value: 10200 },
              ],
          },
          
          color: 'f4f4f4'
      }
  },
  created () {
    console.log('Created...')
  },
  mounted() {
    console.log('Mounted...')
  },
  methods: {
      updateColor(color){
          this.color = color || this.color.split('').reverse().join('');
      }
  },
  
})