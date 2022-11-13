import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import PostView from '../PostView.vue'

describe('PostView', () => {
  it('renders properly', () => {
    const wrapper = mount(PostView, { props: { id: '3' }, 
     global: {
      plugins: [createTestingPinia(
        {createSpy: vi.fn,}
      )],
    }, })
    expect(wrapper.text()).toContain('Post 3')
  })
})
