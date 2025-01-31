/**
 * Store name of repo (or issue) from github context
 */
export default class GithubContextRepo {
    readonly name: string;
    constructor(args: Readonly<{
        name: string;
    }>);
}
