// @flow
import React from 'react';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import { Toolbar } from '../';
import { transformText, getSelectedText } from '../../utils';
import './index.css';

type ButtonType = 'bold' | 'italic' | 'link' | 'list' | 'header' | 'quote' | 'image';

// eslint-disable-next-line react/prefer-stateless-function
export default class Editor extends React.Component {
  constructor() {
    super();
    (this:any).handleClick = this.handleClick.bind(this);
    (this:any).handleInput = this.handleInput.bind(this);
    this.state = {
      textInput: '',
    };
  }
  state: {
    textInput: string,
  }
  handleClick(event: any) {
    const id: ButtonType = event.target.id;
    const selectedText = getSelectedText();
    const textInput = this.state.textInput.replace(selectedText, transformText(id, selectedText));
    this.setState({
      textInput,
    });
  }
  handleInput(e: any) {
    this.setState({
      textInput: e.target.value,
    });
  }
  render() {
    return (
      <Box flex className="grommetux-rte__editor" colorIndex="light-1">
        <Toolbar onClickItem={this.handleClick} />
        <Form pad="medium">
          <textarea
            value={this.state.textInput}
            onChange={this.handleInput}
            name="text-input"
            cols="30"
            rows="3"
            placeholder="Start typing"
            className="grommetux-rte__editor--text-area"
          />
        </Form>
      </Box>
    );
  }
}