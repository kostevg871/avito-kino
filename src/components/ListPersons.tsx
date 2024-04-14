import { Card, Flex, Image, List, Typography, Spin } from "antd";
import { IPersons } from "../utils/types";

const { Text, Title } = Typography;

interface IProps {
  persons: IPersons[];
  isLoading: boolean;
  isSuccess: boolean;
  total: number;
}

export const ListPersons = ({
  persons,
  isLoading,
  isSuccess,
  total,
}: IProps) => {
  return (
    <div>
      <Title>Актеры</Title>
      {isLoading ? (
        <Spin />
      ) : isSuccess && total === 0 ? (
        <Text>Нет информации об актерах</Text>
      ) : (
        <List
          pagination={
            persons.length >= 10 && {
              position: "top",
              align: "center",
              pageSize: 10,
              hideOnSinglePage: true,
            }
          }
          grid={{ gutter: 24, xs: 1, sm: 2, md: 3, lg: 3 }}
          dataSource={persons}
          renderItem={(person) => (
            <Flex wrap="wrap">
              <Card title={person.name}>
                <Flex vertical={true}>
                  <Image width={200} src={person.photo} preview={false} />
                  <Text>{person.description}</Text>
                </Flex>
              </Card>
            </Flex>
          )}
        />
      )}
    </div>
  );
};
