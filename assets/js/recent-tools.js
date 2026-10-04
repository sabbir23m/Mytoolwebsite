/**
 * recent-tools.js
 * Manages and displays recently used tools on the homepage.
 */
(function () {
  'use strict';

  var RECENTS_KEY = 'html_tools_recents_v1';

  function getRecents() {
    try {
      var stored = localStorage.getItem(RECENTS_KEY);
      if (stored) {
        var parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : [];
      }
    } catch (e) {}
    return [];
  }

  // Expose helper globally
  window.WebUtilsRecents = {
    getRecents: getRecents,
    clearRecents: function () {
      try {
        localStorage.removeItem(RECENTS_KEY);
      } catch (e) {}
    }
  };
})();
