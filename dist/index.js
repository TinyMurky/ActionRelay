import { c as coreExports } from './core-CW-dN4Cv.js';
import 'os';
import 'crypto';
import 'fs';
import 'path';
import 'http';
import 'https';
import 'net';
import 'tls';
import 'events';
import 'assert';
import 'util';
import 'stream';
import 'buffer';
import 'querystring';
import 'stream/web';
import 'node:stream';
import 'node:util';
import 'node:events';
import 'worker_threads';
import 'perf_hooks';
import 'util/types';
import 'async_hooks';
import 'console';
import 'url';
import 'zlib';
import 'string_decoder';
import 'diagnostics_channel';
import 'child_process';
import 'timers';

// import { githubContext } from '@/constants/github.js'
// import OctokitManager from '@/utils/octokitManager.js'
// import Logger from '@/utils/logger.js'
// import MainJobsToGanttRunner from '@/steps/jobSummary/mainJobsToGanttRunner.js'
/**
 * The main function for the action.
 *
 * The main function for the action.
 */
async function run() {
    try {
        // const ms: string = core.getInput('milliseconds')
        // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
        // Logger.debug(`Github Context: ${githubContext}`)
        // Log the current timestamp, wait, then log the new timestamp
        // Logger.debug(new Date().toTimeString())
        // const githubToken = core.getInput('GITHUB_TOKEN')
        // const octokit = OctokitManager.getInstance(githubToken)
        // const stepGanttChartGenerate = new MainJobsToGanttRunner({
        //   octokit,
        //   githubContext
        // })
        // await stepGanttChartGenerate.run()
        // Set outputs for other workflow steps to use
        coreExports.setOutput('time', new Date().toTimeString());
    }
    catch (error) {
        // Fail the workflow run if an error occurs
        if (error instanceof Error)
            coreExports.setFailed(error.message);
    }
}

/**
 * The entrypoint for the action. This file simply imports and runs the action's
 * main logic.
 */
/* istanbul ignore next */
run();
//# sourceMappingURL=index.js.map
