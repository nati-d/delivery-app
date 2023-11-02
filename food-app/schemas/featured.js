import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Featured name',
      type: 'string',
      validation:rule=>rule.required(),
    },
    {
      name: 'description',
      title: 'featured Description',
      type: 'string',
      validation:rule=>rule.required(),
    },
    {
      name: 'restaurants',
      title: 'featured Restaurants',
      type: 'array',
      of:[{type:'reference', to:[{type:'restaurant'}]}]
    },
  ],
})
