/**
 * Store name of repo (or issue) from github context
 */
export default class Repo {
    readonly name: string;
    constructor(args: Readonly<{
        name: string;
    }>);
}
