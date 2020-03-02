/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"test001/test001/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});