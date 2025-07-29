define("UsrSampleManagment_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "move",
				"name": "EntityStageProgressBar_tddnzmw",
				"parentName": "GridContainer_o9hzqgq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "EntityStageProgressBar_tddnzmw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "Priority"
			},
			{
				"operation": "remove",
				"name": "addRecord_g24p5pf"
			},
			{
				"operation": "merge",
				"name": "SampleStatus",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "UsrName",
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "remove",
				"name": "CustomerName"
			},
			{
				"operation": "remove",
				"name": "addRecord_j3mdpcj"
			},
			{
				"operation": "remove",
				"name": "CustomerCode"
			},
			{
				"operation": "remove",
				"name": "RequestedBy"
			},
			{
				"operation": "remove",
				"name": "addRecord_jcxglz0"
			},
			{
				"operation": "remove",
				"name": "RequestedByEmail"
			},
			{
				"operation": "remove",
				"name": "RequestedDate"
			},
			{
				"operation": "remove",
				"name": "CourierName"
			},
			{
				"operation": "remove",
				"name": "ExpectedDeliveryDate",
				"properties": [
					"layoutConfig"
				]
			},
			{
				"operation": "merge",
				"name": "ExpectedDeliveryDate",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "move",
				"name": "ExpectedDeliveryDate",
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "remove",
				"name": "ShipmentDate"
			},
			{
				"operation": "remove",
				"name": "SampleType",
				"properties": [
					"layoutConfig"
				]
			},
			{
				"operation": "merge",
				"name": "SampleType",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "move",
				"name": "SampleType",
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "remove",
				"name": "TrackingNumber"
			},
			{
				"operation": "remove",
				"name": "TransportMode"
			},
			{
				"operation": "remove",
				"name": "addRecord_qcspl5k"
			},
			{
				"operation": "merge",
				"name": "GridContainer_111np4a",
				"values": {
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "small",
						"left": "none"
					}
				}
			},
			{
				"operation": "merge",
				"name": "Notes",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "Notes",
				"parentName": "GridContainer_ukzh4f8",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "GridContainer_tyes3bl",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "GridDetail_8fj3tal",
				"values": {
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 15
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					}
				}
			},
			{
				"operation": "insert",
				"name": "GridContainer_j0lcxs8",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "small",
						"rowGap": "small"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "none",
						"left": "small"
					},
					"alignItems": "stretch"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_o9hzqgq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_j0lcxs8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_oz8eu22",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_96mku7g",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_96mku7g_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GridContainer_oz8eu22",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AccountCompactProfile_sowcn3g",
				"values": {
					"type": "crt.AccountCompactProfile",
					"readonly": true,
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": true,
					"referenceColumn": "$PDS_UsrCustomerName_fpcu0da"
				},
				"parentName": "GridContainer_oz8eu22",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_jxm8q35",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrCustomerCode_kcygyp3",
					"labelPosition": "auto",
					"control": "$PDS_UsrCustomerCode_kcygyp3",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_oz8eu22",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_pvoj9x8",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_aqt5s69",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_pvoj9x8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_aa52qxl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_aa52qxl_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GridContainer_aqt5s69",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactCompactProfile_547bvhl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ContactCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$Parameter_en2ei3y"
				},
				"parentName": "GridContainer_aqt5s69",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EmailInput_2l998g7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.PDS_UsrContactEmail_2681a4w",
					"control": "$PDS_UsrContactEmail_2681a4w",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(EmailInput_2l998g7_caption)#",
					"readonly": true
				},
				"parentName": "GridContainer_aqt5s69",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PhoneInput_fupo38u",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.PDS_UsrContactMobilePhone_a141whu",
					"control": "$PDS_UsrContactMobilePhone_a141whu",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(PhoneInput_fupo38u_caption)#",
					"readonly": true
				},
				"parentName": "GridContainer_aqt5s69",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_0ggxf7l",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrRequestedBy_uk0f9tg",
					"labelPosition": "auto",
					"control": "$PDS_UsrRequestedBy_uk0f9tg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_o8lcwyw",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_o8lcwyw_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_0ggxf7l",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_p0o3amf",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrRequestedByEmail_vvlr1rx",
					"labelPosition": "auto",
					"control": "$PDS_UsrRequestedByEmail_vvlr1rx",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_0oo76l6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "small",
						"rowGap": "small"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "extra-small",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabPanel_8joryjz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 8
					},
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "partiallyColored",
					"bodyBackgroundColor": "#FFFFFF",
					"tabTitleColor": "#757575",
					"selectedTabTitleColor": "#004FD5",
					"headerBackgroundColor": "crt-color-primary-grey",
					"underlineSelectedTabColor": "crt-color-red",
					"fitContent": true,
					"visible": true,
					"stretch": true
				},
				"parentName": "GridContainer_111np4a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabTransferred",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabTransferred_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_8joryjz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_6x822yj",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "TabTransferred",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_tyo4dsd",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 4
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_6x822yj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_ue8lh2y",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_TransferredDate_5p2x23a",
					"labelPosition": "above",
					"control": "$PDS_TransferredDate_5p2x23a",
					"pickerType": "datetime",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_tyo4dsd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabShipped",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabShipped_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_8joryjz",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_j0x6jm8",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabShipped",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_p5ednpo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "GridContainer_j0x6jm8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_n19udip",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "FlexContainer_p5ednpo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_5zejhm8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrShipmentMethod_k1fku2m",
					"labelPosition": "above",
					"control": "$PDS_UsrShipmentMethod_k1fku2m",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_n19udip",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_pm51tz4",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.PDS_UsrShipmentDate_b5owkor",
					"labelPosition": "above",
					"control": "$PDS_UsrShipmentDate_b5owkor",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_n19udip",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_ukzh4f8",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "FlexContainer_p5ednpo",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_hs7n9fx",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrTrackingNumber_xw7atb0",
					"labelPosition": "above",
					"control": "$PDS_UsrTrackingNumber_xw7atb0",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_ukzh4f8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_5vpggeq",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrCarrierServiceClass_582lk6n",
					"labelPosition": "above",
					"control": "$PDS_UsrCarrierServiceClass_582lk6n",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_ukzh4f8",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabBackOrder",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabBackOrder_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_8joryjz",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_bce0o39",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "TabBackOrder",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_y7mejae",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 4
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_bce0o39",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_p6eaiuj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_BackOrderDate_sdkgtyv",
					"labelPosition": "above",
					"control": "$PDS_BackOrderDate_sdkgtyv",
					"pickerType": "datetime",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_y7mejae",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabCompleted",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabCompleted_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_8joryjz",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_tg7nynl",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabCompleted",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_ubdt16o",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 4
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_tg7nynl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_5ul7evv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_CompletedOn_m3vanvt",
					"labelPosition": "above",
					"control": "$PDS_CompletedOn_m3vanvt",
					"pickerType": "datetime",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_ubdt16o",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabCanceled",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabCanceled_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_8joryjz",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_urely2l",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "TabCanceled",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_hrjj1ix",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 5
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_urely2l",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_h6hlj6w",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_Canceledon_dp4swcf",
					"labelPosition": "above",
					"control": "$PDS_Canceledon_dp4swcf",
					"pickerType": "datetime",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_hrjj1ix",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_plncrs3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_ReasonforCancellation_3vizdge",
					"labelPosition": "above",
					"control": "$PDS_ReasonforCancellation_3vizdge",
					"multiline": true,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_hrjj1ix",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabRejected",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabRejected_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_8joryjz",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_za5d5op",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabRejected",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_c237d48",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_RevisedOn_rr294i7",
					"labelPosition": "above",
					"control": "$PDS_RevisedOn_rr294i7",
					"pickerType": "datetime",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_za5d5op",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_h0b34c6",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrRevisionNotes_1kyz5e8",
					"labelPosition": "above",
					"control": "$PDS_UsrRevisionNotes_1kyz5e8",
					"multiline": true,
					"visible": true,
					"readonly": false,
					"placeholder": "#ResourceString(Input_h0b34c6_placeholder)#",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_za5d5op",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_UsrRevisionNotes_1kyz5e8": {
						"modelConfig": {
							"path": "PDS.UsrRevisionNotes"
						}
					},
					"PDS_TransferredDate_5p2x23a": {
						"modelConfig": {
							"path": "PDS.TransferredDate"
						}
					},
					"PDS_RevisedOn_rr294i7": {
						"modelConfig": {
							"path": "PDS.RevisedOn"
						}
					},
					"PDS_Canceledon_dp4swcf": {
						"modelConfig": {
							"path": "PDS.Canceledon"
						}
					},
					"PDS_ReasonforCancellation_3vizdge": {
						"modelConfig": {
							"path": "PDS.ReasonforCancellation"
						}
					},
					"PDS_BackOrderDate_sdkgtyv": {
						"modelConfig": {
							"path": "PDS.BackOrderDate"
						}
					},
					"PDS_CompletedOn_m3vanvt": {
						"modelConfig": {
							"path": "PDS.CompletedOn"
						}
					},
					"PDS_UsrShipmentMethod_k1fku2m": {
						"modelConfig": {
							"path": "PDS.UsrShipmentMethod"
						}
					},
					"PDS_UsrShipmentDate_b5owkor": {
						"modelConfig": {
							"path": "PDS.UsrShipmentDate"
						}
					},
					"PDS_UsrTrackingNumber_xw7atb0": {
						"modelConfig": {
							"path": "PDS.UsrTrackingNumber"
						}
					},
					"PDS_UsrCarrierServiceClass_582lk6n": {
						"modelConfig": {
							"path": "PDS.UsrCarrierServiceClass"
						}
					},
					"PDS_UsrCustomerCode_kcygyp3": {
						"modelConfig": {
							"path": "PDS.UsrCustomerCode"
						}
					},
					"PDS_UsrRequestedBy_uk0f9tg": {
						"modelConfig": {
							"path": "PDS.UsrRequestedBy"
						}
					},
					"PDS_UsrRequestedByEmail_vvlr1rx": {
						"modelConfig": {
							"path": "PDS.UsrRequestedByEmail"
						}
					},
					"Parameter_en2ei3y": {
						"modelConfig": {
							"path": "PDS.UsrContact"
						}
					},
					"PDS_UsrContactEmail_2681a4w": {
						"modelConfig": {
							"path": "PDS.UsrContactEmail_2681a4w"
						}
					},
					"PDS_UsrContactMobilePhone_a141whu": {
						"modelConfig": {
							"path": "PDS.UsrContactMobilePhone_a141whu"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config",
					"attributes"
				],
				"values": {
					"UsrContactEmail_2681a4w": {
						"path": "UsrContact.Email",
						"type": "ForwardReference"
					},
					"UsrContactMobilePhone_a141whu": {
						"path": "UsrContact.MobilePhone",
						"type": "ForwardReference"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
{
    request: "crt.HandleViewModelAttributeChangeRequest",
    handler: async (request, next) => {
        // Strategy 1: Check if the specific attribute we care about changed
		
        const changedAttribute = request.attributeName;
        if (changedAttribute !== "PDS_UsrSampleStatus_f5ybjm0") {
            return next?.handle(request);
        }

        // Strategy 2: Add a flag to prevent recursive calls
        if (request.$context._processingStatusChange) {
			//debugger;
            return next?.handle(request);
			
        }
        
        try {
            request.$context._processingStatusChange = true;
            
            var status = await request.$context.PDS_UsrSampleStatus_f5ybjm0;
            var statusdisplayvalue = status.displayValue || "";
            var currentDateTime = new Date();
            
            // Strategy 3: Check if this is first load or status actually changed
            const previousStatus = request.$context._previousStatus;
            const isFirstLoad = previousStatus === undefined;
            
            if (!isFirstLoad && previousStatus === statusdisplayvalue) {
                return next?.handle(request);
            }
            
            // Store current status for next comparison
            request.$context._previousStatus = statusdisplayvalue;
            
            // Your existing logic
            if (statusdisplayvalue == "Transferred") {
                request.$context.TabPanel_8joryjz_SelectedTabIndex_Profile = 0;
                // Only set date if it's not already filled
				const trans = await request.$context.PDS_TransferredDate_5p2x23a;
                if ( !trans || trans == null) {
                    request.$context.PDS_TransferredDate_5p2x23a = currentDateTime;
                }
            }
            else if (statusdisplayvalue == "Shipped") {
                request.$context.TabPanel_8joryjz_SelectedTabIndex_Profile = 1;
				const shipp = await   request.$context.PDS_UsrShipmentDate_b5owkor;
                if ( !shipp || shipp == null) {
                     request.$context.PDS_UsrShipmentDate_b5owkor = currentDateTime;
                }
            }
            else if (statusdisplayvalue == "Back Order") {
                request.$context.TabPanel_8joryjz_SelectedTabIndex_Profile = 2;
				const back = await  request.$context.PDS_BackOrderDate_sdkgtyv;
                if ( !back || back == null) {
                    request.$context.PDS_BackOrderDate_sdkgtyv = currentDateTime;
                }
            }
            else if (statusdisplayvalue == "Completed") {
                request.$context.TabPanel_8joryjz_SelectedTabIndex_Profile = 3;
				const Comp = await  request.$context.PDS_CompletedOn_m3vanvt;
                if ( !Comp || Comp == null) {
                    request.$context.PDS_CompletedOn_m3vanvt = currentDateTime;
                }
            
            }
            else if (statusdisplayvalue == "Canceled") {
                request.$context.TabPanel_8joryjz_SelectedTabIndex_Profile = 4;
				const Canc = await  request.$context.PDS_Canceledon_dp4swcf;
                if ( !Canc || Canc == null) {
                    request.$context.PDS_Canceledon_dp4swcf = currentDateTime;
                }
            
            }
            else if (statusdisplayvalue == "Rejected") {
                request.$context.TabPanel_8joryjz_SelectedTabIndex_Profile = 5;
	            const Rej = await  request.$context.PDS_RevisedOn_rr294i7;
                if ( !Rej || Rej == null) {
                    request.$context.PDS_RevisedOn_rr294i7 = currentDateTime;
                }
            
            }
            
        } finally {
            // Always clear the flag
            request.$context._processingStatusChange = false;
        }
        
        return next?.handle(request);
    }
}		
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});