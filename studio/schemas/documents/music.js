import { ImHeadphones } from 'react-icons/im'

export default {
    name: 'music',
    type: 'document',
    title: 'Music',
    icon: ImHeadphones,
    //initialValue: {
     // setMastHeader: false
    //},
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        description: 'Titles of the Music page.'
      },
      {
        name: 'mainImage',
        type: 'mainImage',
        title: 'Main image'
      },
      {
        name: 'musicBodyText',
        type: 'bodyText',
        title: 'Music content'
      }
    ]
}
  