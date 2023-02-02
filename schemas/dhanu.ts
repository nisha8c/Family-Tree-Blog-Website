import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dhanu',
  title: 'Dhanu',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'birthday',
      title: 'Birthday',
      type: 'date',
      options: {
        dateFormat: 'yyyy-MM-dd'
      }
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
