import { useNavigate, useParams } from "react-router-dom";
import { useGetMovieByIDQuery } from "../features/api/moviesApi";
import { Button, Flex, Spin, Typography } from "antd";
import { ListPersons } from "../components/ListPersons";
import { ReviewsByFilms } from "../components/ReviewsByFilms";
import CarouselPoster from "../components/CarouselPoster";
import { SeriesCard } from "../components/SeriesCard";

const { Title, Text, Paragraph } = Typography;

const SingleMovie = () => {
  const { id } = useParams();
  const { data, isSuccess, isLoading } = useGetMovieByIDQuery(Number(id));
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <Button type="primary" onClick={() => navigate(-1)}>
        Назад
      </Button>
      {isSuccess ? (
        <>
          <Title>{data?.name}</Title>
          <Paragraph>{data?.description}</Paragraph>
          <Flex justify="space-between" wrap="wrap">
            <Text>kp: {data?.rating.kp}</Text>
            <Text>Критики: {data?.rating.filmCritics}</Text>
            <Text>Imdb: {data?.rating.imdb}</Text>
          </Flex>
          {data.isSeries ? <SeriesCard id={Number(id)} /> : <></>}
          <Flex justify="space-between" wrap="wrap">
            <ListPersons
              persons={data?.persons}
              isLoading={isLoading}
              isSuccess={isSuccess}
              total={data.persons.length}
            />
          </Flex>
          <ReviewsByFilms movieId={id!.toString()} />
          <CarouselPoster movieId={`${id}`} />
        </>
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default SingleMovie;
