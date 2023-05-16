import { Command } from 'commander';

export function startCommand(program: Command) {
    program
        .command('start')
        .description('Start the program')
        .action(() => {
            console.log('Starting the program...');
        });
}
