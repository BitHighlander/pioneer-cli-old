import { Command } from 'commander';

export function initCommand(program: Command) {
    program
        .command('init')
        .description('Loads the Current github repo into the database')
        .action(() => {
            console.log('Starting the program...');
        });
}
