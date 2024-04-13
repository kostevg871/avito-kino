import { Pagination, Typography, Input } from "antd";
import { useGetMoviesQuery } from "../features/api/moviesApi";
import CustomList from "../components/CustomList";
import { useSearchParams } from "react-router-dom";
import { ChangeEvent } from "react";
import { debounce } from "lodash";

const MainPage = () => {
  const [pageParams, setPageParams] = useSearchParams();

  const pageParamsQuery = Number(pageParams.get("page")) || 1;
  const limitParamsQuery = Number(pageParams.get("limit")) || 10;
  const searchParamsQuery = pageParams.get("query") || "";

  const handlerPaginationChange = (page: number, limit: number) => {
    if (
      searchParamsQuery === null ||
      searchParamsQuery === undefined ||
      searchParamsQuery === ""
    ) {
      pageParams.delete("query");
      pageParams.set("page", `${page}`);
      pageParams.set("limit", `${limit}`);
    } else {
      pageParams.set("query", `${searchParamsQuery}`);
      pageParams.set("page", `${page}`);
      pageParams.set("limit", `${limit}`);
    }
    setPageParams(pageParams);
  };

  const handlerSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    if (name === "") {
      pageParams.delete("query");
      pageParams.set("page", `${pageParamsQuery}`);
      pageParams.set("limit", `${limitParamsQuery}`);
    } else {
      pageParams.set("query", name);
      pageParams.set("page", `1`);
      pageParams.set("limit", `${limitParamsQuery}`);
    }
    setPageParams(pageParams);
  };

  const searchDebounce = debounce(handlerSearchChange, 1000);

  const { data: moviesData, isLoading: moviesLoading } = useGetMoviesQuery({
    page: pageParamsQuery,
    limit: limitParamsQuery,
    query: searchParamsQuery,
  });

  return (
    <>
      <Typography.Title>Фильмы</Typography.Title>

      <Input
        defaultValue={searchParamsQuery || ""}
        placeholder="Поиск по названию..."
        onChange={searchDebounce}
      />

      {moviesLoading ? (
        <></>
      ) : (
        <Pagination
          current={moviesData?.page}
          defaultPageSize={limitParamsQuery}
          showSizeChanger={true}
          total={moviesData?.pages}
          onChange={(page, limit) => handlerPaginationChange(page, limit)}
        />
      )}

      <CustomList
        page={pageParamsQuery}
        limit_size={limitParamsQuery}
        query={searchParamsQuery}
      />
    </>
  );
};

export default MainPage;
