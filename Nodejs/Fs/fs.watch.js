// fs.watch(filename[, options][, listener])
// Watch for changes on filename, where filename is either a file or a directory.

fs.watch('somedir', (eventType, filename) => {
  console.log(`event type is: ${eventType}`);
  if (filename) {
    console.log(`filename provided: ${filename}`);
  } else {
    console.log('filename not provided');
  }
});