import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import {orange500, blue500} from 'material-ui/styles/colors';



export default class DialogComponent extends Component {

  state = {
    title: '',
    desription: '',
  }

  static defaultProps = {
    defaultValue: ""
  }

  handleEditItems = () => {
    const { title, description = "" } = this.state;
    const { keyEditedTask } = this.props;
    this.props.onEdit({ title, description, keyEditedTask });
    this.props.onClose();
    this.handleClearState();
  }

  handleInputChangeTitle = (event) => {
    const { value = '' } = event.target;
    this.setState({ title: value });
  }
  handleInputChangeDescription = (event) => {
    const { value = '' } = event.target;
    this.setState({ description: value });
  }

  handleClearState = () => {
    return this.setState(
        { 
        title: '',
        description:''
    }
);
  }

  componentWillReceiveProps(nextProps) {
   if (nextProps.open && nextProps.defaultValueTitle) {
      this.setState(
          { 
          title: nextProps.defaultValueTitle,
          description:  nextProps.defaultValueDescription
        }
        );
    }
  }

  render() {
    const { title, description } = this.state;
    const { open, defaultValueTitle, defaultValueDescription } = this.props;
   
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={() => {
          this.handleClearState();
          this.props.onClose();
        }}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={false}
        onClick={this.handleEditItems}
        disabled={!this.state.title.length}
      />
    ];

    return (
      <Dialog
        open={open}
        aria-labelledby="form-dialog-title"
        actions={actions}
        title="Edit Your Task"
        modal={false}
        onRequestClose={this.props.onClose}
      >
        <TextField
          autoFocus
          hintText="Your Task"
          value={ title }
          fullWidth
          onChange={ this.handleInputChangeTitle }
          errorText={ !this.state.title.length?"This field is required":false }
        />
        <TextField
          autoFocus
          hintText="Your Task"
          value={ description }
          fullWidth
          onChange={ this.handleInputChangeDescription }
          multiLine={ true }    
        />
      </Dialog>
    )
  }
}
