import { useParams } from "react-router-dom";
import { useGetMovieByIDQuery } from "../features/api/moviesApi";
import { Flex, Spin, Typography } from "antd";
import { ListPersons } from "../components/ListPersons";
import { ReviewsByFilms } from "../components/ReviewsByFilms";

const { Title, Text, Paragraph } = Typography;

const SingleMovie = () => {
  const { id } = useParams();
  const { data, isSuccess } = useGetMovieByIDQuery(Number(id));

  return (
    <div>
      {isSuccess ? (
        <Flex vertical={true}>
          <Title>{data?.name}</Title>
          <Paragraph>{data?.description}</Paragraph>
          <Flex justify="space-between" wrap="wrap">
            <Text>kp: {data?.rating.kp}</Text>
            <Text>Критики: {data?.rating.filmCritics}</Text>
            <Text>Imdb: {data?.rating.imdb}</Text>
          </Flex>
          <ListPersons persons={data?.persons} />
          <ReviewsByFilms movieId={id!.toString()} />
        </Flex>
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default SingleMovie;
