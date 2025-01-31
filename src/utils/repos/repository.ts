import { RepositoryGithubType } from '@/types/repository.js'
import RepoFullName from '@/utils/repos/repoFullName.js'
import RepoName from '@/utils/repos/repoName.js'

export default class Repository {
  readonly id: number
  readonly name: RepoName
  readonly fullName: RepoFullName

  constructor(
    args: Readonly<{
      id: number
      name: RepoName
      fullName: RepoFullName
    }>
  ) {
    const { id, name, fullName } = args

    if (!id) {
      throw new Error('Id need to be provided when initialize Repository')
    }

    if (!Number.isInteger(id)) {
      throw new Error('Id need to be integer when initialize Repository')
    }

    if (id <= 0) {
      throw new Error('Id need to be larger than 0 when initialize Repository')
    }

    this.id = id
    this.name = name
    this.fullName = fullName
  }

  public static fromGithub(githubRepository: RepositoryGithubType) {
    const name = new RepoName(githubRepository.name)
    const fullName = new RepoFullName(githubRepository.full_name)

    return new Repository({
      id: githubRepository.id,
      name,
      fullName
    })
  }

  public toJson() {
    const { id, name, fullName } = this

    const json = {
      id: id,
      name: name.name,
      fullName: fullName.name
    }

    return json
  }
}
