import { Command } from 'commander';
import { OpenAI } from "langchain/llms/openai";
// import { VectorDBQAChain } from "langchain/chains";
// import { HNSWLib } from "langchain/vectorstores";
// import { OpenAIEmbeddings } from "langchain/embeddings";
// import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { execSync } from 'child_process';
import * as path from 'path'; // for path normalization

export function initCommand(program: Command) {
    program
        .command('code')
        .description('attempts to code for you')
        .action(() => {
            // List of bash script files
            const bashScripts = [
                'commit-and-push.sh',
                // 'get-open-issues.sh',
                // 'clone-repo.sh',
                // 'git-url-github.sh'
            ];

            //in order!

            // Print current directory
            console.log(`Current directory: ${process.cwd()}`);

            bashScripts.forEach((bashScript) => {
                try {
                    // Assuming that the scripts are located at '../skills'
                    const result = execSync(`bash skills/${bashScript}`, { stdio: 'inherit' });
                    console.log(`Result: ${result}`);
                } catch (error) {
                    console.error(`Error: ${error}`);
                }
            });

            // git the current github repo
                //TODO if not in github push it

            //get current issues

            //attempt to solve issue


        });
}
