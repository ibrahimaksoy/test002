sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("test001.test001.controller.View1", {
		onInit: function () {
			var data = {
				"Products": [
					{
						"Product": "Pineapple",
						"Price": "20",
					}, {
						"Product": "Orange",
						"Price": "10",
					}, {
						"Product": "Grape",
						"Price": "15",
				    }
				    ]
			};
			var oModel = new sap.ui.model.json.JSONModel();

			oModel.setData(data);
			this.getView().setModel(oModel);
		}
	});
});