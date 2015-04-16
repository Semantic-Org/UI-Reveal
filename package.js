
Package.describe({
  name    : 'semantic:ui-reveal',
  summary : 'Semantic UI - Reveal: Single component release',
  version : '1.12.0',
  git     : 'git://github.com/Semantic-Org/UI-Reveal.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'reveal.css'
  ], 'client');
});
