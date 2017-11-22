<template>
  <div id="app">
    <div class="todolist">
      <h2 v-text="text"></h2>
      <input type="text" v-model="newItem" v-on:keyup.enter="addNew" style="width:300px" />
      <button v-on:click="addNew">Add</button>
      <ul class="ll">
        <li v-for="(item, index) in items">
          <span v-bind:class="{finished: item.isFinished}">{{item.label}}</span>
          <span v-on:click="toggle(item)" class="func first">{{!item.isFinished ? 'done' : 'todo'}}</span>
          <span v-on:click="items.splice(index, 1)" class="func">delete</span>
        </li>
      </ul>
      <div v-show="hasData" v-on:click="del" class="delAll">
        Delete All
      </div>
    </div>
  </div>
</template>

<script>
import Store from './store';

export default {
  name: 'Todolist',
  mounted() {
    this.hasData = this.items && this.items.length ? true : false;
  },
  data() {
    return {
      text: 'Todo',
      items: Store.fetch(),
      newItem: '',
      hasData: false
    }
  },
  watch: {
    items: {
      handler(items) {
        Store.save(items);
        this.hasData = this.items && this.items.length ? true : false;
      },
      deep: true
    }
  },
  methods: {
    toggle(item) {
      item.isFinished = !item.isFinished;
    },
    addNew() {
      if (this.newItem.trim() == '') {
        return;
      }
      if (!this.items) {
        this.items = []
      }
      this.items.push({label: this.newItem, isFinished: false});
      this.newItem = '';
    },
    del() {
      this.items = null;
    }
  },
  components: {}
}
</script>

<style>
.todolist {
	margin-left: 150px;
	height: 400px;
	float: left;
  text-align: center;
	width:400px;
}
input {
  box-shadow: 0 0 8px rgb(150, 104, 219);
  border: none;
}
li {
  margin-top: 9px;
}
button {
  border-radius: 14px;
  color: black;
  box-shadow: 0 0 2px rgb(70, 120, 231);
  background: none;

}
span.func {
  cursor: pointer;
  margin-left: 7px;
  text-decoration: underline;
}
span.func.first {
  margin-left: 13px;
}
.ll {
  text-align: left;
  margin-left: 50px;
}
.finished {
  text-decoration: line-through;
}
div.delAll {
  text-decoration: underline;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
