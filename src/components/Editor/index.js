// @flow
import React from 'react';
import Box from 'grommet/components/Box';
import { Editor as DraftJSEditor, EditorState, RichUtils } from 'draft-js';
import { Toolbar } from '../';
import type { ToolbarButtonId } from '../Toolbar';
import './index.css';
import './draft.css';

function getBlockStyle(type: ToolbarButtonId) {
  switch (type) {
    case 'quote':
      return 'blockquote';
    case 'header-1':
      return 'header-one';
    case 'header-2':
      return 'header-two';
    default: return '';
  }
}

// eslint-disable-next-line react/prefer-stateless-function
export default class Editor extends React.Component {
  constructor() {
    super();
    (this:any).handleClick = this.handleClick.bind(this);
    (this:any).handleChange = this.handleChange.bind(this);
    (this:any).handleKeyCommand = this.handleKeyCommand.bind(this);
    (this:any).toggleBlockType = this.toggleBlockType.bind(this);
    (this:any).toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }
  state: {
    editorState: {},
  }
  handleClick(type: ToolbarButtonId) {
    if (type === 'bold' || type === 'italic') {
      this.toggleInlineStyle(type);
    } else {
      this.toggleBlockType(type);
    }
  }
  handleChange(editorState: any) {
    this.setState({
      editorState,
    });
  }
  handleKeyCommand(command: any) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.handleChange(newState);
      return true;
    }
    return false;
  }
  toggleInlineStyle(style: ToolbarButtonId) {
    this.handleChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        style.toUpperCase(),
      ),
    );
  }
  toggleBlockType(type: ToolbarButtonId) {
    this.handleChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        getBlockStyle(type),
      ),
    );
  }
  render() {
    return (
      <Box flex className="grommetux-rte__editor" colorIndex="light-1">
        <Toolbar
          editorState={this.state.editorState}
          onClickItem={this.handleClick}
        />
        <Box pad="medium" size={{ width: 'medium', height: 'small' }}>
          <DraftJSEditor
            handleKeyCommand={this.handleKeyCommand}
            editorState={this.state.editorState}
            onChange={this.handleChange}
          />
        </Box>
      </Box>
    );
  }
}