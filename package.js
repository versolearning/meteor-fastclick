Package.describe({
  summary: "fastclick repackaged for Meteor"
});

Package.on_use(function (api, where) {
  api.add_files('lib/fastclick.js', 'client');
});
