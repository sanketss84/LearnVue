//Reusable components should be registered on top
Vue.component('hello',{
  template : '<h3>Component Hello!!</h3>'
});

var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance 1',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs);
      console.log(this.$refs.myButton.innerHTML); //ref is like jquery selector
      this.$refs.myButton.innerHTML = 'testss';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

var data2 = {
  title : 'The VueJS Instance 2'
}  

var vm2 = new Vue({
  el: '#app2',
  data: data2,
  methods : {
      onChange : function () {
          vm1.title = 'changed'; //vue 1 is modified from another vue 2 instance
      }
  }
});

// ------------------------------------------------
//vue 1 is modified also using normal javascript
// setTimeout(function () {
//     vm1.show();
//     vm1.title = 'title changed by 3 second timer';
//     vm1.$data.title = 'its also accessible via $data.title'
//   //   vm1.updateTitle('some new title');
// }, 3000)

// ------------------------------------------------
// Accessing vue object using plain js
// vm1.newProp = 'someprop value';
// console.log(vm1);
// console.log(vm1.$data);
// console.log(vm2.$data === data2);

// ------------------------------------------------
// $refs is like jquery selector
vm1.$refs.heading.innerText = 'something else';

//All vue js props can be found on the site here
// https://vuejs.org/v2/api/

// ------------------------------------------------
// Templates
var vm3 = new Vue({
  //el : '#app3'; //moved to mount() below
  data: {
    title : 'The VueJS Instance 3'
  }  ,
  methods : {
  }
});

// mount() is same as el property 
// this has to be below the Vue()
vm3.$mount('#app3');

// ----------
//note multi-line templates is a bit challenging
var vm4 = new Vue({
  template : '<h3>Hello!!</h3>' 
});

// mount() is same as el property 
// this has to be below the Vue()
// vm4.$mount('#app4'); 
// or you can also use plain js selector
vm4.$mount(); //you can keep this empty and mount using js selector
document.getElementById('app4').appendChild(vm4.$el);

// ------------------------------------------------
var vm5 = new Vue({
    el: '#app5',
    template : '<hello></hello>'
});