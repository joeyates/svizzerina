import esbuild from 'esbuild'
import {sassPlugin} from 'esbuild-sass-plugin'
import path from 'path'

const root = path.resolve(path.dirname(''))

const logLevel = process.env.ESBUILD_LOG_LEVEL || 'silent'
const watch = !!process.env.ESBUILD_WATCH

const indexJs = path.resolve(root, 'src/index.js')
const nodeModulesPath = path.resolve(root, 'node_modules')
const loadPaths = [nodeModulesPath]
const outdir = path.resolve(root, 'dist')

const promise = esbuild.build({
  entryPoints: [indexJs],
  bundle: true,
  target: 'es2020',
  plugins: [sassPlugin({loadPaths})],
  outdir,
  logLevel,
  watch
})
