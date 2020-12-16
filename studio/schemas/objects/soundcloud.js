import React from 'react'
import { ImSoundcloud } from 'react-icons/im'
import ReactPlayer from 'react-player/soundcloud'

const Preview = ({value}) => {
	const { url } = value
	return (<ReactPlayer url={url} />)
}

export default {
  name: 'soundcloud',
  type: 'object',
  title: 'Soundcloud Embed',
  icon: ImSoundcloud,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Soundcloud URL'
    }
  ],
  preview: {
  	select: {
  		url: 'url'
  	},
  	component: Preview
  }
}