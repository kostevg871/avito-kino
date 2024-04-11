import { Pagination } from "antd";
import { Typography } from "antd";
import { useGetMoviesQuery } from "../features/api/moviesApi";
import CustomList from "../components/CustomList";
import { useSearchParams } from "react-router-dom";

const MainPage = () => {
  const [pageParams, setPageParams] = useSearchParams();
  const [limitParams, setLimitParams] = useSearchParams();

  const pageParamsQuery = Number(pageParams.get("page")) || 1;
  const limitParamsQuery = Number(limitParams.get("limit")) || 10;

  const handlerPaginationChange = (page: number, limit: number) => {
    const params = new URLSearchParams();
    params.set("page", `${page}`);
    params.set("limit", `${limit}`);
    setPageParams(params, { preventScrollReset: true });
    setLimitParams(params, { preventScrollReset: true });
  };

  const { data, isLoading } = useGetMoviesQuery({
    page: pageParamsQuery,
    limit: limitParamsQuery,
  });

  return (
    <>
      <Typography.Title>Фильмы</Typography.Title>
      {isLoading ? (
        <></>
      ) : (
        <Pagination
          defaultCurrent={pageParamsQuery}
          defaultPageSize={limitParamsQuery}
          showSizeChanger={true}
          total={data?.pages}
          onChange={(page, limit) => handlerPaginationChange(page, limit)}
        />
      )}

      <CustomList page_size={pageParamsQuery} limit_size={limitParamsQuery} />
    </>
  );
};

export default MainPage;
