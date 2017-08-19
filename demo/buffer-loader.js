function BufferLoader(context, url, callback) {
  this.context = context
  this.url = url
  this.onload = callback
  this.buffer = null
  this.loadCount = 0
}

BufferLoader.prototype.loadBuffer = function(url, index) {
  // Load buffer asynchronously
  var request = new XMLHttpRequest()
  request.open('GET', url, true)
  request.responseType = 'arraybuffer'

  var loader = this

  request.onload = function() {
    // Asynchronously decode the audio file data in request.response
    loader.context.decodeAudioData(
      request.response,
      function(buffer) {
        if (!buffer) {
          alert('error decoding file data: ' + url)
          return
        }
        loader.buffer = buffer
        loader.onload(loader.buffer)
      },
      function(error) {
        console.error('decodeAudioData error', error)
      }
    )
  }

  request.onerror = function() {
    alert('BufferLoader: XHR error')
  }

  request.send()
}

BufferLoader.prototype.load = function() {
  this.loadBuffer(this.url)
}
