import { useEffect, useState } from "react";
import { Badge, Button, Card, Center, Heading, HStack, Image, Spinner, Stack, Text, VStack, } from "@chakra-ui/react";

import { useParams } from "react-router";
import { getArticle } from "../api";

function SingleArticle() {
  const params = useParams();
  const { articleId } = params;

  const [articleData, setArticleData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticle(articleId)
      .then((res) => {
        setArticleData(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return isLoading ? (
    <div>
      <VStack colorPalette="teal">
        <Spinner color="colorPalette.600" />
        <Text color="colorPalette.600">Loading...</Text>
      </VStack>
    </div>
  ) : (
    <div>
      <Center>
        <Card.Root maxW="xl" overflow="hidden">
          <Card.Body gap="2">
            <Card.Title>
              <Stack gap="2" align="flex-start">
                <Heading size="4xl">{articleData.title}</Heading>
              </Stack>
            </Card.Title>

            <Image src={articleData.article_img_url} alt="Article Image" />

            <Text textStyle="md" fontWeight="medium">
              by {articleData.author}
            </Text>
            {/* <Text>Created at: {articleData.created_at}</Text> */}

            {/* <Card.Description> */}

            <Text textStyle="lg">{articleData.body}</Text>

            {/* </Card.Description> */}
            <HStack mt="4">
              <Badge>Total Comments: {articleData.comment_count}</Badge>
              <Badge>Total Votes: {articleData.votes}</Badge>
            </HStack>
          </Card.Body>
          <Card.Footer gap="2">
            <Button variant="solid">Comment</Button>
            <Button variant="ghost">Vote</Button>
          </Card.Footer>
        </Card.Root>
      </Center>
    </div>
  );
}

export default SingleArticle;
