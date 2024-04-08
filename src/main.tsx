import { render, h } from 'preact'
import { App } from './app'
import './index.css'
import { BskyAgent } from '@atproto/api'

const agent = new BskyAgent({
  service: "https://bsky.social"
})

render(<App />, document.getElementById('app')!)
