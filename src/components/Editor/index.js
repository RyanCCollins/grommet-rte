// @flow
import React from 'react';
import Box from 'grommet/components/Box';
import { Editor as DraftJSEditor, EditorState, RichUtils } from 'draft-js';
import { Toolbar } from '../';
import './index.css';
import './draft.css';

type ButtonType = 'bold' | 'italic' | 'link' | 'list' | 'header' | 'quote' | 'image';

// eslint-disable-next-line react/prefer-stateless-function
export default class Editor extends React.Component {
  constructor() {
    super();
    (this:any).handleClick = this.handleClick.bind(this);
    (this:any).handleChange = this.handleChange.bind(this);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }
  state: {
    editorState: {},
  }
  handleClick({ target }: any) {
    const type: ButtonType = target.id;
    if (type === 'bold' || type === 'italic') {
      this.handleChange(
        RichUtils.toggleInlineStyle(this.state.editorState, type.toUpperCase()),
      );
    } else {
      this.handleChange(
        RichUtils.toggleBlockType(
          this.state.editorState,
          type.toUpperCase(),
        ),
      );
    }
  }
  handleChange(editorState: any) {
    this.setState({
      editorState,
    });
  }
  render() {
    return (
      <Box flex className="grommetux-rte__editor" colorIndex="light-1">
        <Toolbar onClickItem={this.handleClick} />
        <Box pad="medium" size={{ width: 'medium', height: 'small' }}>
          <DraftJSEditor
            editorState={this.state.editorState}
            onChange={this.handleChange}
          />
        </Box>
      </Box>
    );
  }
}