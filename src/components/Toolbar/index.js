// @flow
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import LinkIcon from 'grommet/components/icons/base/Link';
import './index.css';

export type ToolbarButtonId = 'bold' | 'italic' | 'quote' | 'link' | 'header-2' | 'header-1';

type ToolbarProps = {
  editorState: any,
  onClickItem: Function,
}

type ToolbarButtonType = {
  icon?: any,
  label?: string,
  id: ToolbarButtonId,
  style?: ?{},
};

const TOOLBAR_BUTTONS: ToolbarButtonType[] = [
  {
    id: 'bold',
    label: 'B',
    style: { fontStyle: 'bold' },
  },
  {
    id: 'italic',
    label: 'I',
    style: { fontStyle: 'italic' },
  },
  {
    id: 'quote',
    label: '"',
    style: { fontStyle: 'bold' },
  },
  {
    id: 'header-1',
    label: 'H1',
    style: { fontStyle: 'bold' },
  },
  {
    id: 'header-2',
    label: 'H2',
    style: { fontStyle: 'bold' },
  },
  {
    id: 'link',
    icon: <LinkIcon />,
  },
];

// eslint-disable-next-line react/prefer-stateless-function
export default class Toolbar extends Component {
  props: ToolbarProps;
  render() {
    const blockType = this.props.editorState
      .getCurrentContent()
      .getBlockForKey();
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
          {TOOLBAR_BUTTONS.map(item =>
            <Button
              key={item.id}
              {...item}
              style={{ ...item.style, active: blockType === item.id }}
              plain
              onClick={() => this.props.onClickItem(item.id)}
            />,
          )}
        </Menu>
      </Box>
    );
  }
}