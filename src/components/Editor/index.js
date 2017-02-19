// @flow
import React from 'react';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import Markdown from 'grommet/components/Markdown';
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
    (this:any).handleSelect = this.handleSelect.bind(this);
    this.state = {
      textInput: '',
      selected: '',
    };
  }
  state: {
    textInput: string,
    selected: string,
  }
  handleSelect() {
    const selected = getSelectedText();
    this.setState({
      selected,
    });
  }
  handleClick(event: any) {
    const id: ButtonType = event.target.id;
    const selectedText = this.state.selected;
    const transformed = transformText(id, selectedText);
    const textInput = this.state.textInput.replace(selectedText, transformed);
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
            onSelect={this.handleSelect}
            name="text-input"
            cols="30"
            rows="5"
            placeholder="Start typing"
            className="grommetux-rte__editor--text-area"
          />
        </Form>
        <Box style={{ height: 150, overflow: 'scroll' }} flex colorIndex="light-2" pad="medium">
          <Markdown content={this.state.textInput} />
        </Box>
      </Box>
    );
  }
}