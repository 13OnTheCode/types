import { base } from '@13onthecode/eslint-config'

export default [
  ...base,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 0
    }
  }
]
