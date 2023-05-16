#!/usr/bin/env node
import { Command } from 'commander';
import { startCommand } from './commands/start';
import { stopCommand } from './commands/stop';

const program = new Command();

program
    .version('1.0.0');

startCommand(program);
stopCommand(program);

program.parse(process.argv);
