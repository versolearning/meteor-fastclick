## Modified for Percolate Studio

Fixes an issue in fastclick where `needclick` is ignored.  Enables a fix for https://github.com/percolatestudio/verso-web/issues/961 where select elements losing focus. Once we can verify that a fix is merged by MDG, we can deprecate this package again.

The root issue is documented here: https://github.com/ftlabs/fastclick/issues/268

