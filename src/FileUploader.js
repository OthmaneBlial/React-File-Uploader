import React from 'react';
import './FileUploader.css';

class FileUploader extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			files: [],
			imagePreviewUrls: [],
			filesNames: [],
		}
	}

	handleBigLength = (string) => {
		let extention = string.split('.').slice(-1)[0];
		if (string.split('').length > 30) {
			return string.split('').slice(0,30).concat('...').concat('JPG').join('');
		} else {
			return string;
		}


	}

	handleFileReaderOnLoad = (reader, file, preveiw, fileName) => {
		reader.onloadend = () => {
			preveiw = (preveiw === '') ? reader.result : preveiw;
		  this.setState({
		    files: [...this.state.files, file],
		    imagePreviewUrls: [...this.state.imagePreviewUrls, preveiw],
		    filesNames: [...this.state.filesNames, this.handleBigLength(fileName)]
		  });
		}

		reader.readAsDataURL(file)

		this.props.getFiles([...this.state.files, file]);
	}

	handleImageChange = (e) => {
	    e.preventDefault();

	    let picturesExtentions = ['jpg', 'jpeg', 'png'];

	    try {

	       let reader = new FileReader();
	       let file = e.target.files[0];
	       let fileName = e.target.files[0].name || '';
	       let extention = (fileName.split('.').slice(-1)[0]).toLowerCase();
	       let preveiw = '';

	       console.log(e.target.files[0])

	       if (picturesExtentions.includes(extention)) {

	       	this.handleFileReaderOnLoad(reader, file, '', fileName);
	       	
	       } else if (extention === 'pdf') {
	       	
	       	this.handleFileReaderOnLoad(reader, file, 'pdfFile.png', fileName);

	       } else if (extention === 'doc' || extention === 'docx') {

	       	this.handleFileReaderOnLoad(reader, file, 'docFile.png', fileName);

	       } else if (extention === 'mp4' || extention === 'avi' || extention === 'mkv' || extention == 'webm') {
	       	
	       	this.handleFileReaderOnLoad(reader, file, 'vidFile.png', fileName);
	       }
	    }
	    catch (e) {
	       
	       console.log(e);

	    }

	    



	  }

	render() {
		return(
			<div className='file'>
				<div className="file-upload">
				    <input type='file' id='file' name='file' className='file-input' onChange={this.handleImageChange}  />
				    <label htmlFor='file' className='file-label'><span><i className='ion-ios-cloud-upload-outline'></i></span>Choose a file</label>
				</div>
				<div className='uploaded-files'>
				    {this.state.imagePreviewUrls.map((url, index) => {
				     return <a className='image-preview' key={ index }>
				     <img src={url} width='150' height='120' />
				     <span>{this.state.filesNames[index]}</span>
				     </a>;
				   })}
				</div>
			</div>
			);
	}
}

export default FileUploader;
