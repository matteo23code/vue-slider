new Vue({
  el: '#slider',
  data:{
     active: true,
     img: [
      './img/Cascate.jpg',
      './img/clouds-country.jpg',
      './img/lavander.jpg',
      './img/river.jpg'
    ],
      imagesIDX: 0
  },
  methods: {
    //creo un pulsante dove al suo click vado avanti di una immagine 
  next: function() {
    this.imagesIDX += 1;
    if (this.imagesIDX > (this.img.length - 1)) {
      this.imagesIDX = 0;
    }
    console.log(this.img[this.imagesIDX]);
  },
  //creo un pulsante dove al suo click torno indietro di una immagine
  prev: function(){
    this.imagesIDX -= 1;
    if (this.imagesIDX < 0 ) {
      this.imagesIDX = this.img.length - 1;
    }
    console.log(this.img[this.imagesIDX]);
  },
  // creo un ciclo for con fa-circle: se i è == imagesIDX allora attiva il pallino con lo stesso indice.
  isActive: function(i){
    if(i == this.imagesIDX){
      return 'fas fa-circle active'
    }else {
      return 'fas fa-circle'
    }
  },
  // creo un pulsante dove al click vado a prendere il palllino e l immagine con lo stesso indice.
  changeImage: function(i){
   this.imagesIDX = i
 },
  }
});
Vue.config.devtools = true
