import { Command } from 'commander';

export function stopCommand(program: Command) {
    program
        .command('stop')
        .description('Stop the program')
        .action(() => {
            console.log('Stopping the program...');
        });
}
