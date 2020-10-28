import parse from 'html-react-parser'

import { Subtitle, Container, ContainerImages } from '../index'
import ConditionalComponent from '../ConditionalComponent'
import { Topic } from '../../../data'

interface TopicProps {
  topics: Topic[]
}

const Topics: React.FC<TopicProps> = ({ topics }) => (
  <>
    {topics?.map((topic, index) => (
      <Container key={index} className="container">
        <Subtitle>{topic.title}</Subtitle>

        <ConditionalComponent content={topic.imageTop}>
          <ContainerImages>
            <img src={topic.imageTop} />
          </ContainerImages>
        </ConditionalComponent>

        {parse(topic.content)}
        <ConditionalComponent content={topic.imageBottom}>
          <ContainerImages>
            <img src={topic.imageBottom} />
          </ContainerImages>
        </ConditionalComponent>
      </Container>
    ))}
  </>
)

export default Topics
