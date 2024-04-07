import { Flex, Card, Image } from "antd";
import { useGetMoviesQuery } from "../features/api/kinoApi";

const MainPage = () => {
  const { data } = useGetMoviesQuery({
    page: 2,
    limit: 20,
  });

  console.log(data?.docs[0]);

  return (
    <Flex wrap="wrap" gap="small" justify="center">
      {data?.docs.map((movie) => {
        return (
          <Card key={movie.id}>
            <Image width={200} src={movie.poster.previewUrl} />
            <p>{movie.name}</p>
          </Card>
        );
      })}
    </Flex>
  );
};

export default MainPage;
