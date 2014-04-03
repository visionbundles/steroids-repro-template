document.addEventListener "deviceready", ->
  console.log "1. window.deviceReady. navigator.camera"+JSON.stringify(navigator.camera)
  window.requestFileSystem(
    LocalFileSystem.PERSISTENT,
    50000*1024,
    (fs)->
      console.log "2. window.requestFileSystem, FS= ", fs
    (ev)->
      console.log "3. Error: requestFileSystem failed. ", ev.target.error.code
  )