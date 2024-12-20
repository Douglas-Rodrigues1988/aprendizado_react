import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={80} nome="Douglas Rodrigues" image="https://drive.google.com/file/d/1lWokL4RtKiGklOvSQWk0fSDh3DDmKCNr/view?usp=drive_link"/>
                <UserInfo percentual={27} nome="Douglas Rodrigues" image="https://drive.google.com/file/d/1lWokL4RtKiGklOvSQWk0fSDh3DDmKCNr/view?usp=drive_link"/>
                <UserInfo percentual={89} nome="Douglas Rodrigues" image="https://drive.google.com/file/d/1lWokL4RtKiGklOvSQWk0fSDh3DDmKCNr/view?usp=drive_link"/>
                <UserInfo percentual={57} nome="Douglas Rodrigues" image="https://drive.google.com/file/d/1lWokL4RtKiGklOvSQWk0fSDh3DDmKCNr/view?usp=drive_link"/>
                <UserInfo percentual={12} nome="Douglas Rodrigues" image="https://drive.google.com/file/d/1lWokL4RtKiGklOvSQWk0fSDh3DDmKCNr/view?usp=drive_link"/>
            </Column>
        </Container>
    </>)
}

export { Feed }