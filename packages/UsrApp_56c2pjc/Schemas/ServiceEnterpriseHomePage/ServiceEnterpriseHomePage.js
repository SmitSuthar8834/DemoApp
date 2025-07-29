define("ServiceEnterpriseHomePage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "crt.IndicatorWidgetd0098b07-5e75-2979-d980-efb26a3309ed",
				"values": {
					"config": {
						"title": "#ResourceString(crtIndicatorWidgetd0098b075e752979d980efb26a3309ed_title)#",
						"data": {
							"providing": {
								"attribute": "crt_IndicatorWidgetd0098b07-5e75-2979-d980-efb26a3309ed_Data",
								"schemaName": "Case",
								"filters": {
									"filter": {
										"items": {
											"0ba30da0-10af-4319-8a43-44f89f158b05": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "ResponseOverdue"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": true
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Case"
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
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(crtIndicatorWidgetd0098b075e752979d980efb26a3309ed_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "bright-red"
						},
						"theme": "full-fill"
					}
				}
			},
			{
				"operation": "merge",
				"name": "crt.IndicatorWidgetb5a7d31c-f2bb-9389-6791-2a810961a274",
				"values": {
					"config": {
						"title": "#ResourceString(crtIndicatorWidgetb5a7d31cf2bb938967912a810961a274_title)#",
						"data": {
							"providing": {
								"attribute": "crt_IndicatorWidgetb5a7d31c-f2bb-9389-6791-2a810961a274_Data",
								"schemaName": "Case",
								"filters": {
									"filter": {
										"items": {
											"4470c813-5395-42f4-ad52-c7518ae8dcf3": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "SolutionOverdue"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": true
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Case"
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
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(crtIndicatorWidgetb5a7d31cf2bb938967912a810961a274_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "red"
						},
						"theme": "full-fill"
					}
				}
			},
			{
				"operation": "merge",
				"name": "crt.ChartWidget2dd3123b-a3d4-bd6c-ace2-77ef578ffb23",
				"values": {
					"config": {
						"title": "#ResourceString(crtChartWidget2dd3123ba3d4bd6cace277ef578ffb23_title)#",
						"color": "orange-red",
						"theme": "partial-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"type": "doughnut",
								"label": "#ResourceString(crtChartWidget2dd3123ba3d4bd6cace277ef578ffb23_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "crt_ChartWidget2dd3123b-a3d4-bd6c-ace2-77ef578ffb23_SeriesData_0",
										"schemaName": "Case",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrCategory"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Case"
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
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "UsrCategory"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					},
					"sectionBindingColumnRecordId": "$Id"
				}
			},
			{
				"operation": "merge",
				"name": "crt.ChartWidget8fccb539-466f-f5ce-f607-75000471bad3",
				"values": {
					"layoutConfig": {
						"row": 9,
						"rowSpan": 4,
						"column": 9,
						"colSpan": 4
					},
					"config": {
						"title": "#ResourceString(crtChartWidget8fccb539466ff5cef60775000471bad3_title)#",
						"color": "orange-red",
						"theme": "partial-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "orange",
								"type": "horizontal-bar",
								"label": "#ResourceString(crtChartWidget8fccb539466ff5cef60775000471bad3_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "crt_ChartWidget8fccb539-466f-f5ce-f607-75000471bad3_SeriesData_0",
										"schemaName": "Case",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Origin"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Case"
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
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "Origin"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"thousandSeparator": ","
									}
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					}
				}
			},
			{
				"operation": "move",
				"name": "crt.ChartWidget8fccb539-466f-f5ce-f607-75000471bad3",
				"parentName": "Main",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "merge",
				"name": "crt.IndicatorWidget1f843599-3298-7d39-6c18-66b2aa38ba03",
				"values": {
					"config": {
						"title": "#ResourceString(crtIndicatorWidget1f84359932987d396c1866b2aa38ba03_title)#",
						"data": {
							"providing": {
								"attribute": "crt_IndicatorWidget1f843599-3298-7d39-6c18-66b2aa38ba03_Data",
								"schemaName": "CaseLifecycle",
								"filters": {
									"filter": {
										"items": {},
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
												"columnPath": "StateDurationInHours"
											},
											"functionType": 2,
											"aggregationType": 3,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(crtIndicatorWidget1f84359932987d396c1866b2aa38ba03_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "bright-red"
						},
						"theme": "without-fill"
					}
				}
			},
			{
				"operation": "merge",
				"name": "crt.IndicatorWidgetd4b6d823-86c7-8947-005c-7d016680f4bf",
				"values": {
					"config": {
						"title": "#ResourceString(crtIndicatorWidgetd4b6d82386c78947005c7d016680f4bf_title)#",
						"data": {
							"providing": {
								"attribute": "crt_IndicatorWidgetd4b6d823-86c7-8947-005c-7d016680f4bf_Data",
								"schemaName": "Case",
								"filters": {
									"filter": {
										"items": {
											"1161ec41-2de5-44d3-83fd-726f43ebbdab": {
												"filterType": 5,
												"comparisonType": 15,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "[CaseLifecycle:Case].Id"
												},
												"isAggregative": true,
												"dataValueType": 0,
												"subFilters": {
													"items": {
														"e038067c-d743-4dcf-8c1a-2026fe698e20": {
															"filterType": 4,
															"comparisonType": 4,
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
																			"Name": "Reopened",
																			"IsFinal": false,
																			"Id": "f063ebbe-fdc6-4982-8431-d8cfa52fedcf",
																			"Image": "",
																			"value": "f063ebbe-fdc6-4982-8431-d8cfa52fedcf",
																			"displayValue": "Reopened"
																		}
																	}
																}
															]
														}
													},
													"logicalOperation": 0,
													"isEnabled": true,
													"filterType": 6,
													"rootSchemaName": "CaseLifecycle",
													"key": "56a8c0db-5d86-4fe4-8c2c-9dbaa6d392d4"
												}
											},
											"ab5045cc-3a8b-450b-811c-a49ee9b70ee8": {
												"items": {
													"99daed4c-08e3-4be0-b26f-3f91002d51cc": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Status.IsResolved"
														},
														"isAggregative": false,
														"dataValueType": 12,
														"rightExpression": {
															"expressionType": 2,
															"parameter": {
																"dataValueType": 12,
																"value": true
															}
														}
													},
													"3c3651ad-4865-4c0c-8e4a-d7953d65e9aa": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Status.IsFinal"
														},
														"isAggregative": false,
														"dataValueType": 12,
														"rightExpression": {
															"expressionType": 2,
															"parameter": {
																"dataValueType": 12,
																"value": true
															}
														}
													}
												},
												"logicalOperation": 1,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Case",
												"key": "ab5045cc-3a8b-450b-811c-a49ee9b70ee8"
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Case"
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
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(crtIndicatorWidgetd4b6d82386c78947005c7d016680f4bf_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "bright-red"
						},
						"theme": "without-fill"
					}
				}
			},
			{
				"operation": "merge",
				"name": "crt.IndicatorWidget5df3bc04-a346-ac31-6055-97dd4db2cd25",
				"values": {
					"config": {
						"title": "#ResourceString(crtIndicatorWidget5df3bc04a346ac31605597dd4db2cd25_title)#",
						"data": {
							"providing": {
								"attribute": "crt_IndicatorWidget5df3bc04-a346-ac31-6055-97dd4db2cd25_Data",
								"schemaName": "Case",
								"filters": {
									"filter": {
										"items": {
											"2fe18516-b0a6-483f-86e0-9aa63e3d924c": {
												"filterType": 2,
												"comparisonType": 2,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "SatisfactionLevel"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "SatisfactionLevel",
												"isNull": false
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Case"
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
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(crtIndicatorWidget5df3bc04a346ac31605597dd4db2cd25_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "orange-red"
						},
						"theme": "without-fill"
					}
				}
			},
			{
				"operation": "merge",
				"name": "crt.IndicatorWidget2efb8e03-18ea-f237-831c-550975cb8891",
				"values": {
					"config": {
						"title": "#ResourceString(crtIndicatorWidget2efb8e0318eaf237831c550975cb8891_title)#",
						"data": {
							"providing": {
								"attribute": "crt_IndicatorWidget2efb8e03-18ea-f237-831c-550975cb8891_Data",
								"schemaName": "Case",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Case"
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
												"columnPath": "SatisfactionLevel.Point"
											},
											"functionType": 2,
											"aggregationType": 3,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(crtIndicatorWidget2efb8e0318eaf237831c550975cb8891_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "orange-red"
						},
						"theme": "without-fill"
					}
				}
			},
			{
				"operation": "merge",
				"name": "crt.ChartWidget71615f3b-5806-d655-c1d5-28aa86aa759a",
				"values": {
					"layoutConfig": {
						"row": 13,
						"rowSpan": 4,
						"column": 9,
						"colSpan": 4
					},
					"config": {
						"title": "#ResourceString(crtChartWidget71615f3b5806d655c1d528aa86aa759a_title)#",
						"color": "orange-red",
						"theme": "partial-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "coral",
								"type": "horizontal-bar",
								"label": "#ResourceString(crtChartWidget71615f3b5806d655c1d528aa86aa759a_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "crt_ChartWidget71615f3b-5806-d655-c1d5-28aa86aa759a_SeriesData_0",
										"schemaName": "Case",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Owner"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Case"
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
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "Owner"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"thousandSeparator": ","
									}
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 2
						}
					}
				}
			},
			{
				"operation": "move",
				"name": "crt.ChartWidget71615f3b-5806-d655-c1d5-28aa86aa759a",
				"parentName": "Main",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "merge",
				"name": "crt.ChartWidget28ef0973-a8a1-4b3a-ca71-633a2f2e3f5d",
				"values": {
					"config": {
						"title": "#ResourceString(crtChartWidget28ef0973a8a14b3aca71633a2f2e3f5d_title)#",
						"color": "orange-red",
						"theme": "partial-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "#ResourceString(crtChartWidget28ef0973a8a14b3aca71633a2f2e3f5d_xAxis)#",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "#ResourceString(crtChartWidget28ef0973a8a14b3aca71633a2f2e3f5d_yAxis)#",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "red",
								"type": "spline",
								"label": "#ResourceString(crtChartWidget28ef0973a8a14b3aca71633a2f2e3f5d_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "crt_ChartWidget28ef0973-a8a1-4b3a-ca71-633a2f2e3f5d_SeriesData_0",
										"schemaName": "Case",
										"filters": {
											"filter": {
												"items": {
													"c64fbcd7-4a20-4df9-93bb-184eb599beff": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "SolutionDate"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 10
														}
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "SolutionDate"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Case"
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
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "SolutionDate"
														},
														"functionType": 3,
														"datePartType": 1
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "SolutionDate"
														},
														"functionType": 3,
														"datePartType": 3
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"thousandSeparator": ","
									}
								}
							},
							{
								"color": "celestial-blue",
								"type": "spline",
								"label": "#ResourceString(crtChartWidget28ef0973a8a14b3aca71633a2f2e3f5d_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "crt_ChartWidget28ef0973-a8a1-4b3a-ca71-633a2f2e3f5d_SeriesData_1",
										"schemaName": "Case",
										"filters": {
											"filter": {
												"items": {
													"284832a7-eea2-4683-a3f9-520f29a7f89a": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "SolutionProvidedOn"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 10
														}
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "SolutionProvidedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Case"
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
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "SolutionProvidedOn"
														},
														"functionType": 3,
														"datePartType": 1
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "SolutionProvidedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"thousandSeparator": ","
									}
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "crt.ChartWidgetb18ce75b-d995-502d-ffa0-305011afe479",
				"values": {
					"config": {
						"title": "#ResourceString(crtChartWidgetb18ce75bd995502dffa0305011afe479_title)#",
						"color": "orange-red",
						"theme": "partial-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"type": "doughnut",
								"label": "#ResourceString(crtChartWidgetb18ce75bd995502dffa0305011afe479_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "crt_ChartWidgetb18ce75b-d995-502d-ffa0-305011afe479_SeriesData_0",
										"schemaName": "Case",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Category"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Case"
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
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "Category"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					},
					"sectionBindingColumnRecordId": "$Id"
				}
			},
			{
				"operation": "merge",
				"name": "crt.ChartWidget6156c3ce-685e-b8c0-675d-5630c24321cf",
				"values": {
					"layoutConfig": {
						"row": 13,
						"rowSpan": 4,
						"column": 5,
						"colSpan": 4
					},
					"config": {
						"title": "#ResourceString(crtChartWidget6156c3ce685eb8c0675d5630c24321cf_title)#",
						"color": "orange-red",
						"theme": "partial-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "red",
								"type": "horizontal-bar",
								"label": "#ResourceString(crtChartWidget6156c3ce685eb8c0675d5630c24321cf_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "crt_ChartWidget6156c3ce-685e-b8c0-675d-5630c24321cf_SeriesData_0",
										"schemaName": "Case",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "SatisfactionLevel"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Case"
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
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "SatisfactionLevel"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"thousandSeparator": ","
									}
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					}
				}
			},
			{
				"operation": "insert",
				"name": "ChartWidget_jli8a3y",
				"values": {
					"layoutConfig": {
						"column": 9,
						"colSpan": 4,
						"rowSpan": 8,
						"row": 1
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_jli8a3y_title)#",
						"color": "orange-red",
						"theme": "partial-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"type": "doughnut",
								"label": "#ResourceString(ChartWidget_jli8a3y_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_jli8a3y_SeriesData_0",
										"schemaName": "Case",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrSub_Category"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Case"
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
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "UsrSub_Category"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ChartWidget_tx0mu27",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 4,
						"rowSpan": 6,
						"row": 13
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_tx0mu27_title)#",
						"color": "orange-red",
						"theme": "partial-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "#ResourceString(ChartWidget_tx0mu27_xAxis)#",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "#ResourceString(ChartWidget_tx0mu27_yAxis)#",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "red",
								"type": "spline",
								"label": "#ResourceString(ChartWidget_tx0mu27_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_tx0mu27_SeriesData_0",
										"schemaName": "Case",
										"filters": {
											"filter": {
												"items": {
													"b208b070-547d-4b39-a9d8-ebc2618b97dc": {
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
																		"IsFinal": false,
																		"Id": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
																		"Image": "",
																		"StatusColor": "#0058EF",
																		"value": "ae5f2f10-f46b-1410-fd9a-0050ba5d6c38",
																		"displayValue": "New"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Status"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Case"
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
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "Status"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": null
								}
							},
							{
								"color": "celestial-blue",
								"type": "spline",
								"label": "#ResourceString(ChartWidget_tx0mu27_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_tx0mu27_SeriesData_1",
										"schemaName": "Case",
										"filters": {
											"filter": {
												"items": {
													"f9560d0f-e876-4a19-9e41-ee97905ea84e": {
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
																		"Name": "Closed",
																		"IsFinal": true,
																		"Id": "3e7f420c-f46b-1410-fc9a-0050ba5d6c38",
																		"Image": "",
																		"StatusColor": "#7848EE",
																		"value": "3e7f420c-f46b-1410-fc9a-0050ba5d6c38",
																		"displayValue": "Closed"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Status"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Case"
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
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "Status"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 11
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"attributes": {}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});