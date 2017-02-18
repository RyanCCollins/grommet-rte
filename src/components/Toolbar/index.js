// @flow
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import LinkIcon from 'grommet/components/icons/base/Link';
import MenuIcon from 'grommet/components/icons/base/Menu';
import ImageIcon from 'grommet/components/icons/base/Image';
import './index.css';

type ToolbarProps = {
  onClickItem: Function,
}

// eslint-disable-next-line react/prefer-stateless-function
export default class Toolbar extends Component {
  props: ToolbarProps;
  render() {
    return (
      <Box className="grommetux-rte__toolbar" flex>
        <Menu
          className="grommetux-rte__toolbar--menu"
          direction="row"
          inline
          pad={{ horizontal: 'large' }}
          justify="between"
          colorIndex="light-2"
          responsive={false}
        >
          <Button
            plain
            id="bold"
            style={{ fontStyle: 'bold' }}
            label="B"
            onClick={this.props.onClickItem}
          />
          <Button
            plain
            id="italic"
            style={{ fontStyle: 'italic' }}
            label="I"
            onClick={this.props.onClickItem}
          />
          <Button
            plain
            id="link"
            icon={<LinkIcon id="link" />}
            onClick={this.props.onClickItem}
          />
          <Button
            plain
            id="list"
            icon={<MenuIcon id="list" />}
            onClick={this.props.onClickItem}
          />
          <Button
            plain
            id="header"
            style={{ fontStyle: 'bold' }}
            label="T"
            onClick={this.props.onClickItem}
          />
          <Button
            plain
            id="quote"
            style={{ fontStyle: 'italic' }}
            label='"'
            onClick={this.props.onClickItem}
          />
          <Button
            plain
            id="image"
            reverse
            icon={<ImageIcon id="image" />}
            onClick={this.props.onClickItem}
          />
        </Menu>
      </Box>
    );
  }
}