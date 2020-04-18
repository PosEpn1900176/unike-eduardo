import React from 'react';
import { Container, Text, H3, Button } from 'native-base';
import { Image, ImageBackground } from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import { logo, initial } from '../../../../images';
import style from './style';

const InitialPresentation = props => {
  return (
    <Container style={style.container}>
      <Grid>
        <Row style={style.logo}>
          <Image source={logo} />
        </Row>
        <Row size={2}>
          <ImageBackground source={initial} style={style.banner} />
        </Row>
        <Row style={style.message} size={1}>
          <H3 style={style.messageTitle}>Bem vindo ao app do Profissional</H3>
          <Text style={style.messageText}>
            Receba e selecione os serviços que deseja, criando assim sua própria
            agenda!
          </Text>
        </Row>
        <Row style={style.action}>
          <Button block primary rounded onPress={props.onGoSignIn}>
            <Text>Tenho uma conta</Text>
          </Button>
          <Button block transparent onPress={props.onGoSignUp}>
            <Text>Criar Conta</Text>
          </Button>
        </Row>
      </Grid>
    </Container>
  );
};

export default InitialPresentation;
