import { Flex, Card, Spin, Typography, Image } from "antd";
import { IMovie, IMovies } from "../utils/types";
import { useNavigate } from "react-router-dom";
import { useGetMoviesQuery } from "../features/api/moviesApi";

const { Title } = Typography;

interface IProps {
  page_size: number;
  limit_size: number;
  data?: IMovie;
}

const CustomList = ({ page_size, limit_size }: IProps) => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetMoviesQuery({
    page: page_size,
    limit: limit_size,
  });

  return (
    <Flex justify="center" wrap="wrap" gap="small">
      {!isLoading ? (
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
  );
};

export default CustomList;