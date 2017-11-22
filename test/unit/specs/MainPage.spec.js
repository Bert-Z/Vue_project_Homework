import Vue from 'vue'
import MainPage from '@/components/MainPage'

describe('MainPage.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(MainPage)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent)
    .to.contain('听说你忘了我的生日？')
  })
  it('should render correct contents', () => {
    const Constructor = Vue.extend(MainPage);
    const vm = new Constructor().$mount();
    const button=vm.$el.querySelector('button');
    const clickEvent = new window.Event('click');
　　button.dispatchEvent(clickEvent);
　　vm._watcher.run();
    expect(vm.$el.textContent).to.contain('2017年');
  })
})
