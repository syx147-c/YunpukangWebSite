import { readonly, ref } from 'vue'

const isOpen = ref(false)
const presetType = ref('')

export function useContactModal() {
  function openContactModal(type = '') {
    presetType.value = type
    isOpen.value = true
  }

  function closeContactModal() {
    isOpen.value = false
  }

  return {
    isContactModalOpen: readonly(isOpen),
    presetType: readonly(presetType),
    openContactModal,
    closeContactModal,
  }
}
