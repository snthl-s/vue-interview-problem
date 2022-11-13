import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import SearchPost from '../SearchPost.vue'

describe('SearchPost', () => {
  it('renders properly', () => {
    const wrapper = mount(SearchPost, { props: { }, 
     global: {
      plugins: [createTestingPinia(
        {createSpy: vi.fn,}
      )],
    }, })
    expect(wrapper.text()).toContain('img')
  })
})
