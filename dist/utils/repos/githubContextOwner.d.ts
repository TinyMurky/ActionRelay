/**
 * Store owner of repo (or issue) from github context
 */
export default class GithubContextOwner {
    readonly name: string;
    constructor(args: Readonly<{
        name: string;
    }>);
}
