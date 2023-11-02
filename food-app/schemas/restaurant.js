import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'restaurant name',
      type: 'string',
      validation:rule=>rule.required(),
    },
    {
      name: 'description',
      title: 'restaurant Description',
      type: 'string',
      validation:rule=>rule.required(),
    },
    {
      name: 'image',
      title: 'restaurant Image',
      type: 'image',
    },
    {
        name: 'rating',
        title: 'restaurant rating',
        type: 'number',
        validation:rule=>rule.required().min(1).max(5).error('enter between 1 and 5')
      },
      {
        name: 'address',
        title: 'restaurant address',
        type: 'string',
        validation:rule=>rule.required(),
      },
      {
        name:'reviews',
        title:'restaurant reviews',
        type:'string'
      },
      {
        name: 'lat',
        title: 'restaurant latitude',
        type: 'number',
        validation:rule=>rule.required(),
      },
      {
        name: 'lng',
        title: 'restaurant longtiude',
        type: 'number',
        validation:rule=>rule.required(),
      },
      {
        name: 'type',
        title: 'restaurant Category',
        type: 'reference',
        to:[{type:'category'}],
        validation:rule=>rule.required()
      },
      {
        name: 'dishes',
        title: 'restaurant Dishes',
        type: 'array',
        of:[{type:'reference', to:[{type:'dish'}]}],
      },
  ],
})
