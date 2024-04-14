import { Card, Pagination, Row, Image, Col } from "antd";
import { useState } from "react";
import { useGetSeriesByIdQuery } from "../features/api/seriesApi";
import Title from "antd/es/typography/Title";

interface IProps {
  id: number;
}

export const SeriesCard = ({ id }: IProps) => {
  const [seasons, setSeasons] = useState(1);

  const { data, isLoading } = useGetSeriesByIdQuery(id);

  return (
    <div>
      <Title>Сезоны и серии</Title>
      {isLoading ? (
        <></>
      ) : (
        <Col>
          <Row>
            <Pagination
              current={seasons}
              defaultPageSize={seasons}
              showSizeChanger={false}
              total={data!.total}
              onChange={(v) => setSeasons(v)}
            />
          </Row>
          <Row>
            {data!.docs
              .find((season) => season.number + 1 === seasons)
              ?.episodes.map((series) => {
                return (
                  <Card
                    key={series.number}
                    size="small"
                    styles={{ body: { padding: 10, maxWidth: 220 } }}
                  >
                    <Image width={200} src={series.still.url} preview={false} />
                    <Title level={5}>{series.name}</Title>
                  </Card>
                );
              })}
          </Row>
        </Col>
      )}
    </div>
  );
};
