import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'blog',

  projectId: '0wq9haw3',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
