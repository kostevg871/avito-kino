import { Flex, List } from "antd";
import { useGetReviewsByIdQuery } from "../features/api/reviewsApi";
import { ReviewCard } from "./ReviewCard";

interface IProps {
  movieId: string;
}

export const ReviewsByFilms = ({ movieId }: IProps) => {
  const { data, isLoading } = useGetReviewsByIdQuery({ movieId: movieId });
  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <Flex wrap="wrap" justify="space-between">
          <List
            pagination={
              data!.total >= 10 && {
                position: "top",
                align: "center",
                pageSize: 10,
                hideOnSinglePage: true,
              }
            }
            dataSource={data?.docs}
            renderItem={(item) => {
              return <ReviewCard item={item} />;
            }}
          />
        </Flex>
      )}
    </>
  );
};
