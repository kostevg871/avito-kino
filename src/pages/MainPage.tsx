import { Pagination } from "antd";
import { Typography } from "antd";
import { useGetMoviesQuery } from "../features/api/moviesApi";
import { useState } from "react";
import CustomList from "../components/CustomList";

const MainPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isLoading } = useGetMoviesQuery({
    page: page,
    limit: limit,
  });

  return (
    <>
      <Typography.Title>Фильмы</Typography.Title>
      {isLoading ? (
        <></>
      ) : (
        <Pagination
          defaultCurrent={page}
          defaultPageSize={limit}
          showSizeChanger={true}
          total={data?.pages}
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
        />
      )}

      <CustomList page_size={page} limit_size={limit} />
    </>
  );
};

export default MainPage;
