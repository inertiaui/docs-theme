#!/usr/bin/env node

import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const args = process.argv.slice(2)
const redirects = []
let outDir = null
let redirectsFile = null

function readValue(option, index) {
    const value = args[index + 1]

    if (!value || value.startsWith('--')) {
        throw new Error(`${option} expects a value.`)
    }

    return value
}

for (let index = 0; index < args.length; index++) {
    const arg = args[index]

    if (arg === '--outDir') {
        outDir = readValue(arg, index)
        index++
        continue
    }

    if (arg === '--redirect') {
        redirects.push(readValue(arg, index))
        index++
        continue
    }

    if (arg === '--redirects') {
        redirectsFile = readValue(arg, index)
        index++
        continue
    }

    throw new Error(`Unknown option: ${arg}`)
}

function run(command, commandArgs) {
    const result = spawnSync(command, commandArgs, {
        stdio: 'inherit',
        shell: process.platform === 'win32',
    })

    if (result.status !== 0) {
        process.exit(result.status ?? 1)
    }
}

if (redirectsFile) {
    const filePath = path.resolve(redirectsFile)
    const lines = fs
        .readFileSync(filePath, 'utf8')
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#'))

    redirects.push(...lines)
}

const buildArgs = ['build']

if (outDir) {
    buildArgs.push('--outDir', outDir)
}

run('vitepress', buildArgs)

if (redirects.length > 0) {
    const targetDir = path.resolve(outDir ?? 'dist')

    fs.mkdirSync(targetDir, { recursive: true })
    fs.writeFileSync(path.join(targetDir, '_redirects'), `${redirects.join('\n')}\n`)
}
