import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';

const Heeader = () => {
    return(

        <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Stories</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
      </Container>
    )
}
export default Heeader;