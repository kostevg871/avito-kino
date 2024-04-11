import { Pagination, Typography, Input } from "antd";
import { useGetMoviesQuery } from "../features/api/moviesApi";
import CustomList from "../components/CustomList";
import { useSearchParams } from "react-router-dom";
import useDebounce from "../utils/hooks/useDebounce";

const MainPage = () => {
  const [pageParams, setPageParams] = useSearchParams();
  const [limitParams, setLimitParams] = useSearchParams();
  const [searchParams, setSeacrhParams] = useSearchParams();

  const pageParamsQuery = Number(pageParams.get("page")) || 1;
  const limitParamsQuery = Number(limitParams.get("limit")) || 10;
  const searchParamsQuery = useDebounce(searchParams.get("query") || "");

  const handlerPaginationChange = (page: number, limit: number) => {
    const params = new URLSearchParams();
    params.set("page", `${page}`);
    params.set("limit", `${limit}`);
    if (searchParams.get("query") === "") {
      params.set("query", searchParamsQuery);
    }
    setPageParams(params, { preventScrollReset: true });
    setLimitParams(params, { preventScrollReset: true });
  };

  const handlerSearchChange = (name: string) => {
    const params = new URLSearchParams();
    params.set("query", name);
    params.set("page", "1");
    setSeacrhParams(params, { preventScrollReset: true });
    setPageParams(params, { preventScrollReset: true });
  };
  const movies = useGetMoviesQuery({
    page: pageParamsQuery,
    limit: limitParamsQuery,
  });

  return (
    <>
      <Typography.Title>Фильмы</Typography.Title>
      <Input
        defaultValue={searchParamsQuery}
        placeholder="Поиск по названию..."
        onChange={(e) => handlerSearchChange(e.target.value)}
      />
      {movies.isLoading ? (
        <></>
      ) : (
        <Pagination
          defaultCurrent={pageParamsQuery}
          defaultPageSize={limitParamsQuery}
          showSizeChanger={true}
          total={movies.data?.pages}
          onChange={(page, limit) => handlerPaginationChange(page, limit)}
        />
      )}

      <CustomList page_size={pageParamsQuery} limit_size={limitParamsQuery} />
    </>
  );
};

export default MainPage;
