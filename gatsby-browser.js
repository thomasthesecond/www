import './src/styles/global.css';
import './src/styles/typography.css';
import './src/styles/forms.css';
import './src/styles/search.css';
import './src/styles/tables.css';
import './src/styles/print.css';

export function onRouteUpdate({ location, prevLocation }) {
  // Re-send Rollworks pixel on pushstate navigation changes
  if (prevLocation && window.__adroll) {
    window.__adroll.record_user({});
  }
};
