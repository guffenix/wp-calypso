/** @format */

/**
 * Internal dependencies
 */
import { getPreference } from 'state/preferences/selectors';

/**
 * Returns the number of times the current user dismissed the nudge
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId The Id of the site
 * @return {Number}  Count  the number of times the nudge has been dismissed
 */
const getGoogleMyBusinessStatsNudgeDismissCount = ( state, siteId ) => {
	const preference = getPreference( state, 'google-my-business-dismissible-nudge' ) || {};
	const sitePreference = preference[ siteId ] || [];
	return sitePreference.filter( event => 'dismiss' === event.type ).length;
};

export default getGoogleMyBusinessStatsNudgeDismissCount;
