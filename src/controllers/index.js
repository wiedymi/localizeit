import * as dotenv from 'dotenv'
import * as lexpress from 'lexpress'

dotenv.config()

const VERSION = require('../../package.json').version
const WEBSITE_NAME = require('../../package.json').version

export default class BaseController extends lexpress.BaseController {
  render(view, data) {
    data = data || {}
    const global = {
      me: this.req.user,
      releaseVersion: process.env[process.env.RELEASE_VERSION_ENV_VAR_NAME],
      version: VERSION,
      websiteName: process.env.WEBSITE_NAME,
    }

    this.res.render(view, { ...data, flash: this.req.flash(), global })
  }

  flashMongooseErrors(err, data) {
    if (err === null) return

    this.req.flash('hasError', '1')
    for (let prop in err.errors) {
      this.req.flash(`${prop}Error`, err.errors[prop].message)
    }
    for (let prop in data) {
      if (typeof data[prop] === 'string') this.req.flash(prop, data[prop])
    }
  }
}
