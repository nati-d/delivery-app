import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation:rule=>rule.required(),
    },
    {
      name: 'description',
      title: 'Category Description',
      type: 'string',
      validation:rule=>rule.required(),
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
    },
  ],
})
