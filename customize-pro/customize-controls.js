( function( api ) {
	// Extends our custom "personal-club" section.
	api.sectionConstructor['personal-club'] = api.Section.extend( {
		// No events for this type of section.
		attachEvents: function () {},
		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );
} )( wp.customize );