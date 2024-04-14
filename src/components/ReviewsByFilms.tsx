import { Flex, List, Spin, Typography } from "antd";
import { useGetReviewsByIdQuery } from "../features/api/reviewsApi";
import { ReviewCard } from "./ReviewCard";
import { useState } from "react";

const { Title, Text } = Typography;

interface IProps {
  movieId: string;
}

export const ReviewsByFilms = ({ movieId }: IProps) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isSuccess } = useGetReviewsByIdQuery({
    movieId: movieId,
    page: page,
  });

  return (
    <div>
      <Title>Отзывы</Title>

      {isLoading ? (
        <Spin></Spin>
      ) : isSuccess && data.docs.length === 0 ? (
        <Text>Нет отзывов</Text>
      ) : (
        <Flex wrap="wrap" justify="space-between">
          <List
            pagination={{
              position: "top",
              align: "center",
              pageSize: 10,
              hideOnSinglePage: true,
              current: data?.page,
              defaultPageSize: data?.limit,
              showSizeChanger: true,
              total: data?.total,
              onChange: (page) => setPage(page),
            }}
            dataSource={data?.docs}
            renderItem={(item) => {
              return <ReviewCard item={item} />;
            }}
          />
        </Flex>
      )}
    </div>
  );
};
