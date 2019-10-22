/*
import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

import defaultAvatar from './listOfUsers.svg';


class Avatar extends React.Component {
  static propTypes = {
    previewLogoUrl: PropTypes.string,
    mimeType: PropTypes.string,
    maxWeight: PropTypes.number,
    // redux-form porps
    handleSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    mimeType: "image/jpeg, image/png",
    maxWeight: 1024,
  }

  validateImageWeight = imageFile => {
    if (imageFile && imageFile.size) {
      // Get image size in kilobytes
      const imageFileKb = imageFile.size / 1024;
      const { maxWeight } = this.props;

      if (imageFileKb > maxWeight) {
        return `Image size must be less or equal to ${maxWeight}kb`;
      }
    }
  };

  handlePreview = imageUrl => {
    const previewImageDom = document.querySelector(".preview-image");
    previewImageDom.src = imageUrl;
  };

  handleChange = (event, input) => {
    event.preventDefault();
    const imageFile = event.target.files[0];
    if (imageFile) {
      const localImageUrl = URL.createObjectURL(imageFile);
      const imageObject = new window.Image();

      imageObject.onload = () => {
        imageFile.width = imageObject.naturalWidth;
        imageFile.height = imageObject.naturalHeight;
        input.onChange(imageFile);
        URL.revokeObjectURL(imageFile);
      };
      imageObject.src = localImageUrl;
      this.handlePreview(localImageUrl);
    }
  };

  renderFileInput = ({ input, type, meta }) => {
	const { mimeType } = this.props;

    return (
      <div>
        <input
          name={input.name}
          type={type}
          accept={mimeType}
          onChange={event => this.handleChange(event, input)}
        />
        {meta && meta.invalid && meta.error && (
        <div>   
          {' '}
          {meta.error}
          {' '}
        </div>
	   )}
      </div>
    );
  };

  render() {
    const {
      previewLogoUrl,
      maxWeight,
	  handleSubmit,
    } = this.props;
    return (
      <div>
        <img
          src={!previewLogoUrl ? defaultAvatar : previewLogoUrl}
          alt="preview"
          className="preview-image"
          style={{   width: '15em',	height: '15em',	border: '3px solid #5E97F3', borderRadius: '50%', objectFit: "cover" }}
        />
        <Field
          name="image"
          type="file"
          validate={this.validateImageWeight}
          component={this.renderFileInput}
        />
      </div>
    );
  }
}

export default Avatar;
*/

import React from 'react';
import defaultAvatar from './listOfUsers.svg';
import addAvatar from './add.svg';
import styles from './Avatar.module.css';

class Avatar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  render() {
    return (
      <div className={styles.avatar}>
        <div className={styles.labelAvatar}>
          <input type="file" onChange={this.handleChange} className={styles.inputfile} />
          <img src={addAvatar} />
          <label htmlFor="file">

add avatar
          </label>
        </div>
        <img
          src={!this.state.file ? defaultAvatar : this.state.file} 
          style={{   width: '15em',	height: '15em',	border: '3px solid #5E97F3', borderRadius: '50%', objectFit: "cover" }}
        />
      </div>
    );
  }
}


export default Avatar;
