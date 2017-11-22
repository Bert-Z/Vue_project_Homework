import Vue from 'vue'
import TodoList from '@/components/TodoList'

describe('adds a new item to list on click', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TodoList);
    const vm = new Constructor().$mount();
    vm.newItem='brush my teeth';
    const button=vm.$el.querySelector('button');
    const clickEvent = new window.Event('click');
　　button.dispatchEvent(clickEvent);
　　vm._watcher.run();
    expect(vm.$el.textContent).to.contain('brush my teeth');
  })
  
})
