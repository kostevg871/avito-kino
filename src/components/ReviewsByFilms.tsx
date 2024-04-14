import { Flex, List } from "antd";
import { useGetReviewsByIdQuery } from "../features/api/reviewsApi";
import { ReviewCard } from "./ReviewCard";
import Title from "antd/es/typography/Title";
import { useState } from "react";

interface IProps {
  movieId: string;
}

export const ReviewsByFilms = ({ movieId }: IProps) => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetReviewsByIdQuery({
    movieId: movieId,
    page: page,
  });

  return (
    <div>
      <Title>Отзывы</Title>

      {isLoading ? (
        <></>
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
