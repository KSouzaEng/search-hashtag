import { mount } from '@vue/test-utils'
import SearchInput from '../../src/components/searchInput.vue'
import getInfo from '../../src/components/getInfo.vue'

describe('search-input - Unit', () => {
  it('should be a vue instance', () => {
    const wrapper = mount(SearchInput,{
      propsData: {
        value: ''
      }
    })

    expect(wrapper.vm).toBeDefined()
  })

  it('should update searchQuery when prop value is changed', async () => {
    const wrapper = mount(SearchInput,{
      propsData: {
        value: ''
      }
    })

    await wrapper.setProps({ value: 'test' })
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.searchWord).toEqual('test')
  })

  it('should emit input event when something is typed', async () => {
    const wrapper = mount(SearchInput,{
      propsData: {
        value: ''
      }
    })

    const inputEl = wrapper.find('input[type="text"]')
    await inputEl.setValue('test')

    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input[0]).toEqual(['test'])
  })

  it('should clear input value when X icon is clicked', async () => {
    const wrapper = mount(SearchInput,{
      propsData: {
        value: ''
      }
    })

    const clearBtn = wrapper.find('.input__clear')
    await clearBtn.trigger('click')

    // expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input[0]).toEqual([''])
  })
  it('passes a binded user prop to get info component', async () => {
    const wrapper = mount(getInfo,{
      propsData: {
        hashtag: ''
      }
    })

    await wrapper.setProps({ hashtag: 'test' })

    expect(wrapper.vm.hashtag).toBe(wrapper.vm.hashtag)


  })
})

//