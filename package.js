var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-reveal',
  summary : 'Semantic UI - Reveal (official): Single component release of reveal',
  version : '1.9.0',
  git     : 'git://github.com/Semantic-Org/UI-Reveal.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
