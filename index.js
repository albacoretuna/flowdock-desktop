const nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
const options = {
  name: 'Flowdock',
  targetUrl: 'http://flowdock.com/app/',
  platform: '', // defaults to the current system
  arch: '', // defaults to the current system
  version: '1.0.0',
  out: '.',
  overwrite: false,
  asar: false, // see conceal
  icon: 'flowdock.png',
  counter: false,
  width: 1280,
  height: 800,
  showMenuBar: false,
  fastQuit: false,
  userAgent: '', // will infer a default for your current system
  ignoreCertificate: false,
  insecure: false,
  honest: false,
  zoom: 1.0
};

nativefier(options, function(error, appPath) {
  if (error) {
    console.error(error);
    return;
  }
  console.log('App has been nativefied to', appPath);
});
