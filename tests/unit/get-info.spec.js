import { mount } from '@vue/test-utils'
import getInfo from '../../src/components/getInfo.vue'

describe('search-input - Unit', () => {
    it('should be a vue instance', () => {
      const wrapper = mount(getInfo)
  
      expect(wrapper.vm).toBeDefined()
    })

    it('passes a binded user prop to Search component', async () => {
      const wrapper = mount(getInfo,{
        propsData: {
          hashtag: ''
        }
      })
  
      await wrapper.setProps({ hashtag: 'test' })

      expect(wrapper.vm.palavra).toEqual('test')

    })

    it('Called method',async () =>{

      const wrapper = mount(getInfo,{
        propsData:{
          hashtag: ''
        }
      })
      wrapper.vm.getDataApi()
    })
})
//https://www.ti-enxame.com/pt/php/pesquisa-no-twitter-pelo-exemplo-de-hashtag-api-v1.1/1073258401/
//https://www.youtube.com/watch?v=vlvtqp44xoQ
//https://developer.twitter.com/en/apps