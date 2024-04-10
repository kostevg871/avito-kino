import { Flex, Card, Image, Pagination, Spin } from "antd";
import { Typography } from "antd";
import { IMovies } from "../utils/types";
import { useGetMoviesQuery } from "../features/api/moviesApi";
import { useState } from "react";

const { Title } = Typography;

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

      <Flex justify="center" wrap="wrap" gap="small">
        {!isLoading ? (
          data?.docs.map((movie: IMovies) => {
            return (
              <Card
                key={movie.id}
                size="small"
                styles={{ body: { padding: 10, maxWidth: 220 } }}
              >
                <Image
                  width={200}
                  src={movie.poster.previewUrl}
                  preview={false}
                />
                <Title level={5}>{movie.name}</Title>
              </Card>
            );
          })
        ) : (
          <Spin />
        )}
      </Flex>
    </>
  );
};

export default MainPage;
