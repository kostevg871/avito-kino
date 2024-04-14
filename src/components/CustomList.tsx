import { Flex, Card, Spin, Typography, Image } from "antd";
import { IMovies } from "../utils/types";
import { useNavigate } from "react-router-dom";
import { useGetMoviesQuery } from "../features/api/moviesApi";
import Paragraph from "antd/es/typography/Paragraph";
import placeholder from "../assets/img/placeholder.png";

const { Title } = Typography;

interface IProps {
  page: number;
  limit_size: number;
  query: string;
}

const CustomList = ({ page, limit_size, query }: IProps) => {
  const navigate = useNavigate();
  const { data, isLoading, isSuccess } = useGetMoviesQuery({
    page: page,
    limit: limit_size,
    query: query,
  });

  return (
    <Flex justify="center" wrap="wrap" gap="small">
      {isLoading ? (
        <Spin />
      ) : isSuccess && data.total === 0 ? (
        <Paragraph>Нет фильмов</Paragraph>
      ) : (
        data?.docs.map((movie: IMovies) => {
          return (
            <Card
              onClick={() => {
                navigate(`/movie/${movie.id}`);
              }}
              key={movie.id}
              size="small"
              styles={{ body: { padding: 10, maxWidth: 220 } }}
            >
              <Image
                width={200}
                src={
                  movie.poster.previewUrl === null
                    ? placeholder
                    : movie.poster.previewUrl
                }
                preview={false}
              />
              <Title level={5}>{movie.name}</Title>
            </Card>
          );
        })
      )}
    </Flex>
  );
};

export default CustomList;
