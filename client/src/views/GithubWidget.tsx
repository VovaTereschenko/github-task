import * as React from "react";
import { GithubWidgetLayout } from "../layouts";
import { ShowMorePartial, TextFieldPartial } from "../partials";
import { Repositories } from "../renderers/Repositories";
import { useGithubRepositoriesRequest } from "../hooks/useGithubRepositoriesRequest";

const DEFAULT_SEARCH_VALUE = "Material UI";
const DEFAULT_RESULTS_COUNT = 10;
const EXCESSIVE_PAGINATION = 100;

const GithubWidget = () => {
  const [searchValue, setSearchValue] = React.useState(DEFAULT_SEARCH_VALUE);
  const [resultsCount, setResultsCount] = React.useState(DEFAULT_RESULTS_COUNT);
  const [memoizedRepositoryMap, setMemoizedRepositoryMap] =
    React.useState(null);

  const {
    loading,
    error,
    repositoryMap = memoizedRepositoryMap,
  } = useGithubRepositoriesRequest({
    searchValue,
    resultsCount,
  });

  const isShowMoreDisabled = React.useMemo(() => {
    const isLessThanTenNewResults = !((repositoryMap?.length + 1) % 10);
    const isResultLimitExceeded =
      resultsCount > EXCESSIVE_PAGINATION - DEFAULT_RESULTS_COUNT;
    return isLessThanTenNewResults || isResultLimitExceeded;
  }, [repositoryMap, resultsCount]);

  const onSearchChange = React.useCallback((value: string) => {
    setMemoizedRepositoryMap(null);
    setSearchValue(value);
  }, []);

  const handleShowMore = React.useCallback(() => {
    setMemoizedRepositoryMap(repositoryMap);
    setResultsCount(resultsCount + DEFAULT_RESULTS_COUNT);
  }, [repositoryMap, resultsCount]);

  return (
    <GithubWidgetLayout>
      <Repositories
        repositoryMap={repositoryMap}
        isLoading={loading}
        isError={Boolean(error)}
        additionalListItems={
          <ShowMorePartial
            isDisabled={isShowMoreDisabled}
            onClick={handleShowMore}
          />
        }
      />
      <TextFieldPartial
        onChange={onSearchChange}
        defaultValue={DEFAULT_SEARCH_VALUE}
        isLoading={loading}
      />
    </GithubWidgetLayout>
  );
};

export { GithubWidget };
