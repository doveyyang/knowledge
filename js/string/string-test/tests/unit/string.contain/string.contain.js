import { expect } from 'chai'
// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

describe('字符串是否容纳某个字符串', () => {

  // 公用变量使用
  let str = 'str'
  let ostr = 'string'

  it('利用IndexOf实现', () => {
      console.log('为什么不执行我的测试函数呢？')
    expect(ostr.indexOf(str)!=-1).to.not.eq(-1);
    // const msg = 'new message'
    // const wrapper = shallowMount(HelloWorld, {
    //   propsData: { msg }
    // })
    // expect(wrapper.text()).to.include(msg)
  })
})
