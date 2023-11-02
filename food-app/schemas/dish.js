import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'dishes',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Dish name',
      type: 'string',
      validation:rule=>rule.required(),
    },
    {
      name: 'description',
      title: 'Dish Description',
      type: 'string',
      validation:rule=>rule.required(),
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
    },
    {
        name: 'price',
        title: 'Dish Price',
        type: 'number',
      },
  ],
})
