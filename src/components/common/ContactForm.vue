<template>
  <form class="space-y-4" @submit.prevent="submit">
    <div class="grid gap-4 sm:grid-cols-2">
      <label v-for="field in fields" :key="field.key" class="text-sm font-medium text-[var(--color-body)]">
        {{ field.label }}
        <input
          v-if="field.type !== 'select'"
          v-model="form[field.key]"
          :type="field.type"
          class="mt-2 min-h-11 w-full rounded-xl border border-[var(--color-border)] px-3 py-2 outline-none transition focus:border-[var(--color-primary-2)] focus:ring-2 focus:ring-cyan-100"
          :required="field.required"
        />
        <select
          v-else
          v-model="form[field.key]"
          class="mt-2 min-h-11 w-full rounded-xl border border-[var(--color-border)] px-3 py-2 outline-none transition focus:border-[var(--color-primary-2)] focus:ring-2 focus:ring-cyan-100"
          :required="field.required"
        >
          <option value="">请选择</option>
          <option v-for="type in consultationTypes" :key="type" :value="type">{{ type }}</option>
        </select>
      </label>
    </div>
    <label class="block text-sm font-medium text-[var(--color-body)]">
      项目需求
      <textarea
        v-model="form.need"
        class="mt-2 min-h-28 w-full rounded-xl border border-[var(--color-border)] px-3 py-2 outline-none transition focus:border-[var(--color-primary-2)] focus:ring-2 focus:ring-cyan-100"
        required
      ></textarea>
    </label>
    <label class="flex items-start gap-3 text-sm text-[var(--color-body)]">
      <input v-model="form.callback" type="checkbox" class="mt-1 size-4 rounded border-slate-300 text-[var(--color-primary)]" />
      <span>需要回电</span>
    </label>
    <p class="rounded-xl bg-[var(--color-soft)] p-3 text-xs leading-5 text-[var(--color-muted)]">{{ privacy }}</p>
    <div v-if="submitted" class="rounded-md bg-emerald-50 p-3 text-sm font-medium text-emerald-700">
      已模拟提交成功，我们将在原型中展示成功状态，不会发送到真实后台。
    </div>
    <button type="submit" class="min-h-11 w-full rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-2)]">
      提交咨询
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { consultationTypes } from '../../data/services'
import { complianceText } from '../../data/compliance'

const props = defineProps<{ presetType?: string }>()

type FormKey = 'name' | 'org' | 'role' | 'phone' | 'email' | 'type' | 'sample' | 'amount'
type FormState = Record<FormKey | 'need', string> & { callback: boolean }

const fields: Array<{ key: FormKey; label: string; type: string; required?: boolean }> = [
  { key: 'name', label: '姓名', type: 'text', required: true },
  { key: 'org', label: '单位/机构', type: 'text', required: true },
  { key: 'role', label: '职位/身份', type: 'text' },
  { key: 'phone', label: '手机', type: 'tel', required: true },
  { key: 'email', label: '邮箱', type: 'email', required: true },
  { key: 'type', label: '咨询类型', type: 'select', required: true },
  { key: 'sample', label: '样本类型', type: 'text' },
  { key: 'amount', label: '预计样本量', type: 'text' },
]

const form = reactive<FormState>({
  name: '',
  org: '',
  role: '',
  phone: '',
  email: '',
  type: '',
  sample: '',
  amount: '',
  need: '',
  callback: false,
})

const submitted = ref(false)
const privacy = complianceText.privacy.body

watch(
  () => props.presetType,
  (value) => {
    if (value && !form.type) {
      form.type = consultationTypes.find((type) => value.includes(type)) ?? ''
    }
  },
  { immediate: true },
)

function submit() {
  submitted.value = true
}
</script>
