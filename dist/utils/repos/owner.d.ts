/**
 * Store owner of repo (or issue) from github context
 */
export default class Owner {
    readonly name: string;
    constructor(args: Readonly<{
        name: string;
    }>);
}
