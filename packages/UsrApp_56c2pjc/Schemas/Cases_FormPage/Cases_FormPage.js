define("Cases_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "ServiceItem",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Case_xjnot7r"
			},
			{
				"operation": "merge",
				"name": "EmailComposer",
				"values": {
					"bindingColumns": [
						{
							"activityColumnName": "Contact",
							"formAttributeName": "LookupAttribute_ctwt6pv"
						}
					]
				}
			},
			{
				"operation": "remove",
				"name": "CaseLifecycleSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "CaseLifecycleSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "CaseLifecycleSearchFilter_CaseLifecycleList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"CaseLifecycleList"
										]
									}
								]
							}
						],
						"from": [
							"CaseLifecycleSearchFilter_SearchValue",
							"CaseLifecycleSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "SubordinateCasesSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SubordinateCasesSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SubordinateCasesSearchFilter_SubordinateCasesList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"SubordinateCasesList"
										]
									}
								]
							}
						],
						"from": [
							"SubordinateCasesSearchFilter_SearchValue",
							"SubordinateCasesSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "remove",
				"name": "ActivitiesSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "ActivitiesSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ActivitiesSearchFilter_ActivitiesList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ActivitiesList"
										]
									}
								]
							}
						],
						"from": [
							"ActivitiesSearchFilter_SearchValue",
							"ActivitiesSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "TimeToFirstResponseIndicatorWidget",
				"values": {
					"config": {
						"title": "#ResourceString(TimeToFirstResponseIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "TimeToFirstResponseIndicatorWidget_51e967c7abe899a2c81e4651e1290dd2",
								"schemaName": "CaseLifecycle",
								"filters": {
									"filter": {
										"items": {
											"deb66eaf-093d-4781-a904-4d37c40e9785": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Status"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "CaseStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "New",
																"Id": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
																"Image": "",
																"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
																"displayValue": "New"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "CaseLifecycle"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "StateDurationInMinutes"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Case",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
							"entitySchemaName": "Case"
						},
						"text": {
							"template": "#ResourceString(TimeToFirstResponseIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "before-after"
						},
						"layout": {
							"color": "green"
						},
						"theme": "without-fill"
					}
				}
			},
			{
				"operation": "remove",
				"name": "KnowledgeBaseArticlesSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "KnowledgeBaseArticlesSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "KnowledgeBaseArticlesSearchFilter_KnowledgeBaseArticlesList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"KnowledgeBaseArticlesList"
										]
									}
								]
							}
						],
						"from": [
							"KnowledgeBaseArticlesSearchFilter_SearchValue",
							"KnowledgeBaseArticlesSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "insert",
				"name": "ComboBox_s5n51x0",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCategory_ratawjc",
					"labelPosition": "auto",
					"control": "$PDS_UsrCategory_ratawjc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_0ofyjr1",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_0ofyjr1_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_s5n51x0",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_2z842bp",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrSub_Category_vbo93sf",
					"labelPosition": "auto",
					"control": "$PDS_UsrSub_Category_vbo93sf",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_fur7t2q",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fur7t2q_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2z842bp",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_4tt7ggt",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrBusiness_Impact_5fs5twf",
					"labelPosition": "auto",
					"control": "$PDS_UsrBusiness_Impact_5fs5twf",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "CaseInfoFlexContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_ib6mafm",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ib6mafm_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_4tt7ggt",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Case_sj1sq1g",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "ParentCase",
					"sortedByColumn": "RegisteredOn",
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Category",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Priority",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Status",
								"columnLayout": "{\"column\": 7,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "SolutionDate",
								"columnLayout": "{\"column\": 10,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Symptoms",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 12,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Case",
						"isDefault": true
					}
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_UsrBusiness_Impact_5fs5twf": {
						"modelConfig": {
							"path": "PDS.UsrBusiness_Impact"
						}
					},
					"PDS_UsrCategory_ratawjc": {
						"modelConfig": {
							"path": "PDS.UsrCategory"
						}
					},
					"PDS_UsrSub_Category_vbo93sf": {
						"modelConfig": {
							"path": "PDS.UsrSub_Category"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"CaseLifecycleList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "CaseLifecycleSearchFilter_CaseLifecycleList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"SubordinateCasesList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "SubordinateCasesSearchFilter_SubordinateCasesList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"ActivitiesList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "ActivitiesList_PredefinedFilter"
						},
						{
							"name": "ActivitiesSearchFilter_ActivitiesList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"KnowledgeBaseArticlesList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "KnowledgeBaseArticlesList_PredefinedFilter"
						},
						{
							"name": "KnowledgeBaseArticlesSearchFilter_KnowledgeBaseArticlesList",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});