import React from 'react'

export default class FileInput extends React.Component {
  fileInput = React.createRef()

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.fileInput)
  }

  render() {
    return (
      <form>
        <label>Upload File:</label>
        <input type="file" ref={this.fileInput} />
        <br />
        <button
          type="submit"
          onClick={e => {
            this.handleSubmit(e)
          }}
        >
          Submit
        </button>
      </form>
    )
  }
}
