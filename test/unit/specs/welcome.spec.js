import Vue from 'vue'
import welcome from '@/components/welcome'

describe('welcome.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(welcome)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent)
    .to.contain('WELCOME')
  })
})
