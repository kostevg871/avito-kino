import { List } from "antd";
import { useGetReviewsByIdQuery } from "../features/api/reviewsApi";

interface IProps {
  movieId: string;
}

export const ReviewsByFilms = ({ movieId }: IProps) => {
  const { data, isLoading } = useGetReviewsByIdQuery({ movieId: movieId });
  return (
    <List
      itemLayout="vertical"
      dataSource={data?.docs}
      renderItem={(item) => {
        return (
          <List.Item>
            <List.Item.Meta title={item.title} description={item.review} />
          </List.Item>
        );
      }}
    />
  );
};
