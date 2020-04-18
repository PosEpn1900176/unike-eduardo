import React, { useState } from 'react';
import { Header, Item, Icon, Input } from 'native-base';
import styles from './styles';

const HeaderSeach = ({ onChangeText = () => {} }) => {
  const [text, setText] = useState('');

  const onChange = value => {
    setText(value);
    onChangeText(value);
  };

  return (
    <Header searchBar transparent>
      <Item style={styles.item}>
        <Icon name="ios-search" />
        <Input placeholder="Search" value={text} onChangeText={onChange} />
        <Icon name="close" onPress={() => onChange('')} />
      </Item>
    </Header>
  );
};
const HeaderSignupPresentation = props => {
  return <>{props.search ? <HeaderSeach {...props} /> : null}</>;
};

export default HeaderSignupPresentation;
