import { mount } from '@vue/test-utils'
import getInfo from '../../src/components/getInfo.vue'

describe('Get INFO', () => {
    it('should be a vue instance', () => {
      const wrapper = mount(getInfo)
  
      expect(wrapper.vm).toBeDefined()
    })

   
    it('Called method',async () =>{

      const wrapper = mount(getInfo,{
        propsData:{
          hashtag: ''
        }
      })
      wrapper.vm.getDataApi()
    })
    it('check if the div is render',async() => {
      
      const wrapper = mount(getInfo,{
        propsData: {
          hashtag: ''
        }
      })
  
      await wrapper.setProps({ hashtag: 'test' })
  
      expect(wrapper.vm.hashtag).toBe(wrapper.vm.hashtag)
      expect(wrapper.find('.col-sm-6').exists()).toBeTruthy()

    })
    it('dsadfsd' , async () => {
      const wrapper = mount(getInfo,{
        propsData: {
          hashtag: ''
        }
      })
      const obj = {
        id:1,
        user_name:"Antonio da Silva",
        title:"developer",
        tweet:"Go to study python  #developer"
      };
  

      expect(obj).toEqual(
        expect.objectContaining({
          title: 'developer'
        })
      );
        // .findAll('div')
        // .filter(row => row.classes('filtered'))
  })
})
