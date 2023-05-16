#!/usr/bin/env node
import * as dotenv from "dotenv";
dotenv.config();

import { Command } from 'commander';
import { startCommand } from './commands/start';
import { stopCommand } from './commands/stop';
import { initCommand } from './commands/code';

const program = new Command();

program
    .version('1.0.0');

startCommand(program);
stopCommand(program);
initCommand(program);

program.parse(process.argv);
