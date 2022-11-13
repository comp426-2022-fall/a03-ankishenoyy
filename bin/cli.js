#!/usr/bin/env node
import minimist from 'minimist';
import { roll } from '../lib/roll.js'

const args = minimist(process.argv.slice(2))

var s = args.sides
var d = args.dice
var r = args.rolls

console.log(JSON.stringify(roll(s, d, r)))
