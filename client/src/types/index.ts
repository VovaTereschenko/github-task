export interface IRepositoryInfo {
  description: string;
  forkCount: number;
  name: string;
  stargazerCount: number;
  url: string;
}

export interface IGithubReposList {
  repositoryMap?: IRepositoryInfo[];
  isLoading?: boolean;
  isError?: boolean;
  additionalListItems: React.ReactNode | React.ReactNode[];
}
